import Link from 'next/link';

export const revalidate = 3600;

export default function ONasKontaktPage() {
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
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl font-bold text-white mb-8">O nas in kontakt</h1>

              <div className="bg-brand-card rounded-2xl p-8 border border-brand-border mb-12">
                <h2 className="text-2xl font-bold text-white mb-6">O naši dejavnosti</h2>
                <p className="text-brand-light text-lg mb-4">
                  Centurion Web Studio je digitalna dejavnost povezana z Centurion d.o.o.
                </p>
                <p className="text-brand-light text-lg">
                  Najdemo se v Ljubljani in delujemo s podjetji po vsej Evropi. Naša misija je povezati podjetja z
                  profesionalno spletno prisotnostjo, ki dela za njih.
                </p>
              </div>

              <div className="bg-brand-card rounded-2xl p-8 border border-brand-border mb-12">
                <h2 className="text-2xl font-bold text-white mb-6">Naš pristop</h2>
                <p className="text-brand-light text-lg mb-6">
                  Uporabljamo moderne orodja, trd prakse in štiri ključna načela:
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">1. Preciznost</h3>
                    <p className="text-sm text-brand-light">
                      vsak projekt je razdeljen v jasne faze z jasnatimi meji in izhodišči.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">2. Vrhnja kakovosti</h3>
                    <p className="text-sm text-brand-light">
                      Uporabljamo najnovejše tehnologije in smo na voljo vseh brskalnikov.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">3. Odpovednost</h3>
                    <p className="text-sm text-brand-light">
                      Vaša stran je naša skrb - zagotavljamo nadzor in vzdrževanje.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">4. Prilagoditev</h3>
                    <p className="text-sm text-brand-light">
                      vsaka rešitev je dostopna po vaših specifičnih potrebah.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-brand-card rounded-2xl p-8 border border-brand-border mb-12">
                <h2 className="text-2xl font-bold text-white mb-6">Kontakt informacije</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-4">Poisi nas nasvaj</h3>
                    <div className="space-y-3 text-brand-light">
                      <p className="flex items-center gap-3">
                        <svg className="w-5 h-5 text-accent-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                          <span>Cesta 1, 1000 Ljubljana, Slovenija</span>
                        </svg>
                      </p>
                      <p className="flex items-center gap-3">
                        <svg className="w-5 h-5 text-accent-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 11v6a2 2 0 002 2h10a2 2 0 002-2v-6"></path>
                          <span>Podatki registracije: 12345678</span>
                        </svg>
                      </p>
                      <p className="flex items-center gap-3">
                        <svg className="w-5 h-5 text-accent-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 11v6a2 2 0 002 2h10a2 2 0 002-2v-6"></path>
                          <span>E-mail: info@centurion-web-studio.example</span>
                        </svg>
                      </p>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-4">V času</h3>
                    <div className="space-y-2 text-brand-light text-sm">
                      <p>Ponedeljek - Petk: 9:00 - 18:00</p>
                      <p>Sobota: 10:00 - 14:00</p>
                      <p>Nedelja: Zaprel</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-brand-card rounded-2xl p-8 border border-brand-border">
                <h2 className="text-2xl font-bold text-white mb-6">Kontakt oblika</h2>
                <p className="text-brand-light text-lg mb-6">
                  Uporabite spodnjo obliko za povpraševanje ali pišite neposredno na email.
                </p>

                <form
                  action="/api/contact"
                  method="POST"
                  className="space-y-6"
                  onSubmit={async (e) => {
                    e.preventDefault();
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
                        alert('Hvala! Vaša sporošila bom prejel/a.');
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

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-brand-light mb-2">
                      Interesirana storitev *
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

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-brand-light mb-2">
                      Sproščenje
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
                      <Link href="/politika-zasebnosti" className="text-accent-primary hover:text-accent-primary/80 font-medium">
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