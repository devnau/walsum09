'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { href: '#news', label: 'News' },
  { href: '#teams', label: 'Teams' },
  { href: '#spielplan', label: 'Spielplan' },
  { href: '#sponsoren', label: 'Sponsoren' }
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
        {navItems.map((item) => (
          <Link key={item.href} href={isHome ? item.href : `/${item.href}`}>
            {item.label}
          </Link>
        ))}
        <Link href="#kontakt" className="btn btn-secondary">
          Kontakt
        </Link>
      </nav>
    </header>
  );
}
