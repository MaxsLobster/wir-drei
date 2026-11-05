# Wir drei

Ein lebendes Pixelbild: unser Familienfoto aus den Reisterrassen von Bali vor
einer gemalten Landschaft („Vulkansee“: Terrassen steigen bis zu einem See,
dahinter ein Vulkan, oben ein Streifen Himmel) als Lichtzeit-Raster, das zugleich **Uhr**, **Wetteranzeige** und kleiner
**Tagesbegleiter** ist. Es läuft dauerhaft im Browser, gedacht für einen
32-Zoll Muse Frame im Hochformat. Technik und Ruhe wie bei
[Lichtzeit](https://github.com/MaxsLobster/lichtzeit).

**Adresse:** https://maxslobster.github.io/wir-drei/#k=… (der Schlüssel hinter
`#k=` steht nur in der Adresse, siehe „Privatsphäre“)

## Was im Bild passiert

- **Look:** Lichtzeit-Raster mit dünnen Fugen, Lichtwellen von der Sonne, Wind
  in Terrassen, Gras und auf dem See, ziehende Wolken nur im Himmelsstreifen
  über dem Vulkan, Glitzern im Wasser. Alles in der Landschaft läuft hinter der
  Familie.
- **Lichtstrahl auf dem See** wie bei Lichtzeit: tagsüber unter der Sonne, warm
  bei tiefem Stand, hell am Mittag, und er wandert mit dem echten Sonnenstand
  von links (Osten) nach rechts (Westen). Nachts liegt er unter dem Mond, wenn
  der Mond am Himmel steht. Steht er unter dem Horizont, wandert wie bei
  Lichtzeit ein schwächerer Mondlichtstrahl mit der Nacht. Die Stärke folgt der
  Mondphase. Der Strahl glitzert, wird zum nahen Ufer hin breiter und bleibt
  innerhalb der Seefläche. Regen dämpft ihn.
- **Wir bewegen uns mit:** Der echte Wind weht durch Annas Haare und das Gras im
  Korb, beide Reisbündel pendeln, Valeries Kleid und Hose bewegen sich. Die
  Gesichter bleiben immer ruhig. Alle 20–40 Sekunden kommt im Wechsel eine
  kleine Bewegung: Valerie hüpft, Anna rückt den Korb zurecht (darunter
  erscheint ihr Kopf), Max wippt die Stange und die Bündel schaukeln nach. Ein
  leichter Schimmer liegt in Kleidung und Haaren (abschaltbar). Stellen, die
  beim Bewegen kurz frei werden, füllt das leere Hintergrundbild.
- **Licht:** Die Tageszeit färbt das Bild wie bei Lichtzeit, aber nach dem
  **echten Sonnenstand** für den Ort: Sonnenauf- und -untergang werden
  berechnet. Die Lichtwellen gehen von der Sonne aus, nachts vom Mondstrahl auf
  dem See. Nachts wird das Bild dunkel, entsättigt und in ein
  tiefes, ruhiges Blau getaucht wie bei Lichtzeit; der Dither liegt nur leicht
  über der Landschaft. Die Familie bleibt ohne Muster wie im Mondlicht
  erkennbar, Sterne, Glühwürmchen und Lichter sind einzelne helle Punkte.
- **Uhr** oben rechts: helle Pixelziffern mit dunklem Rand und Schatten, ohne
  Rahmen, damit sie über Vulkan, Wolken und See lesbar bleiben. Temperatur und
  Symbole haben denselben Rand.
  Beim Minutenwechsel verwehen die alten Pixel und die neuen setzen sich.
- **Oben links:** Temperatur und kleine Symbole in einer Reihe:
  - Gummistiefel: es regnet gerade oder die Regenwahrscheinlichkeit in den
    nächsten 6 Stunden liegt bei 50 % oder mehr
  - Mütze und Handschuhe: unter 5 °C
  - Sonnenhut und Sonnencreme: UV-Index 5 oder mehr, nur tagsüber
  - Mülltonne in der Tonnenfarbe (siehe „Mülltonnen“)
