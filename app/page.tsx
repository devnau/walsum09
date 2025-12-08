import Link from 'next/link';

import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Matches } from './components/Matches';
import { NewsList } from './components/NewsList';
import { SectionTitle } from './components/SectionTitle';
import { Sponsors } from './components/Sponsors';

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />

        <section id="teams">
          <SectionTitle cta={<Link href="/teams" className="badge">Trainer:innen gesucht</Link>}>Teams & Programm</SectionTitle>
          <div className="grid cards">
            <article className="card">
              <h3>Herren I</h3>
              <p>Ambitionierte Niederrheinliga-Mannschaft mit klarem Fokus auf Umschaltspiel und Standards.</p>
              <div className="badge">Trainingszeiten: Di/Do 19:30</div>
            </article>
            <article className="card">
              <h3>Jugend</h3>
              <p>U19, U17, U15 mit lizensierten Trainer:innen, Scouting-Tagen und Schiedsrichter-Ausbildung.</p>
              <div className="badge">Probetraining? Jetzt melden!</div>
            </article>
            <article className="card">
              <h3>Frauen & Mädchen</h3>
              <p>Aufbau einer eigenständigen Abteilung – mit Perspektivkader und regionaler Vernetzung.</p>
              <div className="badge">Kickoff-Workshop im August</div>
            </article>
          </div>
        </section>

        <Matches />
        <NewsList />
        <Sponsors />

        <section id="kontakt" style={{ marginTop: 32 }}>
          <SectionTitle>Kontakt & Support</SectionTitle>
          <div className="grid cards">
            <article className="card">
              <h3>Kontaktformular</h3>
              <p>Für Mitgliedschaften, Sponsoring oder Probetraining – wir melden uns in 24h.</p>
              <Link className="btn btn-primary" href="/kontakt">
                Nachricht senden
              </Link>
            </article>
            <article className="card">
              <h3>CMS Roadmap</h3>
              <p>Auth, News-CRUD, Media-Library, Fussball.de-API mit Redis Cache. Live-Preview im Aufbau.</p>
              <a className="btn btn-secondary" href="https://github.com/" rel="noreferrer" target="_blank">
                Roadmap öffnen
              </a>
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
