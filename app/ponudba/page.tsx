import Link from 'next/link';

export const revalidate = 3600;

export default function PonudbaPage() {
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
                <h1 className="text-5xl font-bold text-white mb-6">Ponudba</h1>
                <p className="text-xl text-brand-light max-w-3xl mx-auto">
                  Poglobljena ponudba za vaše spletno razvoj
                </p>
              </div>

              {/* Special Offer */}
              <div className="bg-accent-primary rounded-2xl p-8 mb-12 text-center">
                <h2 className="text-2xl font-bold text-white mb-4">Specjalna ponudba</h2>
                <p className="text-xl text-white mb-6">
                  Uporabite kodo <code className="bg-white/20 px-3 py-1 rounded text-white font-mono">CENTURION10</code>
                  za 10% popust na prvi projekt
                </p>
                <p className="text-white/80 text-sm">
                  Ponudba velja do 30.11.2026. Enkrat uporabljeni koda za registrirane stranke.
                </p>
              </div>

              {/* How It Works */}
              <div className="bg-brand-card rounded-2xl p-8 border border-brand-border mb-12">
                <h2 className="text-2xl font-bold text-white mb-6">Kako deluje?</h2>
                <p className="text-brand-light text-lg mb-8">
                  Naša ponudba temelji na preprotem, a učinkovitem postopku z jasenimi koraki:
                </p>

                <div className="grid md:grid-cols-4 gap-6">
                  {[
                    {
                      step: '1',
                      title: 'Povprašajte',
                      desc: 'Izpolnite obrazec z informacijami o vašem projektu.'
                    },
                    {
                      step: '2',
                      title: 'Analiza',
                      desc: 'Naša ekipa pregleda vaše zahteve in pripravi razčlenitev.'
                    },
                    {
                      step: '3',
                      title: 'Ponudba',
                      desc: 'Prejmite pisno ponudbo z ročno pregledo in roki.'
                    },
                    {
                      step: '4',
                      title: 'Začetek',
                      desc: 'Po potrditvi pogodbe začnemo z razvojem.'
                    }
                  ].map((item) => (
                    <div key={item.step} className="text-center">
                      <div className="w-12 h-12 rounded-full bg-accent-primary text-white font-bold flex items-center justify-center mx-auto mb-3">
                        {item.step}
                      </div>
                      <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                      <p className="text-sm text-brand-light">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Terms */}
              <div className="bg-brand-card rounded-2xl p-8 border border-brand-border">
                <h2 className="text-2xl font-bold text-white mb-6">Pogoj za uporabo ponudbe</h2>
                <div className="space-y-4 text-brand-light text-sm">
                  <p><strong>1. Enkrat uporabljena koda:</strong> Koda je osebna in enokratna za uporabo. Ne more se deliti ali prenašati.</p>
                  <p><strong>2. Veljavnost:</strong> Ponudba je veljavna do 30.11.2026. Vsi projekti morajo začeti zanimivo.</p>
                  <p><strong>3. Kvalifikacije:</strong> Koda se uporablja za nova podjetja brez spletne prisotnosti ali za ponovno oblikovanje obstoječe strani.</p>
                  <p><strong>4. Konec ponudbe:</strong> Če se odločite za dodatne storitve (npr. posodobitve, integracije), se popust uporabi le za osnovo storitve.</p>
                  <p><strong>5. Potrdilo:</strong> Če se odločite za nadaljovanje, bom pisno potrdilo za pogoje ponudbe.</p>
                </div>

                <div className="mt-8 p-6 bg-brand-dark rounded-lg">
                  <h3 className="text-lg font-semibold text-white mb-3">Kaj pa vi?</h3>
                  <p className="text-brand-light text-sm mb-4">
                    Ste ponaren/a, da bi prejel/ala boljšo spletno prisotnost? Pišite nam in bomo vesel/a pomagali.
                  </p>
                  <Link
                    href="/#contact"
                    className="inline-block rounded-full bg-accent-primary px-5 py-2 text-sm font-semibold text-white hover:bg-accent-600 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary"
                    prefetch={false}
                  >
                    Povprašajte zdaj
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