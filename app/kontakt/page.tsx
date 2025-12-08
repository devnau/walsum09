import Link from 'next/link';

import { Header } from '../components/Header';
import { SectionTitle } from '../components/SectionTitle';

const contacts = [
  { label: 'Mitgliedschaft & Verein', value: 'vorstand@walsum09.de' },
  { label: 'Probetraining & Jugend', value: 'jugend@walsum09.de' },
  { label: 'Sponsoring & Medien', value: 'partner@walsum09.de' }
];

const visitingInfo = [
  'Sportpark Holtener Straße 186, 47179 Duisburg',
  'ÖPNV: Bus 905 / 907 – Halt „Holtener Straße”',
  'Parkplätze direkt an Platz A & Stadionplatz'
];

export default function KontaktPage() {
  return (
    <>
      <Header />
      <main className="page">
        <section className="hero" aria-labelledby="kontakt-hero">
          <div className="badge">Kontakt</div>
          <h1 id="kontakt-hero">Melde dich – wir antworten binnen 24 Stunden</h1>
          <p>
            Ob Probetraining, Sponsoring oder Presseanfrage: Wir reagieren schnell und leiten dein Anliegen an die richtigen
            Ansprechpartner:innen weiter.
          </p>
          <div className="pill-row">
            <span className="pill">Probetraining</span>
            <span className="pill">Sponsoring</span>
            <span className="pill">Presse</span>
          </div>
        </section>

        <section>
          <SectionTitle cta={<span className="badge">Antwort in 24h</span>}>Formular</SectionTitle>
          <div className="card form-card">
            <form className="form-grid">
              <label>
                <span>Name</span>
                <input type="text" name="name" placeholder="Max Mustermann" className="input" />
              </label>
              <label>
                <span>E-Mail</span>
                <input type="email" name="email" placeholder="du@beispiel.de" className="input" />
              </label>
              <label>
                <span>Anliegen</span>
                <select name="topic" className="input">
                  <option>Probetraining</option>
                  <option>Sponsoring</option>
                  <option>Presse</option>
                  <option>Allgemein</option>
                </select>
              </label>
              <label style={{ gridColumn: '1 / -1' }}>
                <span>Nachricht</span>
                <textarea name="message" rows={4} placeholder="Worum geht es?" className="textarea" />
              </label>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12, gridColumn: '1 / -1' }}>
                <span className="muted">Wir speichern die Daten nur zur Bearbeitung deiner Anfrage.</span>
                <button className="btn btn-primary" type="button">
                  Absenden
                </button>
              </div>
            </form>
          </div>
        </section>

        <section>
          <SectionTitle cta={<span className="badge">Heimspiele</span>}>Ansprechpartner & Anfahrt</SectionTitle>
          <div className="grid cards">
            <article className="card">
              <h3>Ansprechpartner</h3>
              <ul className="list">
                {contacts.map((contact) => (
                  <li key={contact.label} className="list-item">
                    <span>{contact.label}</span>
                    <span className="muted">{contact.value}</span>
                  </li>
                ))}
              </ul>
              <Link href="mailto:vorstand@walsum09.de" className="text-link" style={{ marginTop: 12, display: 'inline-block' }}>
                E-Mail öffnen →
              </Link>
            </article>
            <article className="card">
              <h3>Vor Ort</h3>
              <ul className="list">
                {visitingInfo.map((info) => (
                  <li key={info} className="list-item">
                    <span>{info}</span>
                  </li>
                ))}
              </ul>
              <div className="badge">Barrierefreier Zugang am Haupteingang</div>
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
