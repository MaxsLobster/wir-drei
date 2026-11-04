#!/usr/bin/env node
// Verschlüsselt Foto und Maske zu familie.enc (AES-256-GCM). Läuft lokal mit Node, ohne Abhängigkeiten.
//
//   node werkzeuge/verschluesseln.js [foto.jpg] [maske.png] [--ziel familie.enc] [--schluessel <Schlüssel>]
//
// Ohne Angaben sucht das Werkzeug foto.jpg und maske.png im aktuellen Ordner und im Ordner darüber.
// Der Schlüssel wird neu ausgelost und einmal im Terminal ausgegeben. Er wird nirgends gespeichert.
// Mit --schluessel lässt sich ein vorhandener Schlüssel wiederverwenden, dann bleibt die Adresse im Muse gleich.
'use strict';
const fs=require('fs'),path=require('path'),crypto=require('crypto');

const MAGIC=Buffer.from('WIRDREI1','ascii');
const args=process.argv.slice(2);
let ziel='familie.enc',schluessel=null;const dateien=[];
for(let i=0;i<args.length;i++){
  if(args[i]==='--ziel')ziel=args[++i];
  else if(args[i]==='--schluessel')schluessel=args[++i];
  else if(args[i]==='--hilfe'||args[i]==='-h'){console.log(fs.readFileSync(__filename,'utf8').split('\n').slice(1,8).map(l=>l.replace(/^\/\/ ?/,'')).join('\n'));process.exit(0);}
  else dateien.push(args[i]);
}
function finde(name){for(const d of [process.cwd(),path.resolve(process.cwd(),'..'),path.resolve(__dirname,'..'),path.resolve(__dirname,'../..')]){const p=path.join(d,name);if(fs.existsSync(p))return p;}return null;}
const fotoPfad=dateien[0]||finde('foto.jpg'),maskePfad=dateien[1]||finde('maske.png');
if(!fotoPfad||!fs.existsSync(fotoPfad)){console.error('Foto nicht gefunden (foto.jpg). Pfad als erstes Argument angeben.');process.exit(1);}
if(!maskePfad||!fs.existsSync(maskePfad)){console.error('Maske nicht gefunden (maske.png). Pfad als zweites Argument angeben.');process.exit(1);}
const typ=p=>/\.jpe?g$/i.test(p)?'image/jpeg':/\.png$/i.test(p)?'image/png':/\.webp$/i.test(p)?'image/webp':'application/octet-stream';

const b64u=b=>b.toString('base64').replace(/\+/g,'-').replace(/\//g,'_').replace(/=+$/,'');
const vonB64u=s=>Buffer.from(s.replace(/-/g,'+').replace(/_/g,'/'),'base64');

let key;
if(schluessel){key=vonB64u(schluessel.trim());if(key.length!==32){console.error('Der angegebene Schlüssel hat nicht die richtige Länge (erwartet 43 Zeichen).');process.exit(1);}}
else key=crypto.randomBytes(32);

const foto=fs.readFileSync(fotoPfad),maske=fs.readFileSync(maskePfad);
const kopf=Buffer.from(JSON.stringify({foto:{typ:typ(fotoPfad),laenge:foto.length},maske:{typ:typ(maskePfad),laenge:maske.length}}),'utf8');
const len=Buffer.alloc(4);len.writeUInt32BE(kopf.length,0);
const klartext=Buffer.concat([len,kopf,foto,maske]);

const iv=crypto.randomBytes(12);
const c=crypto.createCipheriv('aes-256-gcm',key,iv);
const ct=Buffer.concat([c.update(klartext),c.final()]);
const tag=c.getAuthTag();
const paket=Buffer.concat([MAGIC,iv,ct,tag]);

// Gegenprobe: lässt sich das Paket mit dem Schlüssel wieder öffnen?
{const d=crypto.createDecipheriv('aes-256-gcm',key,paket.subarray(8,20));d.setAuthTag(paket.subarray(paket.length-16));
  const pt=Buffer.concat([d.update(paket.subarray(20,paket.length-16)),d.final()]);
  if(!pt.equals(klartext)){console.error('Gegenprobe fehlgeschlagen, nichts geschrieben.');process.exit(1);}}

const zielPfad=path.resolve(ziel);
fs.writeFileSync(zielPfad,paket);
const k=b64u(key);
console.log('Geschrieben: '+zielPfad+' ('+Math.round(paket.length/1024)+' KB, Foto '+Math.round(foto.length/1024)+' KB, Maske '+Math.round(maske.length/1024)+' KB)');
console.log('');
console.log(schluessel?'Schlüssel (wiederverwendet):':'Schlüssel (neu, bitte sicher notieren, er wird nirgends gespeichert):');
console.log('  '+k);
console.log('');
console.log('Adresse für den Muse Frame:');
console.log('  https://maxslobster.github.io/wir-drei/#k='+k);
console.log('');
console.log('Test-Modus:');
console.log('  https://maxslobster.github.io/wir-drei/?dev=1#k='+k);
