import Link from 'next/link';

import { sponsors } from '@/data/sponsors';

export function Sponsors() {
  return (
    <section id="sponsoren">
      <div className="section-title">
        <h2>Partner & Sponsoren</h2>
        <Link className="badge" href="/sponsoren">
          Mediadaten anfragen
        </Link>
      </div>
      <div className="grid cards">
        {sponsors.map((sponsor) => (
          <article key={sponsor.id} className="card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h3>{sponsor.name}</h3>
              <span className="badge">{sponsor.tier}</span>
            </div>
            <p>{sponsor.description}</p>
            <a href={sponsor.url} style={{ color: 'var(--accent-2)', fontWeight: 700 }}>
              Zur Webseite →
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
