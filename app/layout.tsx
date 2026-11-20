import './globals.css';

export const revalidate = 86400;

export const metadata = {
  title: 'Lumeli - Beautiful digital experiences',
  description: 'Professional web design and development services. Beautiful websites and smart digital solutions, made with care.',
  keywords: 'web design, web development, digital agency, Slovenia, EU, website redesign, seo',
  authors: [{ name: 'Lumeli' }],
  creator: 'Lumeli',
  publisher: 'Centurion d.o.o.',
  formatDetection: {
    email: true,
    address: true,
  },
  openGraph: {
    title: 'Lumeli - Beautiful digital experiences',
    description: 'Professional web design and development services. Beautiful websites and smart digital solutions, made with care.',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://lumeli.eu',
    siteName: 'Lumeli',
    countryName: 'Slovenia',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://lumeli.eu'}/og-image.png`,
        width: 1200,
        height: 630,
        alt: 'Lumeli - Beautiful digital experiences',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lumeli - Beautiful digital experiences',
    description: 'Professional web design and development services.',
    images: [`${process.env.NEXT_PUBLIC_SITE_URL || 'https://lumeli.eu'}/og-image.png`],
  },
  robots: {
    maxAge: 180,
    language: ['en', 'sl'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className="min-h-screen flex flex-col bg-brand-light text-brand-dark">
        {children}
      </body>
    </html>
  );
}