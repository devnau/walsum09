# Walsum 09 Redesign & CMS

Dieses Repo enthält den Plan und einen klickbaren Next.js-Prototypen für das Redesign der Vereinswebseite walsum09-fussball.de.

## Inhalte
- `docs/redesign-plan.md`: Architektur-, UX- und CMS-Planung mit Content-Modellen, Integrationen und nächsten Schritten.
- `app/`: Next.js 14 App Router Preview mit Startseite, Spielplan-Highlights, News-Teasern und Sponsoren-Kacheln.
- `data/`: Mock-Daten für News, Spielplan und Sponsoren.

## Entwicklung
1. Node.js 20+ installieren.
2. Abhängigkeiten laden (lokal, nicht im Container nötig):
   ```bash
   npm install
   ```
3. Entwicklung starten:
   ```bash
   npm run dev
   ```
4. Auf `http://localhost:3000` den Prototypen öffnen.

## Nächste Schritte
- Wireframes für Kernseiten finalisieren.
- CMS-Prototype (Auth + News-CRUD) aufsetzen und evaluieren.
- Proof-of-Concept für Spielpläne via fussball.de-API (Abruf, Normalisierung, Caching).
- Hosting-/Provider-Entscheidungen finalisieren.
