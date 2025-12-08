import Link from 'next/link';

import { Header } from '../components/Header';
import { SectionTitle } from '../components/SectionTitle';
import { news } from '@/data/news';

const categories = ['Alle', 'Herren', 'Junioren', 'Verein'];

export default function NewsPage() {
  return (
    <>
      <Header />
      <main className="page">
        <section className="hero hero-verein" aria-labelledby="news-hero">
          <div className="badge">Aktuelles</div>
          <h1 id="news-hero">Spielberichte, Interviews und Vereinsmeldungen</h1>
          <p>
            Immer am Ball: Frische Stories aus allen Teams, Ergebnisse zum Nachlesen und Einblicke in das Vereinsleben. Die
            Artikel stammen aus dem geplanten CMS – hier schon als Vorschau.
          </p>
          <div className="pill-row" role="list" aria-label="News-Kategorien">
            {categories.map((category) => (
              <span key={category} role="listitem" className="pill">
                {category}
              </span>
            ))}
          </div>
        </section>

        <section>
          <SectionTitle cta={<span className="badge">PDF-Spielheft in Planung</span>}>Neueste Meldungen</SectionTitle>
          <div className="grid cards">
            {news.map((item) => (
              <article key={item.id} className="card" aria-labelledby={`news-${item.id}`}>
                <div style={{ display: 'flex', justifyContent: 'space-between', gap: 10 }}>
                  <span className="badge">{item.category}</span>
                  <span style={{ color: 'var(--muted)', fontSize: 13 }}>{new Date(item.date).toLocaleDateString('de-DE')}</span>
                </div>
                <h3 id={`news-${item.id}`}>{item.title}</h3>
                <p>{item.excerpt}</p>
                <div className="meta-row">
                  <span className="muted">Von {item.author}</span>
                  <Link href="/kontakt" className="text-link">
                    Feedback senden →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section>
          <SectionTitle cta={<Link href="/spielplan" className="badge">Zum Spielplan</Link>}>
            Matchday-Services
          </SectionTitle>
          <div className="grid cards">
            <article className="card">
              <h3>Livestream & Socials</h3>
              <p>Geplant: Highlights auf YouTube, Live-Ergebnisse via Fussball.de-API und Social-Media-Embed.</p>
              <div className="badge">Pilotprojekt mit der Ersten</div>
            </article>
            <article className="card">
              <h3>Media-Kit</h3>
              <p>Foto-Downloads, Grafiken und Logos für Presse und Partner – inklusive Richtlinien.</p>
              <Link href="/sponsoren" className="text-link">
                Mediadaten anfordern →
              </Link>
            </article>
            <article className="card">
              <h3>Newsletter</h3>
              <p>Monatliche Zusammenfassung: Spielberichte, Interviews, Termine, Camps und Aktionen.</p>
              <div className="badge">Start im Herbst</div>
            </article>
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
