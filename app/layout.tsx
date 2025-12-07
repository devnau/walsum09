import type { Metadata } from 'next';
import './globals.css';

const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'https://walsum09-fussball.de');

const deploymentUrl = baseUrl.startsWith('http') ? baseUrl : `https://${baseUrl}`;

export const metadata: Metadata = {
  title: 'Walsum 09 – Fussball mit Konzept',
  description:
    'Redesign-Preview der Vereinsseite mit Spielplan, News und Sponsoren-Spotlights. Auf Next.js 14 gebaut.',
  metadataBase: new URL(deploymentUrl),
  openGraph: {
    title: 'Walsum 09 – Fussball mit Konzept',
    description:
      'Redesign-Preview der Vereinsseite mit Spielplan, News und Sponsoren-Spotlights. Auf Next.js 14 gebaut.',
    url: deploymentUrl,
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
