import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Walsum 09 – Fussball mit Konzept',
  description:
    'Redesign-Preview der Vereinsseite mit Spielplan, News und Sponsoren-Spotlights. Auf Next.js 14 gebaut.',
  metadataBase: new URL('https://walsum09.local'),
  openGraph: {
    title: 'Walsum 09 – Fussball mit Konzept',
    description:
      'Redesign-Preview der Vereinsseite mit Spielplan, News und Sponsoren-Spotlights. Auf Next.js 14 gebaut.',
    url: 'https://walsum09.local',
    siteName: 'Walsum 09',
    locale: 'de_DE',
    type: 'website'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
