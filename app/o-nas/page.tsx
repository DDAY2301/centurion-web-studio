import Link from 'next/link';

export const revalidate = 3600;

export default function ONasPage() {
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
              <h1 className="text-5xl font-bold text-white mb-8">O nas</h1>

              <div className="bg-brand-card rounded-2xl p-8 border border-brand-border mb-12">
                <h2 className="text-2xl font-bold text-white mb-4">Tuj o nas</h2>
                <p className="text-brand-light text-lg mb-4">
                  Centurion Web Studio je digitalna dejavnost povezana z Centurion d.o.o.
                </p>
                <p className="text-brand-light text-lg">
                  Najdemo se v Ljubljani in delujemo s podjetji po vsej Evropi. Naša misija je povezati podjetja z
                  profesionalno spletno prisotnostjo, ki dela za njih.
                </p>
              </div>

              <div className="bg-brand-card rounded-2xl p-8 border border-brand-border mb-12">
                <h2 className="text-2xl font-bold text-white mb-4">Naš pristop</h2>
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
                <h2 className="text-2xl font-bold text-white mb-4">Naše vrednote</h2>
                <p className="text-brand-light text-lg">
                  Ker vzervujemo svojo prilivnost, trdimo na naslednjih principih:
                </p>
              </div>

              <div className="bg-brand-card rounded-2xl p-8 border border-brand-border">
                <h2 className="text-2xl font-bold text-white mb-4">Povezava z obisknici</h2>
                <p className="text-brand-light text-lg">
                  Ste ponaren da, da bi prejel/ala boljšo spletno prisotnost? Pišite nam na
                </p>
                <Link
                  href="mailto:info@centurion-web-studio.example"
                  className="inline-block mt-4 text-accent-primary hover:text-accent-primary/80 font-medium"
                >
                  info@centurion-web-studio.example
                </Link>
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