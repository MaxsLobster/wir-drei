# Wir drei

Ein lebendes Pixelbild: unser Familienfoto aus den Reisterrassen von Bali als
Lichtzeit-Raster, das zugleich **Uhr**, **Wetteranzeige** und kleiner
**Tagesbegleiter** ist. Es läuft dauerhaft im Browser, gedacht für einen
32-Zoll Muse Frame im Hochformat. Technik und Ruhe wie bei
[Lichtzeit](https://github.com/MaxsLobster/lichtzeit).

**Adresse:** https://maxslobster.github.io/wir-drei/#k=… (der Schlüssel hinter
`#k=` steht nur in der Adresse, siehe „Privatsphäre“)

## Was im Bild passiert

- **Look:** Lichtzeit-Raster mit dünnen Fugen, Lichtwellen von der Sonne, Wind
  in Feldern und Gras, ziehende Wolken, Glitzern im Wasser. Alles in der
  Landschaft läuft hinter der Familie.
- **Licht:** Die Tageszeit färbt das Bild wie bei Lichtzeit, aber nach dem
  **echten Sonnenstand** für den Ort: Sonnenauf- und -untergang werden
  berechnet. Die Lichtquelle wandert mit der Sonne von links nach rechts, nachts
  wandert sie zurück. Unter dem Horizont wird das Bild blau, ab der Dämmerung
  kommt der Lichtzeit-Dither. Die Familie bleibt dabei immer erkennbar.
- **Uhr** oben rechts: helle Pixelziffern mit weichem Schatten, ohne Rahmen.
  Beim Minutenwechsel verwehen die alten Pixel und die neuen setzen sich.
- **Oben links:** Temperatur und kleine Symbole in einer Reihe:
  - Gummistiefel: es regnet gerade oder die Regenwahrscheinlichkeit in den
    nächsten 6 Stunden liegt bei 50 % oder mehr
  - Mütze und Handschuhe: unter 5 °C
  - Sonnenhut und Sonnencreme: UV-Index 5 oder mehr, nur tagsüber
  - Mülltonne in der Tonnenfarbe (siehe „Mülltonnen“)
