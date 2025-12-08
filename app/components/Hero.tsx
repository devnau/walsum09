import Link from 'next/link';

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="badge">Saison 2024/25</div>
      <h1 id="hero-title">Fussball mit Konzept. Für Walsum, für den Niederrhein.</h1>
      <p>
        Moderner Auftritt, klare Struktur und ein eigenständiges CMS. Dies ist der Prototyp für den neuen Webauftritt – mit
        Spielplan, News und Sponsoren-Fokus.
      </p>
      <div className="hero-actions">
        <Link href="/kontakt" className="btn btn-primary">
          Mitglied werden
        </Link>
        <Link href="/spielplan" className="btn btn-secondary">
          Zum Heimspiel-Kalender
        </Link>
      </div>
      <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', color: 'var(--muted)', fontSize: 14 }}>
        <span className="highlight">Live</span> Next.js 14 • CMS-Entwurf • Fussball.de-Integration (geplant)
      </div>
    </section>
  );
}
