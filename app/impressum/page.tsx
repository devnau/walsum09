import Link from 'next/link';

import { Header } from '../components/Header';

export default function ImpressumPage() {
  return (
    <>
      <Header />
      <main className="page">
        <section className="hero hero-verein" aria-labelledby="impressum-title">
          <div className="badge">Impressum</div>
          <h1 id="impressum-title">Angaben gemäß § 5 TMG</h1>
          <p>Sportfreunde Walsum 09 e.V. • Holtener Straße 186 • 47179 Duisburg • Deutschland</p>
          <p className="muted">Telefon: 0203 / 123456 • E-Mail: kontakt@walsum09.de</p>
        </section>

        <section className="grid cards">
          <article className="card">
            <h3>Vertreten durch</h3>
            <p>1. Vorsitz: Max Beispielmann</p>
            <p>2. Vorsitz: Marie Beispiel</p>
            <p>Kassierer: Jan Muster</p>
          </article>
          <article className="card">
            <h3>Registereintrag</h3>
            <p>Vereinsregister: Amtsgericht Duisburg</p>
            <p>Registernummer: VR 1909</p>
          </article>
          <article className="card">
            <h3>Hinweis</h3>
            <p>Inhaltliche Verantwortung gemäß § 55 Abs. 2 RStV: Vorstand Walsum 09, Holtener Straße 186, 47179 Duisburg.</p>
            <p className="muted">Konzept & Umsetzung: Walsum 09 Digitalteam</p>
          </article>
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