- **Echtes Wetter** von [Open-Meteo](https://open-meteo.com), alle 15 Minuten.
  Regnet es draußen, regnet es im Bild. Wind bewegt Terrassen, See und uns
  stärker. Hört
  der Regen tagsüber auf, erscheint ein Regenbogen hinter uns und ein Einhorn
  galoppiert mit Glitzerspur darüber. Der letzte Stand wird im Browser
  gespeichert; ohne Internet läuft das Bild damit weiter. Ist er älter als
  6 Stunden, gilt ein ruhiges simuliertes Wetter.
- **Countdown-Lichterkette** im Himmel unter der Uhr: 15 Birnen, jede Minute
  geht eine aus, die letzte blinkt kurz vor dem Ende.
  - Mo–Fr 8:00–8:15 (Kindergarten): knallbunt
  - täglich 19:00–19:15 (Schlafen): sanfte, müde Pastellfarben, langsames Glimmen
- **Gute-Nacht-Moment um 19:00:** Der Mond steigt links hinter dem Vulkanhang auf, zwei Sternschnuppen fallen,
  Glühwürmchen kreisen um uns. Das Bild wird für die Dauer des Moments sanft
  abendlich, auch im Sommer, wenn die Sonne noch scheint. Danach gilt wieder
  das Licht nach Sonnenstand.
- **Mülltonnen:** Das Symbol ist vom Vortag 6:00 bis zum Abholtag 10:00 zu
  sehen, am Abholtag wackelt es.
- **Szenen** (Pixelfiguren wie bei Lichtzeit):
  - immer tagsüber: ein Silberreiher pickt und fliegt um, Schmetterlinge im
    Feld; regelmäßig ziehen balinesische Laufenten mit einem trödelnden Küken
    vorbei
  - im Wechsel alle 10–15 Minuten tagsüber: **Pauli jagt die Enten** (unsere
    braune Boxerhündin kommt hinten rechts, die Enten flattern mit
    Ausrufezeichen in alle Richtungen bis in den Vordergrund, das Küken rennt
    im Kreis, Pauli setzt sich hechelnd vor uns, dann rennen alle raus;
    Figuren werden nach vorne größer, was vorne läuft, ist vor uns); ein Affe klaut ein Reisbündel von
    Max' Stange und bringt es zurück; Schmetterlinge besuchen Valerie, einer
    landet auf ihrem Hut und eine Blüte wächst; Valerie und Max lüften die Hüte
  - nachts: Sterne, Glühwürmchen, ab und zu eine Sternschnuppe
- Immer nur ein Gag gleichzeitig. Uhr, Temperatur, Symbole und Lichterkette
  werden nie verdeckt.

## Privatsphäre

Das Foto zeigt unsere Tochter. Foto und Masken liegen deshalb **nicht im
Klartext** im Repo:

- Ins Repo kommt nur `familie.enc`: Foto, Gesamtmaske, die drei Personen-Masken,
  die See-Maske und das leere Hintergrundbild zusammen, verschlüsselt mit
  AES-256-GCM.
- Der Schlüssel steht nur in der Adresse hinter `#k=…`. Dieser Teil einer
  Adresse (das „Fragment“) wird vom Browser **nie an den Server geschickt**,
  auch nicht an GitHub. Die Seite entschlüsselt das Paket im Browser und hält
  die Bilder nur im Arbeitsspeicher.
- Ohne gültigen Schlüssel zeigt die Seite nur ein neutrales, leeres Raster.
- Alle Bilddateien (`*.jpg`, `*.png`) und die Vorlagen (`vorlage*.html`)
  stehen in `.gitignore` und können nicht aus Versehen committet werden.
- Das tägliche Neuladen um 4:00 behält die Adresse samt Schlüssel.

### Neu verschlüsseln (bei neuem Foto oder neuen Masken)

Lokal auf dem Mac, Node muss installiert sein. Die Bilder liegen im Ordner über
dem Repo (`balifoto/`): `foto-g3.jpg`, `maske-g3.png`, `maske-anna.png`,
`maske-max.png`, `maske-valerie.png`, `see-maske.png`,
`hintergrund-leer-g3.jpg`. Das Werkzeug findet sie dort von selbst. Damit die
Adresse im Muse gleich bleibt, immer den vorhandenen Schlüssel mitgeben (der
Teil hinter `#k=` der Muse-Adresse). Im Repo-Ordner:

```bash
node werkzeuge/verschluesseln.js --schluessel <Schlüssel>
```

Ohne `--schluessel` lost das Werkzeug einen neuen Schlüssel aus und gibt ihn
**einmal** im Terminal aus, zusammen mit der neuen Adresse; dann muss die
Adresse im Muse neu eingetragen werden. Einzelne Dateien lassen sich auch
angeben: Foto und Gesamtmaske als erste Pfade, die übrigen mit `--anna`,
`--max`, `--valerie`, `--see`, `--leer`. Fehlt ein Zusatzbild, läuft das Bild
ohne diesen Teil (ohne Personen-Masken zum Beispiel ohne Bewegung).

Danach `familie.enc` committen und pushen. Alle Bilder haben 540 × 960
Bildpunkte bzw. dasselbe Seitenverhältnis wie das Foto (Masken: weiß = Person
bzw. See).

## Dateien

- `index.html` – das Kunstwerk (eine Datei, ohne Build-Werkzeuge)
- `familie.enc` – Foto und Masken, verschlüsselt
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
| `bewegung` | `an`: Wind und kleine Bewegungen auf uns an oder aus. `kleine_bewegungen_alle_sekunden`: Abstand als `[kleinster, größter]` Wert in Sekunden, Standard `[20, 40]`. `schimmer`: leichter Schimmer in Kleidung und Haaren an oder aus. |
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

Das Raster passt sich wie bei Lichtzeit automatisch an den Bildschirm an und
füllt ihn randlos: Die Zellengröße ist die kurze Bildschirmseite geteilt durch
108, gerundet. Auf dem Muse Frame (1080 × 1800 für die Seite, Chrome-Leiste
oben) ergibt das 10 Bildpunkte je Zelle und 108 × 180 Zellen; auf 4K mit
doppelter Pixeldichte 20 Bildpunkte und ebenfalls 108 × 180. Das Foto wird
„cover“ skaliert: Die Breite füllt das Raster, oben und unten fallen wenige
Prozent weg.

Alle Positionen im Bild (Hüte, Reisbündel, Stange, Enten-Weg, Paulis Weg,
Reiher, Affe, Schmetterlinge, Regenbogen, Mond, Sternschnuppen, Himmelsgrenze
über dem Vulkan, See, Bewegungsbereiche von uns dreien) sind in
Foto-Koordinaten festgelegt und stimmen deshalb bei jeder Rastergröße. Die
Pixelfiguren (Pauli, Affe, Enten, Schmetterlinge, Einhorn, Reiher, Mond)
werden mit dem Raster mitskaliert, sodass sie im Verhältnis zum Bild
mindestens so groß bleiben wie bei 90 Spalten; Pauli und die Enten werden
nach vorne bis aufs Doppelte größer. Uhr, Temperatur, Symbole und Lichterkette hängen an den Ecken und
werden ab 150 Spalten ganzzahlig vergrößert, damit sie lesbar bleiben.

Pro Gerät lässt sich die Anzeige an der Adresse überschreiben, ohne
`config.json` zu ändern: `?raster=10&fps=30` (Zellengröße in Bildpunkten oder
`auto`, höchste Bildrate). Ein fester Wert ändert nur die Zellengröße; Spalten
und Zeilen ergeben sich weiter aus der Bildschirmfläche.

Die Rechenarbeit ist klein (auf dem Muse 19 440 Zellen je Bild). Im Test-Modus steht oben
links, wie viele Bilder pro Sekunde gezeichnet werden und wie lange ein Bild
braucht.

## Uhrzeit

Wir drei rechnet immer in Berliner Zeit, auch wenn am Gerät eine andere
Zeitzone eingestellt ist. Geht die Uhr des Geräts mehr als eine Minute falsch,
korrigiert die Seite sie anhand der Serveruhr. Beides steht im Test-Modus in
der Info-Zeile.

## Ausstellungsmodus

Die normale Adresse zeigt nur das Bild: keine Steuerleiste, kein Mauszeiger.
Berührungen bewirken nichts; nur ein langes, ruhiges Drücken aufs Bild
(3 Sekunden) blendet die Test-Leiste ein, nochmal 3 Sekunden blendet sie wieder
aus. Außerdem:

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
| `?dev=1` | Test-Modus: Steuerleiste (Jetzt, Zeitraffer, 8:00 Kindergarten, 19:00 Schlafen, 14:00, 23:00, Wetter-Vorschau Regen/Kalt/Sonne/Wind, Tonnen-Vorschau, Szenen-Knöpfe mit Pauli, Knöpfe für die drei kleinen Bewegungen), Info-Zeile mit Sonnen- und Mondstand, Sonnenzeiten, Wetterquelle, aktueller Szene, Tonnen und Hinweisen. Ein Tipp aufs Bild blendet die Steuerung aus. Ohne `?dev=1` blendet ein langes Drücken aufs Bild (3 Sekunden, ruhig halten) dieselbe Leiste ein, nochmal 3 Sekunden blendet sie aus; alle anderen Berührungen bleiben ohne Wirkung. |
| `?t=2026-12-24T17:30` | Zeit simulieren. Die Uhr läuft ab diesem Moment weiter. Auch möglich: `?t=17:30` (heute) oder `?t=2026-12-24` (12 Uhr). |
| `?wetter=regen` | Wetter erzwingen: `regen`, `kalt`, `sonne` oder `wind` (stürmisch, trocken). |
| `?raster=`, `?fps=` | Anzeige für dieses Gerät, siehe „Anzeige und Leistung“. |

Beispiele:

- `https://maxslobster.github.io/wir-drei/?dev=1#k=…`
- `https://maxslobster.github.io/wir-drei/?t=08:05#k=…` – Lichterkette bunt
- `https://maxslobster.github.io/wir-drei/?t=19:02&wetter=regen#k=…`

## Stand

Wir drei läuft mit dem Grundsetting „Vulkansee“. Die Kontroll-Screenshots der
Abnahme (zuletzt 14:00 mit Sonnenstrahl, 19:05 Gute Nacht, 23:00 mit
Mondstrahl, Pauli im Vordergrund, Wind-Szene) liegen lokal in
`balifoto/abnahme/`, nicht im Repo.
