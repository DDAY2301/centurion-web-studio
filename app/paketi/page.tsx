import Link from 'next/link';

export const revalidate = 3600;

const packages = [
  {
    name: 'START',
    title: 'START - Osnovni paket',
    tagline: 'Vaša online prisotnost začetnika',
    description: 'Polnostvena spletna stran za podjetja brez spletne prisotnosti ali zahteve po osnovnem poslanom.',
    features: [
      'Enastrančna ali večstranska stran',
      'Popolna oblikovanje za vse naprave',
      'Osnove SEO optimizacije',
      'Kontakt oblika z napredkom',
      'Gostovanje za 12 mesecev',
      'Osnovena analitika',
      'Podpora za prvih 30 dni'
    ],
    price: 'Ponudba po dogovoru',
    target: 'Začetniki, majhna podjetja, bloggerske avtorje'
  },
  {
    name: 'BUSINESS',
    title: 'BUSINESS - Profesionalni paket',
    tagline: 'Vaša spletna prisotnost v celoti',
    description: 'Polnostvena večstranska spletna stran z napredno optimizacijo in vnapredeno oblikovanjem.',
    features: [
      'Do 10 strani vključno',
      'Napredna oblikovanje z animacijami',
      'Polna SEO optimizacija',
      'Performance optimizacija',
      'Kontakt oblika z napredkom in kalendarjem',
      'Gostovanje za 12 mesecev',
      'Redelno ažuriranje (6 mescev)',
      'Osnovena varnost',
      'Vprašanje za napredne funkcije'
    ],
    price: 'Ponudba po dogovoru',
    target: 'Srednja podjetja, tujci, profesionalci'
  },
  {
    name: 'GROWTH',
    title: 'GROWTH - Napredni paket',
    tagline: 'Vaša spletna stran za rast',
    description: 'Polnostvena spletna stran z naprednimi integracijami in CMS sistemom za nehancne vsebine.',
    features: [
      'Vsi Business paket funkcije',
      'Napredne API integracije',
      'CMS za upravljanje vsebine',
      'Avtomatizirani obvestili',
      'Analytics integracija (Google, Matomo)',
      'Plačilni sistema integracija',
      'CRM povezava',
      'Redelno ažuriranje (3 meseca)',
      'Polna podpora',
      'Možnost ponovnega načrtovanja'
    ],
    price: 'Ponudba po dogovoru',
    target: 'Velika podjetja, e-commerce, kompleksni projekti'
  }
];

export default function PaketiPage() {
  return (
    <>
      {/* Skip to content link */}
      <a href="#main" className="sr-only focus:not-sr-only skip-link">
        Preskoči na vsebino
      </a>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/60 border-b border-brand-border">
        <div className="container mx-auto flex items-center justify-between py-4 px-6">
          <Link href="/" className="flex items-center gap-3" prefetch={false}>
            <span className="text-2xl font-bold text-white">Centurion</span>
            <span className="text-sm text-brand-light -rotate-6 scale-105 transform opacity-75">
              Web Studio
            </span>
          </Link>

          <nav aria-label="Primarna navigacija">
            <ul className="flex gap-6">
              {[
                { href: '/#services', label: 'Storitve' },
                { href: '/#portfolio', label: 'Projekti' },
                { href: '/#about', label: 'O nas' },
                { href: '/#packages', label: 'Paketi' },
                { href: '/#contact', label: 'Kontakt' },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm font-medium text-brand-light hover:text-white transition-colors"
                    prefetch={false}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main id="main" className="flex-1">
        <section className="py-20 bg-brand-dark">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h1 className="text-5xl font-bold text-white mb-6">Paketi</h1>
              <p className="text-xl text-brand-light max-w-3xl mx-auto">
                Progresivne ponudbe prilagojene vašim potrebama in prilivom
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {packages.map((pkg) => (
                <article
                  key={pkg.name}
                  className="bg-brand-card rounded-2xl p-8 border border-brand-border hover:border-accent-primary/30 transition-all flex flex-col h-full"
                >
                  <div className="mb-6">
                    <span className="inline-flex items-center px-3 py-1 text-xs font-medium text-brand-light bg-brand-card border border-brand-border rounded-full mb-3">
                      {pkg.name}
                    </span>
                    <h2 className="text-2xl font-bold text-white mb-2">{pkg.title}</h2>
                    <p className="text-accent-primary font-medium mb-2">{pkg.tagline}</p>
                    <p className="text-brand-light text-sm">{pkg.description}</p>
                  </div>

                  <div className="flex-1 mb-6">
                    <h3 className="text-lg font-semibold text-white mb-3">Kaj vključuje paket?</h3>
                    <ul className="space-y-2">
                      {pkg.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <svg className="w-5 h-5 text-accent-primary mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                          </svg>
                          <span className="text-sm text-brand-light">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-sm font-medium text-brand-light mb-2">Ciljana skupina</h3>
                    <p className="text-sm text-brand-light">{pkg.target}</p>
                  </div>

                  <div>
                    <div className="text-sm font-medium text-brand-light mb-2">Cena</div>
                    <div className="text-xl font-bold text-accent-primary mb-4">{pkg.price}</div>
                    <p className="text-xs text-brand-light mb-3">
                      Ponudba je orientacijska. Končna cena je odvisna od specifikacije vašega projekta.
                    </p>
                    <Link
                      href="/ponudba"
                      className="block text-center inline-flex items-center justify-center rounded-full bg-accent-primary px-5 py-2 text-sm font-semibold text-white hover:bg-accent-600 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary"
                      prefetch={false}
                    >
                      Zahtevaj ponudbo
                    </Link>
                  </div>
                </article>
              ))}
            </div>

            {/* Call to action */}
            <div className="mt-16 text-center">
              <div className="bg-brand-card rounded-2xl p-8 border border-brand-border max-w-2xl mx-auto">
                <h3 className="text-2xl font-bold text-white mb-4">Potrebujete pomoč za izbo?</h3>
                <p className="text-brand-light mb-6">
                  Ne ste prepričani/na? Pišite nam in bomo vesel/a pomagali izbrati pravi paket za vaše potrebe.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/#contact"
                    className="inline-flex items-center justify-center rounded-full bg-accent-primary px-6 py-3 text-base font-semibold text-white hover:bg-accent-600 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary focus-visible:ring-offset-2"
                    prefetch={false}
                  >
                    Povprašajte brez obveznosti
                  </Link>
                  <Link
                    href="/ponudba"
                    className="inline-flex items-center justify-center rounded-full border border-accent-primary px-6 py-3 text-base font-semibold text-accent-primary hover:bg-accent-primary/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary focus-visible:ring-offset-2"
                    prefetch={false}
                  >
                    Začnite svoj projekt
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-black border-t border-brand-border py-12">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <p className="text-xs text-brand-light">
              &copy; {new Date().getFullYear()} Centurion Web Studio. Vsi pravice pridržani.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}