import Link from 'next/link';

export const revalidate = 3600;

export default function BlogLabPortfolio() {
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
              <div className="text-center mb-16">
                <Link
                  href="/portfolio"
                  className="inline-flex items-center gap-2 text-accent-primary hover:text-accent-primary/80 font-medium mb-6"
                  prefetch={false}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7"></path>
                  </svg>
                  Pojele projekti
                </Link>
                <h1 className="text-5xl font-bold text-white mb-6">BlogLab.eu</h1>
                <p className="text-xl text-brand-light max-w-3xl mx-auto">
                  Platforma za pisanje in objavljanje člankov z AI pomočjo
                </p>
              </div>

              {/* Project Details */}
              <div className="bg-brand-card rounded-2xl border border-brand-border mb-12">
                <div className="p-8">
                  <div className="flex flex-wrap gap-4 mb-6">
                    <span className="px-3 py-1 text-xs font-medium text-brand-light bg-brand-card border border-brand-border rounded-full">
                      Project
                    </span>
                    <span className="px-3 py-1 text-xs font-medium text-brand-light bg-brand-card border border-brand-border rounded-full">
                      React + Vite
                    </span>
                    <span className="px-3 py-1 text-xs font-medium text-brand-light bg-brand-card border border-brand-border rounded-full">
                      Slovenščina
                    </span>
                  </div>

                  <h2 className="text-2xl font-bold text-white mb-6">O projektu</h2>
                  <p className="text-brand-light text-lg mb-6">
                    BlogLab je React aplikacija z Vite za peneracijo in objavljanje člankov.
                    Vključeno AI pomoč za ureditev vsebine in avtomatsko objavo na GitHub Pages.
                  </p>

                  <h3 className="text-xl font-semibold text-white mb-4">Ključne značilnosti</h3>
                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-sm font-medium text-accent-primary mb-2">Tehnologije</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-3">
                          <svg className="w-5 h-5 text-accent-primary mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                          </svg>
                          <span className="text-sm text-brand-light">React 19</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <svg className="w-5 h-5 text-accent-primary mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                          </svg>
                          <span className="text-sm text-brand-light">Vite 8</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <svg className="w-5 h-5 text-accent-primary mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                          </svg>
                          <span className="text-sm text-brand-light">TypeScript</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <svg className="w-5 h-5 text-accent-primary mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                          </svg>
                          <span className="text-sm text-brand-light">GitHub Pages</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-accent-primary mb-2">Funkcije</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-3">
                          <svg className="w-5 h-5 text-accent-primary mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                          </svg>
                          <span className="text-sm text-brand-light">Bilingual vmesnik</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <svg className="w-5 h-5 text-accent-primary mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                          </svg>
                          <span className="text-sm text-brand-light">AI pomoč za pisanje</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <svg className="w-5 h-5 text-accent-primary mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                          </svg>
                          <span className="text-sm text-brand-light">Production guardian</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <svg className="w-5 h-5 text-accent-primary mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                          </svg>
                          <span className="text-sm text-brand-light">Health monitoring</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-white mb-4">Status in napredki</h3>
                  <p className="text-brand-light text-sm">
                    <span className="text-accent-primary">✓</span> Vgradnja je zaključena - projekt je v produkciji
                  </p>
                </div>
              </div>

              {/* Live Project Link */}
              <div className="text-center">
                <Link
                  href="https://bloglab.eu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 rounded-full bg-accent-primary px-8 py-4 text-lg font-semibold text-white hover:bg-accent-600 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary focus-visible:ring-offset-2"
                >
                  Poglej na živih
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6l4 4m0 0l-4 4m4-4H6"></path>
                  </svg>
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