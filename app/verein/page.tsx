import { Header } from '../components/Header';
import { SectionTitle } from '../components/SectionTitle';

const quickFacts = [
  { title: 'Gründung', detail: '1909 – Fußball in Walsum mit Tradition' },
  { title: 'Heimstätte', detail: 'Sportpark Holtener Straße, 47179 Duisburg' },
  { title: 'Mitglieder', detail: 'Mehr als 600 Aktive in Herren-, Frauen- und Jugendteams' },
  { title: 'Teams', detail: 'Von den Bambini bis zur Ersten – mit Lizenztrainer:innen' }
];

const pillars = [
  {
    title: 'Breite + Spitze',
    description:
      'Ausbildung und Spaß im Grundlagenbereich, athletische Förderung in der Leistungsspitze und abgestimmte Übergänge zwischen Jugend und Senioren.'
  },
  {
    title: 'Ehrenamt stärken',
    description:
      'Betreuer:innen, Platzwarte, Orga-Teams und Schiedsrichter gehören zum Kern. Wir bieten Fortbildungen und klare Zuständigkeiten.'
  },
  {
    title: 'Heimat im Norden',
    description:
      'Walsum 09 steht für Gemeinschaft im Duisburger Norden – mit Partnerschulen, Stadtteilprojekten und offenen Angeboten.'
  }
];

const timeline = [
  { year: '1909', title: 'Rot-Weiß Walsum 09', detail: 'Als Bergarbeiter-Verein gegründet – Fußball als Ausgleich und Treffpunkt.' },
  { year: '1960er', title: 'Aufstiege & Derbys', detail: 'Spiele gegen Hamborn, Meiderich & Co. prägen den Charakter des Vereins.' },
  { year: '2000er', title: 'Jugendboom', detail: 'Eigenes Jugendkonzept, erste Mädchenmannschaften, Kooperationen mit Schulen.' },
  {
    year: 'Heute',
    title: 'Neu aufgestellt',
    detail: 'Digitaler Auftritt, klare Vereinsstrukturen, moderner Unterbau und starker Fokus auf Nachwuchs.'
  }
];

const contacts = [
  { label: 'Vorsitz', value: 'vorstand@walsum09.de' },
  { label: 'Sportliche Leitung', value: 'sport@walsum09.de' },
  { label: 'Jugend & Probetraining', value: 'jugend@walsum09.de' },
  { label: 'Sponsoring', value: 'partner@walsum09.de' }
];

const offerings = [
  {
    title: 'Nachwuchs & Camps',
    points: [
      'Bambini bis U19 mit lizenzierten Trainer:innen',
      'Feriencamps und Fördertraining auf dem Kunstrasen',
      'Torwart- und Athletikmodule, individuelle Lernziele'
    ]
  },
  {
    title: 'Senioren & Frauen',
    points: [
      'Herren-Teams mit Fokus auf Umschaltspiel und Standards',
      'Aufbau einer eigenständigen Frauen- und Mädchenabteilung',
      'Regelmäßige Videoanalyse und Match-Reports'
    ]
  },
  {
    title: 'Verein & Umfeld',
    points: [
      'Platzanlage mit Vereinsheim und Bistro an der Holtener Straße',
      'Fitness- und Reha-Partner im Stadtteilnetzwerk',
      'Events wie Saisoneröffnung, Hallencup und Stadtteil-Flohmarkt'
    ]
  }
];

export default function VereinPage() {
  return (
    <>
      <Header />
      <main className="page">
        <section className="hero hero-verein" aria-labelledby="verein-hero">
          <div className="badge">Der Verein</div>
          <h1 id="verein-hero">Rot-Weiß seit 1909 – Fußball in Walsum</h1>
          <p>
            Sportfreunde Walsum 09 ist Zuhause für ambitionierten Amateurfußball im Duisburger Norden. Wir verbinden
            Tradition mit klarer Organisation, fördern Nachwuchs wie Ehrenamt und öffnen die Anlage für den Stadtteil.
          </p>
          <div className="quick-grid">
            {quickFacts.map((fact) => (
              <article key={fact.title} className="card stat-card">
                <h3>{fact.title}</h3>
                <p>{fact.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section>
          <SectionTitle>Werte & Schwerpunkte</SectionTitle>
          <div className="grid cards">
            {pillars.map((pillar) => (
              <article key={pillar.title} className="card">
                <h3>{pillar.title}</h3>
                <p>{pillar.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section>
          <SectionTitle>Unser Weg</SectionTitle>
          <div className="timeline">
            {timeline.map((entry) => (
              <article key={entry.year} className="timeline-item">
                <div className="badge">{entry.year}</div>
                <div>
                  <h3>{entry.title}</h3>
                  <p>{entry.detail}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section>
          <SectionTitle>Was dich erwartet</SectionTitle>
          <div className="grid cards">
            {offerings.map((block) => (
              <article key={block.title} className="card">
                <h3>{block.title}</h3>
                <ul className="list">
                  {block.points.map((point) => (
                    <li key={point} className="list-item">
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section>
          <SectionTitle>Kontakt & Besuch</SectionTitle>
          <div className="grid cards">
            <article className="card contact-box">
              <h3>Sportpark Holtener Straße</h3>
              <p>Holtener Straße 186, 47179 Duisburg</p>
              <p className="muted">Kunstrasenplatz • Stadionplatz • Vereinsheim & Bistro</p>
              <div className="badge">ÖPNV: Bus 905 / 907 – Halt „Holtener Straße”</div>
            </article>
            <article className="card contact-box">
              <h3>Ansprechpartner</h3>
              <ul className="list">
                {contacts.map((contact) => (
                  <li key={contact.label} className="list-item">
                    <strong>{contact.label}</strong>
                    <span className="muted">{contact.value}</span>
                  </li>
                ))}
              </ul>
              <button className="btn btn-primary" style={{ marginTop: 12 }}>
                Jetzt Kontakt aufnehmen
              </button>
            </article>
          </div>
        </section>
      </main>
      <footer>
        <div>© 2024 Walsum 09 – Rot-Weiß seit 1909.</div>
        <div style={{ display: 'flex', gap: 12 }}>
          <a href="#">Impressum</a>
          <a href="#">Datenschutz</a>
          <a href="#">Socials</a>
        </div>
      </footer>
    </>
  );
}
