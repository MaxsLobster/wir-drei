#!/usr/bin/env node
// Verschlüsselt Foto, Gesamtmaske und die Zusatzbilder zu familie.enc (AES-256-GCM). Läuft lokal mit Node, ohne Abhängigkeiten.
//
//   node werkzeuge/verschluesseln.js [foto] [maske] [--anna …] [--max …] [--valerie …] [--see …] [--leer …] [--ziel familie.enc] [--schluessel <Schlüssel>]
//
// Ohne Pfade sucht das Werkzeug im aktuellen Ordner und im Ordner darüber: foto-g3.jpg (sonst foto.jpg), maske-g3.png (sonst maske.png),
// maske-anna.png, maske-max.png, maske-valerie.png, see-maske.png, hintergrund-leer-g3.jpg. Fehlende Zusatzbilder werden übersprungen.
// Ohne --schluessel wird ein neuer Schlüssel ausgelost und einmal im Terminal ausgegeben. Er wird nirgends gespeichert.
// Mit --schluessel lässt sich der vorhandene Schlüssel wiederverwenden, dann bleibt die Adresse im Muse gleich.
'use strict';
const fs=require('fs'),path=require('path'),crypto=require('crypto');

const MAGIC=Buffer.from('WIRDREI1','ascii');
// Zusatzbilder: Name im Paket, Option, Dateinamen für die Suche. Die Seite liest sie unter diesem Namen.
const WEITERE=[['anna','--anna',['maske-anna.png']],['max','--max',['maske-max.png']],['valerie','--valerie',['maske-valerie.png']],
  ['see','--see',['see-maske.png']],['leer','--leer',['hintergrund-leer-g3.jpg','hintergrund-leer.jpg']]];
const args=process.argv.slice(2);
let ziel='familie.enc',schluessel=null;const dateien=[],opt={};
for(let i=0;i<args.length;i++){const a=args[i],w=WEITERE.find(w=>w[1]===a);
  if(a==='--ziel')ziel=args[++i];
  else if(a==='--schluessel')schluessel=args[++i];
  else if(w)opt[w[0]]=args[++i];
  else if(a==='--hilfe'||a==='-h'){console.log(fs.readFileSync(__filename,'utf8').split('\n').slice(1,10).map(l=>l.replace(/^\/\/ ?/,'')).join('\n'));process.exit(0);}
  else dateien.push(a);
}
function finde(namen){for(const name of namen)for(const d of [process.cwd(),path.resolve(process.cwd(),'..'),path.resolve(__dirname,'..'),path.resolve(__dirname,'../..')]){const p=path.join(d,name);if(fs.existsSync(p))return p;}return null;}
const fotoPfad=dateien[0]||finde(['foto-g3.jpg','foto.jpg']),maskePfad=dateien[1]||finde(['maske-g3.png','maske.png']);
if(!fotoPfad||!fs.existsSync(fotoPfad)){console.error('Foto nicht gefunden (foto-g3.jpg oder foto.jpg). Pfad als erstes Argument angeben.');process.exit(1);}
if(!maskePfad||!fs.existsSync(maskePfad)){console.error('Maske nicht gefunden (maske-g3.png oder maske.png). Pfad als zweites Argument angeben.');process.exit(1);}
const typ=p=>/\.jpe?g$/i.test(p)?'image/jpeg':/\.png$/i.test(p)?'image/png':/\.webp$/i.test(p)?'image/webp':'application/octet-stream';

const b64u=b=>b.toString('base64').replace(/\+/g,'-').replace(/\//g,'_').replace(/=+$/,'');
const vonB64u=s=>Buffer.from(s.replace(/-/g,'+').replace(/_/g,'/'),'base64');

let key;
if(schluessel){key=vonB64u(schluessel.trim());if(key.length!==32){console.error('Der angegebene Schlüssel hat nicht die richtige Länge (erwartet 43 Zeichen).');process.exit(1);}}
else key=crypto.randomBytes(32);

const foto=fs.readFileSync(fotoPfad),maske=fs.readFileSync(maskePfad);
const weitere=[],teile=[foto,maske],fehlt=[];
for(const [name,o,namen] of WEITERE){const p=opt[name]||finde(namen);
  if(opt[name]&&!fs.existsSync(opt[name])){console.error(name+': Datei nicht gefunden ('+opt[name]+').');process.exit(1);}
  if(!p){fehlt.push(name);continue;}
  const b=fs.readFileSync(p);weitere.push({name,typ:typ(p),laenge:b.length,datei:path.basename(p)});teile.push(b);}
const kopf=Buffer.from(JSON.stringify({foto:{typ:typ(fotoPfad),laenge:foto.length},maske:{typ:typ(maskePfad),laenge:maske.length},
  weitere:weitere.map(({name,typ,laenge})=>({name,typ,laenge}))}),'utf8');
const len=Buffer.alloc(4);len.writeUInt32BE(kopf.length,0);
const klartext=Buffer.concat([len,kopf,...teile]);

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
console.log('Geschrieben: '+zielPfad+' ('+Math.round(paket.length/1024)+' KB)');
console.log('  Foto  '+path.basename(fotoPfad)+' ('+Math.round(foto.length/1024)+' KB)');
console.log('  Maske '+path.basename(maskePfad)+' ('+Math.round(maske.length/1024)+' KB)');
for(const w of weitere)console.log('  '+w.name.padEnd(8)+w.datei+' ('+Math.round(w.laenge/1024)+' KB)');
if(fehlt.length)console.log('  nicht gefunden, übersprungen: '+fehlt.join(', ')+' (das Bild läuft dann ohne diese Teile)');
console.log('');
if(schluessel){console.log('Schlüssel wiederverwendet, die Adresse im Muse bleibt gleich.');}
else{console.log('Schlüssel (neu, bitte sicher notieren, er wird nirgends gespeichert):');console.log('  '+k);console.log('');
  console.log('Adresse für den Muse Frame:');console.log('  https://maxslobster.github.io/wir-drei/#k='+k);console.log('');
  console.log('Test-Modus:');console.log('  https://maxslobster.github.io/wir-drei/?dev=1#k='+k);}
