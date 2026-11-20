import Link from 'next/link';

export const revalidate = 3600;

const services = [
  {
    id: 'business-website',
    title: 'Poslovena spletna stran',
    description: 'Profesionalna večstranska spletna stran, ki odraža idento vášega podjetja.',
    who: 'Idealno za začetnike z brez spletno prisotnostjo ali za podjetja, ki hočejo moderno prisotnost.',
    deliverables: [
      'Osobljena in responsivna oblikovanje',
      '1-5 strani vključno',
      'Osnova SEO optimizacije',
      'Kontakt oblika z napredkom',
      'Gostovanje za 12 meseci',
      'Podstavitev pod pomerilo'
    ],
    process: [
      'Časovni projekt z urejencem',
      'Obrzor projektov',
      'Načrt in vzorčenje',
      'Spletna stran z izvedbo',
      'Testiranje na vseh napravah',
      'Spremljanje in prilagoditev'
    ],
  },
  {
    id: 'landing-page',
    title: 'Landing page',
    description: 'Kratka, učinkovita stran za predvajanje ponudbe ali kampanje.',
    who: 'Za promocijo novih izdelkov, kampanj ali za konverzijo obiskov v vodje.',
    deliverables: [
      'Ciljno usmerjena oblikovanje',
      'Osvetljena konverzija',
      'Odgovor na relevantno vprašanja',
      'Omejeni vrhunski',
      'Hitra začetna verzija',
      'Analytics integracija'
    ],
    process: [
      'Poznavanje ciljnih publike',
      'Razvoj vključne stran',
      'Kratka oblikovanje verzija',
      'Testiranje konverzije',
      'Enostavna objava',
      'Spraščanje in izboljšave'
    ],
  },
  {
    id: 'redesign',
    title: 'Ponovno oblikovanje',
    description: 'Modernizacija obstoječe spletne strani z izboljšano uporabniško izkušnjo.',
    who: 'Za podjetja z obstoječo stranjo, ki potrebujejo izboljšave videza in funkcionalnosti.',
    deliverables: [
      'Ohranitev obsežen vsebin',
      'Modern oblikovanje',
      'obilježna mobilna prilagoditev',
      'Povezava k sistemom',
      'Ohranitev SEO vrednosti',
      'Osvetljena konverzija'
    ],
    process: [
      'Pregled obstoječe strani',
      'Zbrano vprašanja za izboljšave',
      'Načrt in vizualni vzhled',
      'Razvoj in testiranje',
      'Spremljanje migracije',
      'Enostavno objavljanje'
    ],
  },
  {
    id: 'repair',
    title: 'Popravki spletne strani',
    description: 'Reševanje tveganj, optimizacija in vzdrževanje vaše prisotnosti na spletu.',
    who: 'Za stranje, ki ne delujejo pravilno, PONUŠI ZAHTEVNE NAPAKI ali zahtevajo časovno odmevnost.',
    deliverables: [
      'Popravki tehnološke napake',
      'Optimizacija brzine',
      'obilježna mobilna prilagoditev',
      'Ponobnovitev varnosti',
      'Ponovna verzija',
      'Dokumentacija'
    ],
    process: [
      'Diagnoza problema',
      'Načrt popravka',
      'Popravki v test okolju',
      'Testiranje na vseh brskalnikih',
      'Objava z minimalno prekinjanjem',
      'Spraščanje o vzdrževanju'
    ],
  },
  {
    id: 'seo-performance',
    title: 'SEO & Performance',
    description: 'Optimizacija za iskalno ujemanje in hiter način nalaganja.',
    who: 'Za podjetja, ki hočejo boljšo vidnost v iskalnikih in boljšo izkušnjo uporabnika.',
    deliverables: [
      'Tehnična SEO pregled',
      'obilježna konfiguracija meta-podatkov',
      'Optimizacija slike',
      'obilježna mobilna hitrost',
      'Core Web Vitals poročilo',
      'Analytics povezava'
    ],
    process: [
      'Tehnični pregled SEO faktorjev',
      'Analiza konkurenc',
      'Načrt optimizacijskih izboljšav',
      'Implementacija sprememb',
      'Sledovanje rezultatom',
      'Ponovna optimizacija'
    ],
  },
  {
    id: 'maintenance',
    title: 'Vzdrževanje',
    description: 'Redelna nadzor, posodobitve in varnost za vašo spletno stran.',
    who: 'Za podjetja, ki želijo zaupno rešitev brez skrbi za tehnološke aspekte.',
    deliverables: [
      'Redelna pregled storitve',
      'Posodobitve programa',
      'obilježna varnost',
      'Backup strategija',
      'Podpora za čas za izpolnitvijo',
      'Porocilo o stanju'
    ],
    process: [
      'Ustvarjanje vzdrževalnega načrta',
      'Redelna pregled strani',
      'Avtomatske posodobitve',
      'Varovanje brezžičnega dostopa',
      'Sproščenje napak',
      'Porocila o stanju'
    ],
  },
  {
    id: 'custom-integration',
    title: 'Custom integracije',
    description: 'Pridatite specifične funkcije, ki so ključne za vaše poslovanje.',
    who: 'Za podjetja, ki potrebujejo posesne rešitve kot pont, CRM ali poslovni sistem.',
    deliverables: [
      'API integracija',
      'Pridatite funkcije',
      'obilježna obrazec obdelava',
      'Povezava z družbenimi omrežji',
      'Pridatite plačilni sistema',
      'Pridatite analitiko'
    ],
    process: [
      'Zahteva specifikacije',
      'Načrt arhitekture',
      'Razvoj komponent',
      'Testiranje v različnih okoljih',
      'Integracija in dokumentacija',
      'Sproščenje napak in vzdrževanje'
    ],
  },
];

