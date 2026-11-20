import type { Metadata } from 'next';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import './globals.css';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://lumeli.eu';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: 'Lumeli — lepe spletne strani in pametne digitalne rešitve', template: '%s | Lumeli' },
  description: 'Lumeli je kreativni digitalni studio za oblikovanje in razvoj spletnih strani. Odkrijte naše storitve, projekte in pristop.',
  applicationName: 'Lumeli',
  openGraph: {
    title: 'Lumeli — digitalni studio',
    description: 'Premišljene spletne strani, oblikovanje in digitalne rešitve.',
    siteName: 'Lumeli',
    type: 'website',
    locale: 'sl_SI',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="sl">
      <body className="flex min-h-screen flex-col bg-[#f8f5ef] text-[#293b34] antialiased">
        <a href="#main" className="skip-link">Preskoči na vsebino</a>
        <SiteHeader />
        <div className="flex-1">{children}</div>
        <SiteFooter />
      </body>
    </html>
  );
}
