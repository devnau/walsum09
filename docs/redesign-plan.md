# Redesign- und CMS-Plan für Walsum 09

## Ziele des Relaunches
- Modernes, mobiloptimiertes Erscheinungsbild mit klarer Vereinsidentität.
- Eigenes CMS für redaktionelle Arbeit (News, Spielberichte, Termine, Sponsoren etc.).
- Vereinfachte Pflege durch ehrenamtliche Redakteur:innen; klare Rollen und Rechte.
- Performance, Barrierefreiheit und SEO auf aktuellem Stand.

## Inhaltsarchitektur
- **Startseite**: Hero mit Spielplan-Highlight, Shortcuts (Mitglied werden, Spieltagsheft), Schnellzugriff auf News, Ergebnisse, kommende Spiele, Sponsoren-Teaser.
- **Teams**: Übersicht aller Mannschaften, Detailseite mit Kader, Trainerteam, Tabelle, Spielplan, Trainingszeiten, Galerie.
- **News & Spielberichte**: Kategorien, Tagging, Teaser-Bilder, Lesezeit, Related Posts.
- **Spielbetrieb**: Tabellen/Ergebnisse per fussball.de-API (Pflicht, Embed nur Fallback) plus Heimspielkalender.
- **Verein**: Historie, Vorstand, Ansprechpartner, Satzung/Downloads.
- **Mitmachen**: Mitgliedschaft, Jugend, Volunteers, Spenden/Sponsoring.
- **Partner & Sponsoren**: Logo-Karussell, Detailseiten, Downloadbereich (Mediadaten).
- **Kontakt**: Formular, Anfahrt (Karte), Social Links.
- **Footer**: Newsletter, Socials, rechtliche Links.

## UX/UI-Grundsätze
- Farbwelt auf Vereinsfarben, klare Typografie, großzügige Weißräume.
- Komponentenbibliothek (Buttons, Cards, Teaser, Grids, Slider, Accordions).
- Responsives Grid (Mobile-First, Breakpoints: 480/768/1024/1280/1536).
- Barrierefreiheit (Kontraste, Fokus-States, ARIA-Landmarks, Tastaturnavigation).
- Medieneffizienz (optimierte Bilder, Lazy Loading, responsive Sourcesets).

## Technische Architektur
- **Frontend**: Next.js 14 (App Router) + TypeScript, Tailwind CSS, server actions für CMS-Operationen, ISR für News/Teamseiten.
- **Backend/CMS**: Headless Eigenbau auf Next.js-API-Routen oder separater Node-Server (NestJS). PostgreSQL als Hauptdatenbank, Prisma als ORM.
- **Auth & Rollen**: Clerk/NextAuth mit E-Mail/SSO; Rollen: Admin, Redakteur, Trainer:in (teamspezifisch), Gastautor.
- **Media**: Upload zu S3-kompatiblem Storage (z. B. Cloudflare R2), Bildtransformation via Next.js Image RSC.
- **Infra**: Deployment auf Vercel/Render/Fly.io; Datenbank verwaltet (Supabase/Neon). CI/CD mit GitHub Actions (Lint, Tests, Playwright optional).
- **Caching**: ISR/Route-Cache, Redis (Upstash) für Spielplan-APIs.

## Datenmodell (Auszug)
- **Team**: Name, Liga, Saison, Altersklasse, Trainer:in, Trainingszeiten, Plätze, Kontakte, Tabelle/Ergebnis-Feeds, fussball.de-Team-ID.
- **Spiel**: Heim/Auswärts, Gegner, Wettbewerb, Datum/Uhrzeit, Ort, Ergebnis, Bericht-Referenz, Highlight-Status.
- **News/Artikel**: Titel, Slug, Kategorie/Tags, Teaser, Inhalt (Richtext/MDX), Autor:in, Veröffentlichungsdatum, Status (Draft/Live), Hero-Bild.
- **Person**: Name, Rolle, Foto, Kontakt, Vita.
- **Sponsor**: Name, Logo, Paket (Premium/Partner/Supporter), Laufzeit, URL, Beschreibung, Reihenfolge.
- **Medien**: Asset-Referenzen, Alt-Texte, Quellen, Varianten.
- **Formulareingabe**: Kontakt/Probetraining/Spenden, Spam-Schutz, Export.

