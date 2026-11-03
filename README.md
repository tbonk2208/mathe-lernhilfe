# Mathe-Lernhilfe: Parabeln und Vektoren

Interaktive Lernhilfe für die gymnasiale Oberstufe mit zwei Kapiteln:

- **Parabeln:** quadratische Funktionen und Gleichungen (Schulbuch S. 14–15, Aufgaben 5–18)
- **Vektoren:** Punkte und Vektoren im Raum (Schulbuch S. 138–155)

Aufgaben werden auf einem Rechenblatt mit Stift oder in einer Zeile mit der Tastatur gelöst. Die Lernhilfe stellt Rückfragen, statt die Lösung vorzugeben.

## Öffnen und installieren

Adresse: https://tbonk2208.github.io/mathe-lernhilfe/

- **iPad / iPhone (Safari):** Teilen-Symbol → „Zum Home-Bildschirm“. Danach von dort starten, damit der Lernstand dauerhaft gespeichert bleibt.
- **Chrome / Edge (Windows, Mac, Android):** Schaltfläche „Als App installieren“ in der Lernhilfe oder das Installations-Symbol in der Adressleiste.
- **Safari auf dem Mac:** Ablage → „Zum Dock hinzufügen“.

Nach dem ersten Öffnen läuft die Lernhilfe auch ohne Internet. Der Lernstand wird nur auf dem jeweiligen Gerät gespeichert.

## Schreiben wie im Heft, Hilfe und Fragen

- **Rechenblatt:** Umformungsangaben hinter einem senkrechten Strich (`| −3`, `| :2`), Folgepfeile (⇒, ⇔), Nebenrechnungen neben der Zeile, unterstrichene oder eingerahmte Ergebnisse und Wertetabellen werden erkannt und bewertet.
- **Hilfe bei Stocken:** Wer länger nicht weiterkommt oder mehrfach Fehler macht, bekommt gestufte Hinweise angeboten (Denkanstoß → Regel → Schritt mit Lücken). Die vollständige Musterzeile gibt es erst nach einem eigenen Versuch.
- **Fragen stellen:** Bei jeder Aufgabe über „? Frage“; dazu der Bereich „Nachschlagen“ mit Begriffen aus beiden Kapiteln.
- **Fehler finden:** Im Training gibt es Lösungswege mit einem typischen Fehler, der gefunden, erklärt und berichtigt wird.

### Optionale KI-Hilfe

Ohne eingetragenen Schlüssel sendet die Lernhilfe keine Eingaben ins Internet. Im Bereich „Lehrkraft: Klassenübersicht“ unter „KI-Antworten auf freie Fragen einrichten“ kann eine erwachsene Person einen eigenen Anthropic-API-Schlüssel eintragen (mit PIN, Tageslimit, Einverständnis-Bestätigung und Protokoll). Danach werden Fragen, die über „? Frage“ an die KI gehen, zusammen mit der aktuellen Aufgabe und dem bisherigen Rechenweg an `api.anthropic.com` gesendet. Fragen, die nach E-Mail-Adresse, Telefonnummer oder Anschrift aussehen, werden nicht gesendet. Der Schlüssel bleibt nur auf diesem Gerät gespeichert.

## Dateien

| Datei | Zweck |
|---|---|
| `index.html` | die gesamte Lernhilfe |
| `sw.js` | Service Worker für den Offline-Betrieb |
| `manifest.webmanifest` | Angaben für die Installation als App |
| `icons/` | App-Symbole |
| `fonts/` | Schriften (SIL Open Font License 1.1, siehe `fonts/OFL-*.txt`) |
| `.nojekyll` | GitHub Pages liefert die Dateien unverändert aus |