- **Echtes Wetter** von [Open-Meteo](https://open-meteo.com), alle 15 Minuten.
  Regnet es draußen, regnet es im Bild. Wind bewegt die Felder stärker. Hört
  der Regen tagsüber auf, erscheint ein Regenbogen hinter uns und ein Einhorn
  galoppiert mit Glitzerspur darüber. Der letzte Stand wird im Browser
  gespeichert; ohne Internet läuft das Bild damit weiter. Ist er älter als
  6 Stunden, gilt ein ruhiges simuliertes Wetter.
- **Countdown-Lichterkette** im Himmel unter der Uhr: 15 Birnen, jede Minute
  geht eine aus, die letzte blinkt kurz vor dem Ende.
  - Mo–Fr 8:00–8:15 (Kindergarten): knallbunt
  - täglich 19:00–19:15 (Schlafen): sanfte, müde Pastellfarben, langsames Glimmen
- **Gute-Nacht-Moment um 19:00:** Der Mond geht auf, zwei Sternschnuppen fallen,
  Glühwürmchen kreisen um uns. Das Bild wird für die Dauer des Moments sanft
  abendlich, auch im Sommer, wenn die Sonne noch scheint. Danach gilt wieder
  das Licht nach Sonnenstand.
- **Mülltonnen:** Das Symbol ist vom Vortag 6:00 bis zum Abholtag 10:00 zu
  sehen, am Abholtag wackelt es.
- **Szenen** (Pixelfiguren wie bei Lichtzeit):
  - immer tagsüber: ein Silberreiher pickt und fliegt um, Schmetterlinge im
    Feld; regelmäßig ziehen balinesische Laufenten mit einem trödelnden Küken
    vorbei
  - im Wechsel alle 10–15 Minuten tagsüber: ein Affe klaut ein Reisbündel von
    Max' Stange und bringt es zurück; Schmetterlinge besuchen Valerie, einer
    landet auf ihrem Hut und eine Blüte wächst; Valerie und Max lüften die Hüte
  - nachts: Sterne, Glühwürmchen, ab und zu eine Sternschnuppe
- Immer nur ein Gag gleichzeitig. Uhr, Temperatur, Symbole und Lichterkette
  werden nie verdeckt.

## Privatsphäre

Das Foto zeigt unsere Tochter. Foto und Maske liegen deshalb **nicht im
Klartext** im Repo:

- Ins Repo kommt nur `familie.enc`: Foto und Maske zusammen, verschlüsselt mit
  AES-256-GCM.
- Der Schlüssel steht nur in der Adresse hinter `#k=…`. Dieser Teil einer
  Adresse (das „Fragment“) wird vom Browser **nie an den Server geschickt**,
  auch nicht an GitHub. Die Seite entschlüsselt das Paket im Browser und hält
  Foto und Maske nur im Arbeitsspeicher.
- Ohne gültigen Schlüssel zeigt die Seite nur ein neutrales, leeres Raster.
- `foto.jpg` und `maske.png` stehen in `.gitignore` und können nicht aus
  Versehen committet werden.
- Das tägliche Neuladen um 4:00 behält die Adresse samt Schlüssel.

### Neu verschlüsseln (bei neuem Foto oder neuer Maske)

Lokal auf dem Mac, Node muss installiert sein. Im Repo-Ordner:

```bash
node werkzeuge/verschluesseln.js ../foto.jpg ../maske.png
```

Das Werkzeug schreibt `familie.enc`, lost einen neuen Schlüssel aus und gibt ihn
**einmal** im Terminal aus, zusammen mit der fertigen Adresse. Er wird nirgends
gespeichert. Soll die Adresse im Muse gleich bleiben, den vorhandenen Schlüssel
mitgeben:

```bash
node werkzeuge/verschluesseln.js ../foto.jpg ../maske.png --schluessel <Schlüssel>
```

Danach `familie.enc` committen und pushen. Die Maske muss dieselbe Größe wie
das Foto haben (weiß = Familie inklusive Korb, Stange und Reisbündel).

## Dateien

- `index.html` – das Kunstwerk (eine Datei, ohne Build-Werkzeuge)
- `familie.enc` – Foto und Maske, verschlüsselt
- `config.json` – Einstellungen
- `werkzeuge/verschluesseln.js` – lokales Werkzeug zum Verschlüsseln
- `README.md` – diese Anleitung

## Einstellungen ändern

Alle veränderbaren Daten stehen in `config.json`:

1. Auf GitHub die Datei `config.json` öffnen und auf das Stift-Symbol klicken.
2. Werte ändern, dann unten auf **Commit changes** klicken.
3. Nach ein bis zwei Minuten ist die Änderung online, spätestens beim
   Neuladen um 4:00 ist sie auf dem Muse.

| Eintrag | Bedeutung |
|---|---|
| `ort` | Name und Koordinaten (`breite`, `laenge`). Bestimmen Sonnenstand und Wetter. |
| `countdowns` | Liste der Lichterketten. Je Eintrag `name`, `von` und `bis` (Uhrzeit), `tage` (Wochentage als `"Mo"` … `"So"`) und `stil` (`"bunt"` oder `"sanft"`). |
| `gute_nacht` | Uhrzeit des Gute-Nacht-Moments. |
| `tonnen` | Liste der Mülltonnen, siehe unten. |
| `tonnen_anzeige` | `ab_vortag`: ab wann am Vortag die Tonne erscheint. `bis_abholtag`: bis wann am Abholtag. |
| `schwellen` | `kalt_unter_grad` (Mütze und Handschuhe), `uv_ab` (Sonnenhut und Sonnencreme), `regen_ab_prozent` und `regen_stunden` (Gummistiefel). |
| `szenen` | `an`: Szenen an (`true`) oder aus (`false`). `gag_alle_minuten`: Abstand zwischen zwei Gags als `[kleinster, größter]` Wert in Minuten. `enten_alle_minuten`: wie oft die Laufenten kommen. |
| `wetter` | `echt`: echtes Wetter an oder aus. `aktualisieren_minuten`: wie oft abgerufen wird (mindestens 5). |
| `anzeige` | `raster_px`: Bildpunkte je Rasterzelle oder `"auto"`. `max_fps`: höchste Bildrate, Standard 30. |

### Mülltonnen

```json
{ "name": "Papier", "farbe": "blau", "erster_termin": "2026-11-05", "alle_tage": 28,
  "verschiebungen": [ { "von": "2026-12-31", "auf": "2027-01-02" } ] }
```

- `farbe`: `blau`, `grau`, `gelb`, `braun`, `gruen`, `schwarz`, `orange` oder
  ein Farbwert wie `"#3366cc"`.
- `erster_termin` und `alle_tage`: ab diesem Tag alle so viele Tage.
- `verschiebungen`: Feiertags-Verschiebungen als Liste. `von` ist der
  rechnerische Termin, `auf` der tatsächliche Abholtag.

Regeln, damit nichts schiefgeht:

- Uhrzeiten als `"HH:MM"`, Datumsangaben als `"JJJJ-MM-TT"`.
- Anführungszeichen und Kommas stehen lassen wie im Beispiel.
- Einträge, deren Name mit `_` beginnt (z. B. `"_notiz"`), sind Notizen und
  werden ignoriert.
- Ist ein Wert fehlerhaft, gilt dafür der eingebaute Standard. Das Bild läuft
  immer weiter. Im Test-Modus (`?dev=1`) steht in der Info-Zeile, welcher
  Eintrag nicht passt.

## Anzeige und Leistung

Das Raster hat immer 90 × 160 Zellen wie der Prototyp; die Szenen sind darauf
abgestimmt. Die Zellengröße passt sich dem Bildschirm an: Auf dem Muse (2160 ×
3840 hochkant) hat eine Zelle 24 Bildpunkte, die Fuge 2. Auf einem
1080 × 1920-Bildschirm sind es 12 und 1. Hat der Bildschirm nicht das
Seitenverhältnis 9:16, bleibt rundherum ein dunkler Rand.

Pro Gerät lässt sich die Anzeige an der Adresse überschreiben, ohne
`config.json` zu ändern: `?raster=24&fps=30` (Zellengröße in Bildpunkten oder
`auto`, höchste Bildrate).

Die Rechenarbeit ist klein (14 400 Zellen je Bild). Im Test-Modus steht oben
links, wie viele Bilder pro Sekunde gezeichnet werden und wie lange ein Bild
braucht.

## Uhrzeit

Wir drei rechnet immer in Berliner Zeit, auch wenn am Gerät eine andere
Zeitzone eingestellt ist. Geht die Uhr des Geräts mehr als eine Minute falsch,
korrigiert die Seite sie anhand der Serveruhr. Beides steht im Test-Modus in
der Info-Zeile.

## Ausstellungsmodus

Die normale Adresse zeigt nur das Bild: keine Steuerleiste, kein Mauszeiger.
Berührungen bewirken nichts. Außerdem:

- Der Bildschirm wird wach gehalten, wenn der Browser das unterstützt.
- Jeden Tag um 4:00 lädt sich die Seite neu, damit Änderungen ankommen. Die
  Adresse samt Schlüssel bleibt dabei erhalten. Das passiert nur, wenn die
  Seite gerade erreichbar ist; ohne Internet läuft das Bild einfach weiter.
- Höchstens 30 Bilder pro Sekunde.

### Im Muse Frame als Startseite eintragen

1. Lokal `node werkzeuge/verschluesseln.js` ausführen (oder die beim letzten Mal
   ausgegebene Adresse nehmen). Die Adresse hat die Form
   `https://maxslobster.github.io/wir-drei/#k=…`.
2. Im Muse Frame den Chrome-Browser öffnen und die komplette Adresse eingeben,
   inklusive `#k=…`.
3. Diese Adresse als Startseite bzw. Startadresse des Frames setzen. Der Muse
   speichert sie nur lokal; GitHub sieht den Schlüssel nie.
4. Einmal prüfen, ob das Foto erscheint. Erscheint nur ein leeres Raster, fehlt
   der Schlüssel oder er ist falsch abgetippt.

## Test-Parameter

Parameter werden an die Adresse angehängt: der erste mit `?`, weitere mit `&`.
Der Schlüssel `#k=…` kommt immer ganz ans Ende.

| Parameter | Wirkung |
|---|---|
| `?dev=1` | Test-Modus: Steuerleiste (Jetzt, Zeitraffer, 8:00 Kindergarten, 19:00 Schlafen, 14:00, 23:00, Wetter-Vorschau Regen/Kalt/Sonne, Tonnen-Vorschau, Szenen-Knöpfe), Info-Zeile mit Sonnenzeiten, Wetterquelle, aktueller Szene, Tonnen und Hinweisen. Ein Tipp aufs Bild blendet die Steuerung aus. |
| `?t=2026-12-24T17:30` | Zeit simulieren. Die Uhr läuft ab diesem Moment weiter. Auch möglich: `?t=17:30` (heute) oder `?t=2026-12-24` (12 Uhr). |
| `?wetter=regen` | Wetter erzwingen: `regen`, `kalt` oder `sonne`. |
| `?raster=`, `?fps=` | Anzeige für dieses Gerät, siehe „Anzeige und Leistung“. |

Beispiele:

- `https://maxslobster.github.io/wir-drei/?dev=1#k=…`
- `https://maxslobster.github.io/wir-drei/?t=08:05#k=…` – Lichterkette bunt
- `https://maxslobster.github.io/wir-drei/?t=19:02&wetter=regen#k=…`

## Stand

Wir drei ist fertig und läuft. Die Kontroll-Screenshots der Abnahme (8:05,
14:00, 19:05, 23:00, Regen, Kalt, Sonne, Tonnen-Vortag) liegen lokal in
`balifoto/abnahme/`, nicht im Repo.
