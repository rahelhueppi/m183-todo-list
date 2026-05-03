## Testfälle

| ID  | Kategorie (OWASP)       | Testbeschreibung               | Vorgehen               | Erwartetes Ergebnis    | Tatsächliches Ergebnis         | Bewertung |
| --- | ----------------------- | ------------------------------ | ---------------------- | ---------------------- | ------------------------------ | --------- |
| T01 | A03: Injection          | Login auf SQL Injection testen | Eingabe: `' OR 1=1 --` | Login schlägt fehl     | Login korrekt abgewiesen       | OK        |
| T02 | A03: Injection          | Sucheingabe manipulieren       | `test' OR '1'='1`      | Nur legitime Resultate | Erwartete Resultate            | OK        |
| T03 | A07: Auth Failures      | Login ohne Passwort            | Nur Username eingeben  | Zugriff verweigert     | Zugriff verweigert             | OK        |
| T04 | A02: Crypto Failures    | Passwort-Speicherung prüfen    | DB analysieren         | Hash gespeichert       | Hash korrekt vorhanden         | OK        |
| T05 | A07: Auth Failures      | Zugriff ohne Login             | Direkt URL aufrufen    | Redirect zu Login      | Redirect funktioniert          | OK        |
| T06 | A01: Access Control     | Zugriff auf fremde Tasks       | ID in URL ändern       | Zugriff verweigert     | ID nicht in URL vorhanden      | OK        |
| T07 | A02: Crypto Failures    | Logs prüfen                    | Serverlogs analysieren | Keine sensiblen Daten  | Keine sensiblen Daten sichtbar | OK        |
| T08 | A05: Security Misconfig | Hardcoded Secrets              | Code prüfen            | Keine Secrets im Code  | Keine hardgecodeten Secrets    | OK        |
