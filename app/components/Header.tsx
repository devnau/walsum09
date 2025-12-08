'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { hash: 'news', label: 'News' },
  { hash: 'teams', label: 'Teams' },
  { hash: 'spielplan', label: 'Spielplan' },
  { hash: 'sponsoren', label: 'Sponsoren' },
  { href: '/verein', label: 'Verein' }
];

export function Header() {
  const pathname = usePathname();
  const isHome = pathname === '/';

  return (
    <header>
      <div className="logo">
        <span className="logo-circle">09</span>
        <div>
          <strong>Walsum 09</strong>
          <div style={{ color: 'var(--muted)', fontSize: 13 }}>Duisburg • Fussball</div>
        </div>
      </div>
      <nav className="nav-links" aria-label="Hauptnavigation">
        {navItems.map((item) => {
          const href = item.hash ? { pathname: '/', hash: item.hash } : item.href ?? '/';
          const scroll = item.hash ? isHome : true;

          return (
            <Link key={item.label} href={href} scroll={scroll}>
              {item.label}
            </Link>
          );
        })}
        <Link href={{ pathname: '/', hash: 'kontakt' }} className="btn btn-secondary">
          Kontakt
        </Link>
      </nav>
    </header>
  );
}
