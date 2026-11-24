import Link from 'next/link';
import { CAMPAIGN, isCampaignActive } from '@/lib/campaign';

export default function BlackFridayBanner() {
  if (!isCampaignActive()) return null;

  return (
    <section aria-label="Black Friday ponudba" className="bg-[#20362d] px-5 py-3 text-[#f6f3ec] sm:px-10">
      <div className="mx-auto flex max-w-[1440px] flex-wrap items-center justify-between gap-x-6 gap-y-2">
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
          <span className="shrink-0 rounded-md border border-[#8da497] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[.2em] text-[#e8b7a2]">
            Black Friday · −{CAMPAIGN.discountPercent} %
          </span>
          <p className="text-xs leading-6 text-[#d9e3d9] sm:text-sm">
            Za spletne projekte. Velja do: {CAMPAIGN.endLabel}. Koda: <strong className="font-semibold text-white">{CAMPAIGN.code}</strong>
          </p>
        </div>
        <Link href="/kuponi" className="shrink-0 text-xs font-semibold text-white underline decoration-[#c58f78] underline-offset-4 hover:text-[#e8b7a2] sm:text-sm">
          Oglejte si kupone ↗
        </Link>
      </div>
    </section>
  );
}
