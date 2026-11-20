import Link from 'next/link';

export const revalidate = 3600;

export default function PortfolioPage() {
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
              <h1 className="text-5xl font-bold text-white mb-6">Portfolio</h1>
              <p className="text-xl text-brand-light max-w-3xl mx-auto">
                Naši uspešni projekti - realne rešitve za realna podjetja
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* BlogLab Project */}
              <Link
                href="/portfolio/blog-lab"
                className="group bg-brand-card rounded-2xl overflow-hidden border border-brand-border hover:border-accent-primary/30 transition-all"
                prefetch={false}
              >
                <div className="aspect-video relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-dark to-brand-darker flex items-center justify-center">
                    <div className="text-center p-6">
                      <div className="text-sm text-brand-light mb-2">Portfolio</div>
                      <h3 className="text-2xl font-bold text-white mb-3">BlogLab.eu</h3>
                      <p className="text-brand-light text-sm max-w-xs">
                        React aplikacija z Vite za peneracijo in objavljanje člankov. Vključeno AI pomoč za ureditev vsebine.
                      </p>
                    </div>
                  </div>
                </div>
              </Link>

              {/* Black Raven Project */}
              <Link
                href="/portfolio/black-raven"
                className="group bg-brand-card rounded-2xl overflow-hidden border border-brand-border hover:border-accent-primary/30 transition-all"
                prefetch={false}
              >
                <div className="aspect-video relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-dark to-brand-darker flex items-center justify-center">
                    <div className="text-center p-6">
                      <div className="text-sm text-brand-light mb-2">Portfolio</div>
                      <h3 className="text-2xl font-bold text-white mb-3">Black Raven Solutions</h3>
                      <p className="text-brand-light text-sm max-w-xs">
                        Bilingual prezentacijska stran za wilderness akademijo. S pomocjo Node.js backenda za kontakt oblike.
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>

            {/* Call to action */}
            <div className="mt-16 text-center">
              <div className="bg-brand-card rounded-2xl p-8 border border-brand-border max-w-2xl mx-auto">
                <h3 className="text-2xl font-bold text-white mb-4">Imete projekt v planu?</h3>
                <p className="text-brand-light mb-6">
                  Povejte nam več o svojem projektu in pripravimo vam ponudbo.
                </p>
                <Link
                  href="/#contact"
                  className="inline-block rounded-full bg-accent-primary px-8 py-4 text-base font-semibold text-white hover:bg-accent-600 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary focus-visible:ring-offset-2"
                  prefetch={false}
                >
                  Povprašajte za ponudbo
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