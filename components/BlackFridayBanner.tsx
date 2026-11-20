import Link from 'next/link';
import { CAMPAIGN } from '@/lib/campaign';

export default function BlackFridayBanner() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-r from-brand-dark to-brand-darker">
      <div className="container mx-auto px-6 py-12 text-center">
        <div className="inline-flex items-center gap-3 px-4 py-2 mb-6 text-sm font-medium text-brand-light bg-brand-card rounded-full border border-brand-border">
          <span className="w-2 h-2 rounded-full bg-accent-primary"></span>
          {CAMPAIGN.label}
        </div>

        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          <span className="block mb-2">Black Friday</span>
          <span className="text-accent-primary">-{CAMPAIGN.discount}% na vse pakete</span>
        </h2>

        <p className="text-lg text-brand-light max-w-2xl mx-auto mb-8">
          {CAMPAIGN.validity} {CAMPAIGN.message}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/paketi"
            className="inline-flex items-center justify-center rounded-full bg-accent-primary px-8 py-4 text-base font-semibold text-white hover:bg-accent-600 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary focus-visible:ring-offset-2"
          prefetch={false}
          >
            Poglej pakete
          </Link>
          <Link
            href="/kuponi"
            className="inline-flex items-center justify-center rounded-full border-2 border-accent-primary px-8 py-4 text-base font-semibold text-accent-primary hover:bg-accent-primary/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary focus-visible:ring-offset-2"
            prefetch={false}
          >
            Povzemi kupon
          </Link>
        </div>

        <div className="mt-6 text-sm text-brand-light">
          <p>Koda: <code className="bg-brand-card px-2 py-1 rounded text-accent-primary font-mono">{CAMPAIGN.code}</code></p>
        </div>
      </div>
    </section>
  );
}