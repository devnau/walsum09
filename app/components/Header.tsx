'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { href: '/', label: 'Start' },
  { href: '/news', label: 'News' },
  { href: '/teams', label: 'Teams' },
  { href: '/spielplan', label: 'Spielplan' },
  { href: '/sponsoren', label: 'Sponsoren' },
  { href: '/verein', label: 'Verein' }
];

export function Header() {
  const pathname = usePathname();

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
          const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));

          return (
            <Link key={item.label} href={item.href} className={`nav-link${isActive ? ' active' : ''}`}>
              {item.label}
            </Link>
          );
        })}
        <Link href="/kontakt" className="btn btn-secondary">
          Kontakt
        </Link>
      </nav>
    </header>
  );
}
