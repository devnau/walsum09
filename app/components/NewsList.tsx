import Link from 'next/link';

import { news } from '@/data/news';

export function NewsList() {
  return (
    <section id="news">
      <div className="section-title">
        <h2>News & Spielberichte</h2>
        <Link href="/news" className="badge">
          Alle Artikel
        </Link>
      </div>
      <div className="grid cards">
        {news.map((item) => (
          <article key={item.id} className="card" aria-labelledby={`news-${item.id}`}>
            <div style={{ display: 'flex', justifyContent: 'space-between', gap: 10 }}>
              <span className="badge">{item.category}</span>
              <span style={{ color: 'var(--muted)', fontSize: 13 }}>{new Date(item.date).toLocaleDateString('de-DE')}</span>
            </div>
            <h3 id={`news-${item.id}`}>{item.title}</h3>
            <p>{item.excerpt}</p>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: 'var(--muted)' }}>
              <span>{item.author}</span>
              <span style={{ fontSize: 13 }}>Weiterlesen →</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
