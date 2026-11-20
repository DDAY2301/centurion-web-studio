import Link from 'next/link';
import { CAMPAIGN, isCampaignActive } from '@/lib/campaign';

export default function BlackFridayBanner() {
  if (!isCampaignActive()) return null;

  return (
    <section aria-label="Black Friday ponudba" className="bg-[#293b34] px-5 py-14 text-[#f8f5ef] sm:px-8">
      <div className="mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-[1fr_auto]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#dce9df]">Lumeli · Black Friday 2026</p>
          <h2 className="mt-4 max-w-4xl text-3xl font-semibold leading-[1.13] tracking-[-0.06em] sm:text-5xl">
            Vaša nova spletna stran. <span className="text-[#e9b8b0]">30 % ugodneje.</span>
          </h2>
          <p className="mt-5 max-w-2xl text-sm leading-7 text-[#dce9df]">
            Popust velja na vse pakete in storitve Lumeli do {CAMPAIGN.endLabel}. Ob povpraševanju navedite kodo <strong>{CAMPAIGN.code}</strong>.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link href="/kuponi" className="rounded-full bg-[#e9b8b0] px-7 py-4 text-sm font-bold text-[#293b34] hover:bg-[#f1cac4]">Prevzemi kupon ↗</Link>
          <Link href="/paketi" className="rounded-full border border-[#8eab99] px-7 py-4 text-sm font-semibold text-[#f8f5ef] hover:bg-[#3d5949]">Poglej pakete</Link>
        </div>
      </div>
    </section>
  );
}
