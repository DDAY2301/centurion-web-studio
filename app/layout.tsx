import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata = {
  title: 'Centurion Web Studio - Profesionalna spletna razvojna dejavnost',
  description: 'Ustvarimo profesionalne spletne strani za vaše podjetje. Vključeno: spletna razvojna, SEO, optimizacija in vzdrževanje.',
  keywords: 'spletna stran, web razvoj, slovenska podjetja, SEO optimizacija, responsive oblikovanje',
  authors: [{ name: 'Centurion Web Studio' }],
  creator: 'Centurion Web Studio',
  publisher: 'Centurion d.o.o.',
  formatDetection: {
    email: true,
    address: true,
  },
  openGraph: {
    title: 'Centurion Web Studio - Profesionalna spletna razvojna dejavnost',
    description: 'Ustvarimo profesionalne spletne strani za vaše podjetje.',
    url: process.env.NEXT_PUBLIC_SITE_URL,
    siteName: 'Centurion Web Studio',
    countryName: 'Slovenia',
    locale: 'sl_SI',
    type: 'website',
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: 'Centurion Web Studio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Centurion Web Studio',
    description: 'Profesionalna spletna razvojna dejavnost za podjetja v Sloveniji in EU.',
    images: [`${process.env.NEXT_PUBLIC_SITE_URL}/og-image.png`],
  },
  robots: {
    maxAge: 180,
    language: ['sl', 'en'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sl" suppressHydrationWarning>
      <head />
      <body className={inter.variable + ' min-h-screen flex flex-col'}>
        {children}
      </body>
    </html>
  );
}