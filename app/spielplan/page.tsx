import Link from 'next/link';

import { Header } from '../components/Header';
import { SectionTitle } from '../components/SectionTitle';
import { matches } from '@/data/matches';

const infoNotes = [
  'Datenquelle: Fussball.de-Feed (in Planung) + manuelle Verifizierung',
  'Ergebnisse werden jeweils nach Abpfiff aktualisiert, Liveticker optional',
  'Wetter-Overlay und Parkplatz-Hinweise folgen im nächsten Release'
];

export default function SpielplanPage() {
  return (
    <>
      <Header />
      <main className="page">
        <section className="hero" aria-labelledby="schedule-hero">
          <div className="badge">Spielplan</div>
          <h1 id="schedule-hero">Alle Heim- und Auswärtstermine im Überblick</h1>
          <p>
            Heimspiel-Kalender, Ergebnisse und Anstoßzeiten der Ersten, Jugendteams und der neuen Frauenabteilung. Der Feed
            wird später automatisiert – hier als kuratierte Vorschau.
          </p>
          <div className="pill-row">
            <span className="pill">Heimspiele</span>
            <span className="pill">Auswärtsfahrten</span>
            <span className="pill">Testspiele</span>
          </div>
        </section>

        <section>
          <SectionTitle cta={<Link href="/kontakt" className="badge">Stadionhelfer werden</Link>}>
            Anstehende Spiele
          </SectionTitle>
          <ul className="list">
            {matches.map((match) => (
              <li key={match.id} className="list-item">
                <div style={{ display: 'grid', gap: 4 }}>
                  <div style={{ fontWeight: 700 }}>
                    {match.team} vs. {match.opponent} {match.result ? `(${match.result})` : ''}
                  </div>
                  <div className="muted">
                    {match.home ? 'Heimspiel' : 'Auswärts'} • {match.competition} • {match.venue}
                  </div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontWeight: 700 }}>{match.dateLabel}</div>
                  <div className="muted" style={{ fontSize: 13 }}>
                    Anstoß {match.kickoff} Uhr
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <SectionTitle cta={<span className="badge">Faninfos</span>}>Service & Spieltag</SectionTitle>
          <div className="grid cards">
            <article className="card">
              <h3>Tickets & Einlass</h3>
              <p>Eintritt an der Tageskasse, bargeldlos möglich. Dauerkarten-Abfrage per Kontaktformular.</p>
              <div className="badge">Freier Eintritt für Jugendspiele</div>
            </article>
            <article className="card">
              <h3>Heimspiel-Guide</h3>
              <p>Parkplätze an der Holtener Straße, Fahrradstellplätze am Nebenplatz, Bistro mit Snacks & Getränken.</p>
              <Link href="/kontakt" className="text-link">
                Anreise planen →
              </Link>
            </article>
            <article className="card">
              <h3>Livestats (Beta)</h3>
              <p>Geplantes Dashboard: xG, Schüsse, Standards und Heatmaps über ein einfaches Tracking-Setup.</p>
              <div className="badge">Pilot mit Herren I</div>
            </article>
          </div>
        </section>

        <section>
          <SectionTitle cta={<Link href="/news" className="badge">Zum Blog</Link>}>Updates</SectionTitle>
          <div className="grid cards">
            {infoNotes.map((note) => (
              <article key={note} className="card">
                <h3>Status</h3>
                <p>{note}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
      <footer>
        <div>© 2024 Walsum 09 – Rot-Weiß seit 1909.</div>
        <div style={{ display: 'flex', gap: 12 }}>
          <Link href="/impressum">Impressum</Link>
          <Link href="/datenschutz">Datenschutz</Link>
          <Link href="/kontakt">Kontakt</Link>
        </div>
      </footer>
    </>
  );
}
