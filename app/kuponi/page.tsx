import Link from 'next/link';
import BlackFridayBanner from '@/components/BlackFridayBanner';
import CouponCard from '@/components/CouponCard';
import { CAMPAIGN, COUPON_VARIANTS } from '@/lib/campaign';

export const revalidate = 3600;

export default function KuponiPage() {
  return (
    <>
      {/* Skip to content link */}
      <a href="#main" className="sr-only focus:not-sr-only skip-link">
        Preskoči na vsebino
      </a>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-brand-border">
        <div className="container mx-auto flex items-center justify-between py-4 px-6">
          <Link href="/" className="flex items-center gap-3" prefetch={false}>
            <span className="text-2xl font-bold text-brand-dark">lumeli.</span>
          </Link>

          <nav aria-label="Primarna navigacija">
            <ul className="flex gap-6">
              {[
                { href: '/storitve', label: 'Storitve' },
                { href: '/portfolio', label: 'Reference' },
                { href: '/o-nas', label: 'O nas' },
                { href: '/paketi', label: 'Paketi' },
                { href: '/kontakt', label: 'Kontakt' },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm font-medium text-brand-light hover:text-brand-dark transition-colors"
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
        {/* Black Friday Banner */}
        <BlackFridayBanner />

        {/* Coupon Section */}
        <section className="py-20 bg-brand-subtle">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-brand-dark mb-4">Popustni kuponi</h2>
              <p className="text-lg text-brand-light max-w-2xl mx-auto">
               Izberite kupon, ki ustreza vašemu projektu. Koda je <strong>{CAMPAIGN.code}</strong>.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {COUPON_VARIANTS.map((variant) => (
                <CouponCard key={variant.id} variantId={variant.id} />
              ))}
            </div>

            <div className="mt-16 text-center">
              <div className="bg-white rounded-2xl p-8 border border-brand-border max-w-2xl mx-auto">
                <h3 className="text-2xl font-bold text-brand-dark mb-4">Kako uporabiti kupon?</h3>
                <ol className="text-left sm:text-center space-y-3 text-brand-light">
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent-primary text-xs font-semibold text-white flex-shrink-0">1</span>
                    <span>Izberite ustrezen kupon in kopirajte kodo</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent-primary text-xs font-semibold text-white flex-shrink-0">2</span>
                    <span>Obiščite <Link href="/kontakt" className="text-accent-primary hover:underline">Kontakt</Link> stran</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent-primary text-xs font-semibold text-white flex-shrink-0">3</span>
                    <span>Ob povpraševanju navedite kodo <code className="bg-brand-subtle px-2 py-1 rounded text-accent-primary">{CAMPAIGN.code}</code></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent-primary text-xs font-semibold text-white flex-shrink-0">4</span>
                    <span>Prejmite individualno ponudbo s popustom v skladu s pogoji akcije</span>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-brand-dark border-t border-brand-border py-12">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <p className="text-xs text-brand-light">
              &copy; {new Date().getFullYear()} lumeli. Vsi pravice pridržani.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}