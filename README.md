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

## Lernweg

Die Lernhilfe ist nach Themen aufgebaut (Parabeln: 6 Themen, Vektoren: Vorwissen und 3 Themen). Jedes Thema folgt derselben Abfolge:

1. **Ziel und Check:** Lernziele als „Ich kann …“-Sätze und ein kurzer Eingangscheck. Daraus kommt eine Empfehlung für den Einstieg.
2. **Einstieg:** wahlweise ein Musterbeispiel mit Warum-Fragen und eine ähnliche Aufgabe mit Lücken, ein Knobelproblem vor der Erklärung oder direkt zum Üben.
3. **Klären:** Kernidee, worauf es ankommt, typische Fehler; nach dem Knobeln mit Rückmeldung zum eigenen Ansatz.
4. **Darstellen:** Gleichung, Graph und Zahlen im Labor verbinden, danach dieselbe Frage ohne Bild.
5. **Vergleichen:** zwei richtige Lösungswege gegenüberstellen und begründen, wann welcher besser ist.
6. **Üben:** die Buchaufgaben des Themas und neue Aufgaben, deren Hilfe sich anpasst.
7. **Abschluss:** kurzer Check ohne Hilfe; das Ergebnis entscheidet über Wiederholung oder gezielte Übung.

Unter „Mein Plan“ lässt sich ein Klausurtermin oder eine tägliche Lernzeit eintragen. Die Lernhilfe schlägt dann vor, was heute dran ist, und plant Wiederholungen ein. Alles wird nur auf dem Gerät gespeichert.

## Schreiben wie im Heft, Hilfe und Fragen

- **Rechenblatt:** Umformungsangaben hinter einem senkrechten Strich (`| −3`, `| :2`), Folgepfeile (⇒, ⇔), Nebenrechnungen neben der Zeile, unterstrichene oder eingerahmte Ergebnisse und Wertetabellen werden erkannt und bewertet.
- **Hilfe bei Stocken:** Wer länger nicht weiterkommt oder mehrfach Fehler macht, bekommt gestufte Hinweise angeboten (Denkanstoß → Regel → Schritt mit Lücken). Die vollständige Musterzeile gibt es erst nach einem eigenen Versuch.
- **Fragen stellen:** Bei jeder Aufgabe über „? Frage“; dazu der Bereich „Nachschlagen“ mit Begriffen aus beiden Kapiteln.
- **Fehler finden:** Lösungswege mit einem typischen Fehler, der gefunden, erklärt und berichtigt wird. Freigeschaltet, sobald ein Aufgabentyp sicher sitzt.

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
