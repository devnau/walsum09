import Link from 'next/link';

import { Header } from '../components/Header';
import { SectionTitle } from '../components/SectionTitle';
import { sponsors } from '@/data/sponsors';

const packages = [
  {
    title: 'Basis',
    price: 'ab 500 € / Saison',
    perks: ['Bandenwerbung Nebenplatz', 'Logo auf der Webseite', '2 VIP-Einladungen pro Saison'],
    badge: 'Einstieg'
  },
  {
    title: 'Premium',
    price: 'ab 2.500 € / Saison',
    perks: ['Hauptplatz-Bande', 'Social-Media-Feature', 'Trikotärmel oder Trainingstop', 'Hospitality-Paket pro Heimspiel'],
    badge: 'Beliebt'
  },
  {
    title: 'Exklusiv',
    price: 'Individuell',
    perks: ['Trikotbrust / Hauptsponsor', 'Aktivierungsevents im Stadion', 'Co-Branding bei Camps', 'Daten- & Content-Paket'],
    badge: 'Verfügbar ab 2025'
  }
];

export default function SponsorenPage() {
  return (
    <>
      <Header />
      <main className="page">
        <section className="hero hero-verein" aria-labelledby="sponsor-hero">
          <div className="badge">Partner werden</div>
          <h1 id="sponsor-hero">Reichweite im Duisburger Norden – mit klaren Mediadaten</h1>
          <p>
            Sichtbarkeit an der Holtener Straße, auf Social Media und im geplanten Livestream. Wir setzen auf faire Pakete,
            Storytelling mit Bezug zum Stadtteil und zuverlässige Aktivierung am Spieltag.
          </p>
          <div className="pill-row">
            <span className="pill">Bande & Trikot</span>
            <span className="pill">Digital & Social</span>
            <span className="pill">Events & Camps</span>
          </div>
        </section>

        <section>
          <SectionTitle cta={<Link href="/kontakt" className="badge">Gespräch vereinbaren</Link>}>
            Sponsorenpakete
          </SectionTitle>
          <div className="grid cards">
            {packages.map((pkg) => (
              <article key={pkg.title} className="card">
                <div className="meta-row">
                  <h3>{pkg.title}</h3>
                  <span className="badge">{pkg.badge}</span>
                </div>
                <p style={{ fontWeight: 700 }}>{pkg.price}</p>
                <ul className="list">
                  {pkg.perks.map((perk) => (
                    <li key={perk} className="list-item">
                      <span>{perk}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section>
          <SectionTitle cta={<span className="badge">Case Studies</span>}>Aktuelle Partner</SectionTitle>
          <div className="grid cards">
            {sponsors.map((sponsor) => (
              <article key={sponsor.id} className="card">
                <div className="meta-row">
                  <h3>{sponsor.name}</h3>
                  <span className="badge">{sponsor.tier}</span>
                </div>
                <p>{sponsor.description}</p>
                <a href={sponsor.url} className="text-link">
                  Zur Webseite →
                </a>
              </article>
            ))}
          </div>
        </section>

        <section>
          <SectionTitle cta={<Link href="/kontakt" className="badge">Mediadaten anfordern</Link>}>
            Aktivierung am Spieltag
          </SectionTitle>
          <div className="grid cards">
            <article className="card">
              <h3>Hospitality & VIP</h3>
              <p>Business-Loge, Tribünenplätze, Bistro-Branding und Meet & Greet mit der Mannschaft.</p>
              <div className="badge">Neu ab Winter</div>
            </article>
            <article className="card">
              <h3>Content & Story</h3>
              <p>Interview-Formate, Video-Snippets, gemeinsame Aktionen im Stadtteil und Social Ads.</p>
              <div className="badge">Inkl. Content-Team</div>
            </article>
            <article className="card">
              <h3>Nachwuchs & Camps</h3>
              <p>Branding bei Feriencamps, Schulpartnerschaften und Aktionen für Mädchenfußball.</p>
              <div className="badge">Plätze begrenzt</div>
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