## CMS-Funktionen
- Dashboard mit KPIs (Seitenaufrufe, anstehende Spiele, Entwürfe).
- CRUD für News, Teams, Spiele, Sponsoren, Personen, Downloads.
- Rollen- und Freigabe-Workflow: Entwurf → Review → Veröffentlichung; Activity Log.
- Inline-/Block-Editor (MDX/TipTap) mit Komponenten (Callouts, Tabellen, Galerien, Video).
- Mediathek mit Drag & Drop, automatische Skalierung/Formatierung.
- Termin- und Spielplan-Imports (CSV/ICS) + manuelles Anlegen; Mapping zu Teams.
- Versionierung und Änderungsverlauf pro Eintrag.
- Vorschau-Modus (Draft Preview) mit signierten Tokens.

## Integrationen
- Fußball.de/DFBnet-API für Spielpläne/Tabellen (Pflichtvorgabe); gecacht über Redis/ISR.
- Newsletter (Mailchimp/Brevo), Social Sharing (OG/Twitter Cards), WebP/Favicons.
- Webhooks für Social-Publishing oder InDesign-Exports für Stadionzeitung.

### Spielplan-Integration (fussball.de API)
- Datenquelle: https://www.fussball.de/homepage#!/ (offizielle API-Endpunkte, ggf. authentifiziert via Token/Team-ID).
- Architektur: API-Routen/Server Actions ziehen Spielpläne & Tabellen je Team → Normalisierung in internes Schema → Cache (Redis/ISR) → UI-Komponenten (Karten, Tabellen, Kalender-Feeds).
- Aktualisierung: On-demand revalidate nach Spielende oder manuell aus CMS antriggern; Fallback auf statische Daten bei API-Downtime.
- Sicherheit & Limits: Rate-Limiting pro Team/Endpoint, Logging von Fehlern und Responsezeiten.
- Mapping: Team-Slug ↔ fussball.de-Team-ID im CMS hinterlegt, damit Redakteur:innen Zuordnung pflegen können.

## Sicherheit & Rechtliches
- HTTPS, Rate Limiting, Audit-Logs, 2FA optional.
- DSGVO: Consent-Banner (Cookiebot/Consent-Manager), AV-Verträge, Löschkonzepte.
- Impressum/Datenschutz dynamisch pflegbar.

## Migrations- & Launch-Plan
1. Content-Inventur der alten Seite, Mapping auf neue Content-Modelle.
2. CI/CD einrichten, Basis-Layouts & Komponenten entwickeln.
3. CMS-Module iterativ implementieren (News → Teams → Sponsoren → Formulare).
4. Datenmigration & Imports, Redirects definieren (URL-Schema). 
5. Performance-/Accessibility-Audits, UAT mit Redaktion, Go-Live mit Monitoring.

## Offene Entscheidungen
- Exakte Provider-Wahl (Auth, DB, Storage) abhängig von Budget/Hostingpräferenzen.
- Editor-Stack (MDX + Custom Blocks vs. TipTap) finalisieren.
- Umfang automatischer Schnittstellen zu Fußball.de geklärt (API-first, Embed nur als Fallback) → Quotas/Token-Beschaffung noch abstimmen.

## Nächste Schritte
- Wireframes für Startseite, Team-Detail, News-Listing, Sponsorenseite.
- Proof of Concept für CMS-Auth + News-CRUD (Next.js API + Prisma + PostgreSQL).
- Entscheidung über Hosting/Provider treffen und Secrets-Setup vorbereiten.
