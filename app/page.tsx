import Link from 'next/link';
import Image from 'next/image';

export const revalidate = 3600; // ISR - revalidate every hour

export default function HomePage() {
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

      {/* Hero Section */}
      <main id="main" className="flex-1">
        <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-brand-darker to-brand-dark">
          {/* Background elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-accent-600/10 blur-3xl"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-trust-600/10 blur-3xl"></div>
          </div>

          <div className="relative container mx-auto px-6 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 text-xs font-medium text-brand-light bg-brand-card rounded-full border border-brand-border">
              <span className="w-2 h-2 rounded-full bg-accent-primary"></span>
              Prenesitev na boljšo spletno prisotnost
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="block mb-2">Vaše podjetje si zasluži</span>
              <span className="text-accent-primary">spletno stran, ki dela za vas.</span>
            </h1>

            <p className="text-xl text-brand-light max-w-3xl mx-auto mb-10">
              Ustvarjamo profesionalne spletne strani za podjetja v Sloveniji in unii.
              Od osnovne prisotnosti do naprednih optimizacij - imamo rešitev za vas.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-accent-primary px-8 py-4 text-base font-semibold text-white hover:bg-accent-600 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary focus-visible:ring-offset-2"
                prefetch={false}
              >
                Povprašajte za ponudbo
              </Link>
              <Link
                href="/#services"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-brand-border bg-brand-card px-8 py-4 text-base font-medium text-brand-light hover:bg-brand-subtle transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary focus-visible:ring-offset-2"
                prefetch={false}
              >
                Poglej storitve
              </Link>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 bg-brand-dark">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Naše storitve</h2>
              <p className="text-lg text-brand-light max-w-2xl mx-auto">
                Celovito rešitev za vašo spletno nprisotnost - od načrtovanja do vzdrževanja
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'Poslovena spletna stran',
                  description: 'Profesionalna večstranska spletna stran, ki odraža idento vášega podjetja.',
                },
                {
                  title: 'Landing page',
                  description: 'Kratka, učinkovita stran za predvajanje ponudbe ali kampanje.',
                },
                {
                  title: 'Ponovna oblikovanje',
                  description: 'Modernizacija obstoječe spletne strani z izboljšano uporabniško izkušnjo.',
                },
                {
                  title: 'Popravki spletne strani',
                  description: 'Reševanje tveganj, optimizacija in vzdrževanje vaše prisotnosti na spletu.',
                },
                {
                  title: 'SEO & Performance',
                  description: 'Optimizacija za iskalno ujemanje in hiter način nalaganja.',
                },
                {
                  title: 'Vzdrževanje',
                  description: 'Redelna nadzor,posodobitve in varnost za vašo spletno stran.',
                },
              ].map((service) => (
                <div
                  key={service.title}
                  className="bg-brand-card rounded-xl p-6 border border-brand-border hover:border-accent-primary/30 transition-all"
                >
                  <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                  <p className="text-brand-light text-sm">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">_naši projekti</h2>
              <p className="text-lg text-brand-light max-w-2xl mx-auto">
                Preglejte naše uspešne realizacije za različne panogske sektorje
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* BlogLab Project */}
              <article className="group bg-brand-card rounded-2xl overflow-hidden border border-brand-border hover:border-accent-primary/30 transition-all">
                <div className="aspect-video relative">
                  <Image
                    src="https://images.unsplash.com/photo-1551434490-9f4b0dbf92b1?w=1200&h=675&fit=crop"
                    alt="BlogLab stran"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                </div>
                <div className="p-6">
                  <div className="text-xs text-brand-light mb-2">Portfolio</div>
                  <h3 className="text-2xl font-bold text-white mb-3">BlogLab.eu</h3>
                  <p className="text-brand-light text-sm mb-4">
                    React aplikacija z Vite za peneracijo in objavljanje člankov.
                    Vključeno AI pomoč za ureditev vsebine.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-2 py-1 text-xs rounded bg-accent-primary/10 text-accent-primary">React</span>
                    <span className="px-2 py-1 text-xs rounded bg-accent-primary/10 text-accent-primary">Vite</span>
                    <span className="px-2 py-1 text-xs rounded bg-accent-primary/10 text-accent-primary">AI integracija</span>
                  </div>
                  <Link
                    href="https://bloglab.eu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-accent-primary hover:text-accent-primary/80 font-medium text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary"
                  >
                    Poglej projekt
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6l4 4m0 0l-4 4m4-4H6"></path>
                    </svg>
                  </Link>
                </div>
              </article>

              {/* Black Raven Project */}
              <article className="group bg-brand-card rounded-2xl overflow-hidden border border-brand-border hover:border-accent-primary/30 transition-all">
                <div className="aspect-video relative">
                  <Image
                    src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=675&fit=crop"
                    alt="Black Raven stran"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                </div>
                <div className="p-6">
                  <div className="text-xs text-brand-light mb-2">Portfolio</div>
                  <h3 className="text-2xl font-bold text-white mb-3">Black Raven Solutions</h3>
                  <p className="text-brand-light text-sm mb-4">
                    Bilingual prezentacijska stran za wilderness akademijo.
                    S pomocjo Node.js backenda za kontakt oblike.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-2 py-1 text-xs rounded bg-accent-primary/10 text-accent-primary">HTML/CSS/JS</span>
                    <span className="px-2 py-1 text-xs rounded bg-accent-primary/10 text-accent-primary">Node.js</span>
                    <span className="px-2 py-1 text-xs rounded bg-accent-primary/10 text-accent-primary">Bilingual</span>
                  </div>
                  <Link
                    href="https://blackraven.solutions"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-accent-primary hover:text-accent-primary/80 font-medium text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary"
                  >
                    Poglej projekt
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6l4 4m0 0l-4 4m4-4H6"></path>
                    </svg>
                  </Link>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* Packages Section */}
        <section id="packages" className="py-20 bg-brand-dark">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Paketi</h2>
              <p className="text-lg text-brand-light max-w-2xl mx-auto">
                Progresivne ponudbe prilagojene vašim potrebama
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: 'START',
                  title: 'START - Osnavitelj',
                  description: 'Osmotvena spletna prisotnost za začetnike',
                  features: [
                    'Enastrančna ali večstranska stran',
                    'Responsive oblikovanje',
                    'Osnova SEO optimizacije',
                    'Kontakt oblika',
                    'Gostovanje za 12 meseci'
                  ],
                  price: 'Ponudba po dogovoru',
                },
                {
                  name: 'BUSINESS',
                  title: 'BUSINESS - Profesionalac',
                  description: 'Celovita spletna stran za podjetja',
                  features: [
                    'Do 10 strani',
                    'Napredna SEO optimizacija',
                    'Performance usmerjena optimizacija',
                    'Kontakt oblika z napredkom',
                    'Gostovanje za 12 meseci',
                    'Redno ažuriranje'
                  ],
                  price: 'Ponudba po dogovoru',
                },
                {
                  name: 'GROWTH',
                  title: 'GROWTH - Rast',
                  description: ' napredna spletna stran z integracijami',
                  features: [
                    'Vsi Business paket funkcije',
                    'Kunden integracije',
                    'CMS za vsebino upravitelj',
                    'Avtomatizirani obvestili',
                    'Analitika integracija',
                    'Možnost ponovnega načrtovanja'
                  ],
                  price: 'Ponudba po dogovoru',
                },
              ].map((pkg) => (
                <div
                  key={pkg.name}
                  className="bg-brand-card rounded-2xl p-8 border border-brand-border hover:border-accent-primary/30 transition-all flex flex-col h-full"
                >
                  <div className="mb-6">
                    <span className="inline-flex items-center px-3 py-1 text-xs font-medium text-brand-light bg-brand-card border border-brand-border rounded-full mb-3">
                      {pkg.name}
                    </span>
                    <h3 className="text-2xl font-bold text-white mb-2">{pkg.title}</h3>
                    <p className="text-brand-light text-sm">{pkg.description}</p>
                  </div>

                  <div className="flex-1 mb-6">
                    <ul className="space-y-3">
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

                  <div>
                    <div className="text-sm text-brand-light mb-2">Cena</div>
                    <div className="text-xl font-bold text-white mb-4">{pkg.price}</div>
                    <Link
                      href="/ponudba"
                      className="block text-center inline-flex items-center justify-center rounded-full bg-accent-primary px-4 py-2 text-sm font-semibold text-white hover:bg-accent-600 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary"
                      prefetch={false}
                    >
                      Zahtevaj ponudbo
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-white mb-4">Povprašajte za ponudbo</h2>
                <p className="text-lg text-brand-light">
                  Vemo, da je vsaka podjetje unikatno. Poglejte si kako lahko pomagamo.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-3">Kontakt informacije</h3>
                      <div className="space-y-3 text-brand-light">
                        <p className="flex items-center gap-3">
                          <svg className="w-5 h-5 text-accent-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12H8m4-4h.01M12 20h.01M6 10h.01M12 4v.01M12 20v-.01M6 16h.01M16 8h.01"></path>
                          </svg>
                          <span>Centurion Web Studio</span>
                        </p>
                        <p className="text-sm">
                          Delujemo s podjetjem Centurion d.o.o.
                        </p>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-white mb-3">Kaj pa vi?</h3>
                      <p className="text-brand-light text-sm">
                        Vsak projekt je drugačen. Povejte nam več o svojem podjetju in vaših pričakovanjih.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-white mb-3">Specialna ponudba</h3>
                      <p className="text-brand-light text-sm mb-3">
                        Uporabite kodo za 10% popust na prvi projekt:
                      </p>
                      <div className="inline-flex items-center gap-3 px-4 py-2 bg-brand-card border border-brand-border rounded-lg">
                        <code className="text-accent-primary font-mono text-sm">CENTURION10</code>
                        <button
                          onClick={() => navigator.clipboard.writeText('CENTURION10')}
                          className="p-1 text-brand-light hover:text-white transition-colors"
                          aria-label "Kopiraj kodo"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-2a2 2 0 00-2-2h-8a2 2 0 00-2 2v2a2 2 0 002 2z"></path>
                          </svg>
                        </button>
                      </div>
                      <Link
                        href="/ponudba"
                        className="text-sm text-accent-primary hover:text-accent-primary/80 font-medium inline-block mt-2"
                        prefetch={false}
                      >
                        Poglej ponudbo →
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="bg-brand-card rounded-2xl p-8 border border-brand-border">
                  <form
                    action="/api/contact"
                    method="POST"
                    className="space-y-6"
                    onSubmit={async (e) => {
                      e.preventDefault();
                      // Form handling would go here
                      const form = e.target as HTMLFormElement;
                      const formData = new FormData(form);
                      const data = Object.fromEntries(formData.entries());

                      try {
                        const response = await fetch('/api/contact', {
                          method: 'POST',
                          headers: { 'Content-Type': 'application/json' },
                          body: JSON.stringify(data),
                        });

                        if (response.ok) {
                          form.reset();
                          alert('Hvala! Vaša sporočila bom prejel/a.');
                        }
                      } catch (error) {
                        alert('Prišlo je do napake. Poskusite znova.');
                      }
                    }}
                  >
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-brand-light mb-2">
                          Ime in priimek *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          className="w-full rounded-lg bg-brand-card border border-brand-border px-4 py-3 text-white placeholder:text-brand-light focus:border-accent-primary focus:ring-0 transition-colors"
                          placeholder="Vpišite ime"
                        />
                      </div>
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-brand-light mb-2">
                          Podjetje *
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          required
                          className="w-full rounded-lg bg-brand-card border border-brand-border px-4 py-3 text-white placeholder:text-brand-light focus:border-accent-primary focus:ring-0 transition-colors"
                          placeholder="Naziv podjetja"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-brand-light mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full rounded-lg bg-brand-card border border-brand-border px-4 py-3 text-white placeholder:text-brand-light focus:border-accent-primary focus:ring-0 transition-colors"
                        placeholder="email@podjetje.si"
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-brand-light mb-2">
                          Telefon
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          className="w-full rounded-lg bg-brand-card border border-brand-border px-4 py-3 text-white placeholder:text-brand-light focus:border-accent-primary focus:ring-0 transition-colors"
                          placeholder="+386 1 234 5678"
                        />
                      </div>
                      <div>
                        <label htmlFor="service" className="block text-sm font-medium text-brand-light mb-2">
                          Interesirana storitev
                        </label>
                        <select
                          id="service"
                          name="service"
                          required
                          className="w-full rounded-lg bg-brand-card border border-brand-border px-4 py-3 text-white focus:border-accent-primary focus:ring-0 transition-colors"
                        >
                          <option value="">Izberi storitev</option>
                          <option value="business-website">Poslovena spletna stran</option>
                          <option value="landing-page">Landing page</option>
                          <option value="redesign">Ponovno oblikovanje</option>
                          <option value="repair">Popravki</option>
                          <option value="seo">SEO & Performance</option>
                          <option value="maintenance">Vzdrževanje</option>
                          <option value="other">Druga vrstta storitve</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="coupon" className="block text-sm font-medium text-brand-light mb-2">
                        Kuponna koda (pomagalna)
                      </label>
                      <input
                        type="text"
                        id="coupon"
                        name="couponCode"
                        className="w-full rounded-lg bg-brand-card border border-brand-border px-4 py-3 text-white placeholder:text-brand-light focus:border-accent-primary focus:ring-0 transition-colors"
                        placeholder="Vneši kuponno kodo"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-brand-light mb-2">
                        Opis projekta
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        required
                        className="w-full rounded-lg bg-brand-card border border-brand-border px-4 py-3 text-white placeholder:text-brand-light focus:border-accent-primary focus:ring-0 transition-colors resize-y"
                        placeholder="Kratek opis vašega projekta in pričakovanj..."
                      />
                    </div>

                    <div className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        id="consent"
                        name="consent"
                        required
                        className="mt-1 rounded border-brand-border bg-brand-card"
                      />
                      <label htmlFor="consent" className="text-xs text-brand-light">
                        Potrjujem, da sem sorazumen/s politike zasebnosti in da mi smeta pošiljati informacije povezane z ponudbo.{' '}
                        <Link href="/politika-zasebnosti" className="text-accent-primary hover:text-accent-primary/80">
                          Politika zasebnosti
                        </Link>
                      </label>
                    </div>

                    <button
                      type="submit"
                      className="w-full rounded-full bg-accent-primary px-6 py-3 text-base font-semibold text-white hover:bg-accent-600 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary focus-visible:ring-offset-2"
                    >
                      Pošlji zahtevek
                    </button>

                    <p className="text-xs text-brand-light text-center">
                      * Obvezna polja
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-black border-t border-brand-border py-12">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-4 gap-8 mb-12">
              <div>
                <h4 className="text-white font-semibold mb-4">Centurion Web Studio</h4>
                <p className="text-sm text-brand-light">
                  Digitalna dejavnost Centurion d.o.o.
                </p>
              </div>
              <div>
                <h5 className="text-white font-medium mb-4">Storitve</h5>
                <ul className="space-y-2">
                  <li><Link href="/#services" className="text-sm text-brand-light hover:text-white transition-colors">Spletna stran</Link></li>
                  <li><Link href="/#services" className="text-sm text-brand-light hover:text-white transition-colors">Landing page</Link></li>
                  <li><Link href="/#services" className="text-sm text-brand-light hover:text-white transition-colors">Ponovno oblikovanje</Link></li>
                  <li><Link href="/#services" className="text-sm text-brand-light hover:text-white transition-colors">SEO</Link></li>
                </ul>
              </div>
              <div>
                <h5 className="text-white font-medium mb-4">Projekti</h5>
                <ul className="space-y-2">
                  <li><Link href="/portfolio/blog-lab" className="text-sm text-brand-light hover:text-white transition-colors">BlogLab.eu</Link></li>
                  <li><Link href="/portfolio/black-raven" className="text-sm text-brand-light hover:text-white transition-colors">Black Raven Solutions</Link></li>
                </ul>
              </div>
              <div>
                <h5 className="text-white font-medium mb-4">Povezava</h5>
                <ul className="space-y-2 text-sm text-brand-light">
                  <li>Cesta 1, 1000 Ljubljana</li>
                  <li>POD: 12345678</li>
                  <li>email@centurion.si</li>
                </ul>
              </div>
            </div>

            <div className="border-t border-brand-border pt-8 text-center">
              <p className="text-xs text-brand-light">
                &copy; {new Date().getFullYear()} Centurion Web Studio. Vsi pravice pridržani.
              </p>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}