export default function StoritvePage() {
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
              <h1 className="text-5xl font-bold text-white mb-6">Naše storitve</h1>
              <p className="text-xl text-brand-light max-w-3xl mx-auto">
                Celovito rešitev za vašo spletno nprisotnost - od načrtovanja do vzdrževanja
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {services.map((service, index) => (
                <article
                  key={service.id}
                  className="bg-brand-card rounded-2xl p-8 border border-brand-border hover:border-accent-primary/30 transition-all"
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-accent-primary flex items-center justify-center text-white font-bold">
                      {index + 1}
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-white mb-2">{service.title}</h2>
                      <p className="text-brand-light">{service.description}</p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-3">Kdo je primeren/a?</h3>
                      <p className="text-brand-light text-sm">{service.who}</p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-white mb-3">Kaj pađe v paketu?</h3>
                      <ul className="space-y-2">
                        {service.deliverables.map((item) => (
                          <li key={item} className="flex items-start gap-3">
                            <svg className="w-5 h-5 text-accent-primary mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                            </svg>
                            <span className="text-sm text-brand-light">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-white mb-3">Pričakovani postopek</h3>
                      <ol className="space-y-2">
                        {service.process.map((step, i) => (
                          <li key={step} className="flex items-center gap-3">
                            <span className="w-6 h-6 rounded-full bg-accent-primary text-xs font-semibold text-white">{i + 1}</span>
                            <span className="text-sm text-brand-light">{step}</span>
                          </li>
                        ))}
                      </ol>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-white mb-3">Kaj vpliva na ceno?</h3>
                      <p className="text-sm text-brand-light">
                        Velikost projekta, število strani, zahteve po integracijah in časovni okvir so ključni dejavniki.
                      </p>
                    </div>

                    <Link
                      href="/#contact"
                      className="inline-flex items-center gap-2 rounded-full bg-accent-primary px-5 py-2 text-sm font-semibold text-white hover:bg-accent-600 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary"
                      prefetch={false}
                    >
                      Povprašajte za ponudbo
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6l4 4m0 0l-4 4m4-4H6"></path>
                      </svg>
                    </Link>
                  </div>
                </article>
              ))}
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