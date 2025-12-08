import Link from 'next/link';

import { Header } from '../components/Header';
import { SectionTitle } from '../components/SectionTitle';

const teamBlocks = [
  {
    title: 'Herrenbereich',
    description: 'Erste Mannschaft in der Niederrheinliga, U23 als Talente-Plattform und Altherren-Teams für den Zusammenhalt.',
    highlight: 'Training: Di/Do 19:30 – Sportpark Holtener Straße'
  },
  {
    title: 'Frauen & Mädchen',
    description: 'Aufbau einer eigenständigen Abteilung, Perspektivkader mit regionaler Vernetzung und Trainerinnenförderung.',
    highlight: 'Sichtungstage im August • Kooperation mit Schulen'
  },
  {
    title: 'Nachwuchs',
    description: 'Bambini bis U19 mit lizensierten Trainer:innen, Fördertraining, Torwart-Akademie und Camps in den Ferien.',
    highlight: 'Probetraining möglich – melde dich beim Jugendteam'
  }
];

const focusPoints = [
  'Klare Spielidee: intensives Anlaufen, sauberes Positionsspiel, starke Standards',
  'Video- und Datenanalyse mit einfachen Tools und geteilten Playbooks',
  'Physio-Partner, Athletikmodule und Reha-Begleitung im Stadtteilnetzwerk',
  'Schiedsrichter-Ausbildung sowie Ehrenamtsförderung im Orga-Team'
];

const trainingSlots = [
  { team: 'Herren I', slots: ['Di 19:30–21:00', 'Do 19:30–21:00'], pitch: 'Kunstrasen A' },
  { team: 'U19 & U17', slots: ['Mo 18:30–20:00', 'Mi 18:30–20:00', 'Fr 18:00–19:30'], pitch: 'Kunstrasen A/B' },
  { team: 'Mädchen / Frauen', slots: ['Di 18:00–19:30', 'Do 18:00–19:30'], pitch: 'Kunstrasen B' },
  { team: 'Breitensport & Altherren', slots: ['Mi 20:00–21:30'], pitch: 'Stadionplatz' }
];

export default function TeamsPage() {
  return (
    <>
      <Header />
      <main className="page">
        <section className="hero" aria-labelledby="teams-hero">
          <div className="badge">Teams & Programm</div>
          <h1 id="teams-hero">Strukturierte Kader, offene Probetrainings</h1>
          <p>
            Walsum 09 bietet ambitionierten Fußball und einen klaren Plan für Nachwuchs, Frauen- und Herrenbereich. Wir setzen
            auf lizensierte Trainer:innen, transparente Kommunikation und eine Anlage, die Raum für Entwicklung lässt.
          </p>
          <div className="pill-row">
            <span className="pill">Probetraining vereinbaren</span>
            <span className="pill">Trainer:innen gesucht</span>
            <span className="pill">Kooperation Schulen & Kitas</span>
          </div>
        </section>

        <section>
          <SectionTitle cta={<Link href="/kontakt" className="badge">Kontakt aufnehmen</Link>}>Unsere Bereiche</SectionTitle>
          <div className="grid cards">
            {teamBlocks.map((block) => (
              <article key={block.title} className="card">
                <h3>{block.title}</h3>
                <p>{block.description}</p>
                <div className="badge">{block.highlight}</div>
              </article>
            ))}
          </div>
        </section>

        <section>
          <SectionTitle cta={<span className="badge">Playbooks in Arbeit</span>}>Spielidee & Förderung</SectionTitle>
          <div className="grid cards">
            <article className="card">
              <h3>Spielphilosophie</h3>
              <p>Pressing, Umschaltmomente, ruhende Bälle: Wir trainieren wiederkehrende Muster und klare Rollenprofile.</p>
              <ul className="list">
                {focusPoints.slice(0, 2).map((point) => (
                  <li key={point} className="list-item">
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </article>
            <article className="card">
              <h3>Förderung & Umfeld</h3>
              <p>Medizinische Checks, Athletikmodule und Ehrenamtsförderung gehören zum Paket – inklusive Trainer:innen-Austausch.</p>
              <ul className="list">
                {focusPoints.slice(2).map((point) => (
                  <li key={point} className="list-item">
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </section>

        <section>
          <SectionTitle cta={<span className="badge">Sommerplan gültig</span>}>Trainingszeiten</SectionTitle>
          <div className="grid cards">
            {trainingSlots.map((slot) => (
              <article key={slot.team} className="card">
                <div className="meta-row">
                  <h3>{slot.team}</h3>
                  <span className="badge">{slot.pitch}</span>
                </div>
                <ul className="list">
                  {slot.slots.map((time) => (
                    <li key={time} className="list-item">
                      <span>{time}</span>
                      <span className="muted">Sportpark Holtener Straße</span>
                    </li>
                  ))}
                </ul>
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
