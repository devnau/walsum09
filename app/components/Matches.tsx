import { matches } from '@/data/matches';

export function Matches() {
  return (
    <section id="spielplan">
      <div className="section-title">
        <h2>Spielplan Highlights</h2>
        <a href="#" className="badge">
          fussball.de-Feed (PoC)
        </a>
      </div>
      <ul className="list">
        {matches.map((match) => (
          <li key={match.id} className="list-item">
            <div style={{ display: 'grid', gap: 4 }}>
              <div style={{ fontWeight: 700 }}>
                {match.team} vs. {match.opponent} {match.result ? `(${match.result})` : ''}
              </div>
              <div style={{ color: 'var(--muted)' }}>
                {match.home ? 'Heim' : 'Auswärts'} • {match.competition}
              </div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontWeight: 700 }}>{match.dateLabel}</div>
              <div style={{ color: 'var(--muted)', fontSize: 13 }}>
                {match.kickoff} Uhr · {match.venue}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
