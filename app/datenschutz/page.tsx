import Link from 'next/link';

import { Header } from '../components/Header';

export default function DatenschutzPage() {
  return (
    <>
      <Header />
      <main className="page">
        <section className="hero" aria-labelledby="datenschutz-title">
          <div className="badge">Datenschutz</div>
          <h1 id="datenschutz-title">Hinweise zur Verarbeitung personenbezogener Daten</h1>
          <p>
            Wir behandeln deine Daten verantwortungsvoll und nutzen sie ausschließlich zur Bearbeitung deines Anliegens sowie
            zur Bereitstellung des Webangebots.
          </p>
        </section>

        <section className="grid cards">
          <article className="card">
            <h3>Verantwortlicher</h3>
            <p>Sportfreunde Walsum 09 e.V. • Holtener Straße 186 • 47179 Duisburg • kontakt@walsum09.de</p>
            <p className="muted">Datenschutzbeauftragter: folgt mit dem Livegang des CMS.</p>
          </article>
          <article className="card">
            <h3>Hosting & Logs</h3>
            <p>Die Seite läuft auf einer Vercel/Next.js-Umgebung. Zugriffsdaten (IP, Zeitstempel, User-Agent) werden anonymisiert gespeichert.</p>
            <p className="muted">Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an stabiler Bereitstellung).</p>
          </article>
          <article className="card">
            <h3>Kontakt & Formulare</h3>
            <p>Bei Kontaktaufnahme speichern wir Angaben wie Name, E-Mail und Anliegen nur zur Bearbeitung. Eine Weitergabe erfolgt nicht.</p>
            <p className="muted">Nach Abschluss löschen wir die Anfrage, sofern keine gesetzlichen Aufbewahrungspflichten bestehen.</p>
          </article>
          <article className="card">
            <h3>Cookies & Tracking</h3>
            <p>Aktuell kommen keine Tracking-Cookies zum Einsatz. Geplante Integrationen (Analytics, fussball.de) werden mit Consent-Banner ergänzt.</p>
          </article>
          <article className="card">
            <h3>Betroffenenrechte</h3>
            <p>Du hast das Recht auf Auskunft, Berichtigung, Löschung sowie Widerspruch gegen die Verarbeitung deiner Daten.</p>
            <p className="muted">Anfragen bitte an kontakt@walsum09.de – wir reagieren zügig.</p>
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
