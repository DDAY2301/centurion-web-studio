import type { Metadata } from 'next';
import Link from 'next/link';
import CouponCard from '@/components/CouponCard';
import PageIntro from '@/components/PageIntro';
import { CAMPAIGN, COUPON_VARIANTS, isCampaignActive } from '@/lib/campaign';

export const revalidate = 300;
export const metadata: Metadata = {
  title: 'Black Friday kuponi',
  description: 'Lumeli Black Friday 2026: 30 % popusta na spletne strani, prenove, pristajalne strani in digitalne projekte po meri.',
};

export default function CouponsPage() {
  const active = isCampaignActive();

  return (
    <main id="main">
      <PageIntro
        eyebrow="Lumeli · Black Friday"
        title="30 % popusta. Štiri možnosti."
        description="Izberite kupon za svoj projekt in navedite kodo BLACKFRIDAY30 pri pripravi ponudbe. Popust se obračuna na dogovorjeno ceno storitev."
      />
      <section className="bg-white px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="mb-9 max-w-3xl text-sm leading-7 text-[#53675d]">
            {active ? `Kuponi veljajo do ${CAMPAIGN.endLabel} po slovenskem času.` : 'Kampanja Black Friday 2026 se je zaključila. Kuponi so na voljo za ogled, niso pa več veljavni.'}
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            {COUPON_VARIANTS.map(variant => <CouponCard key={variant.id} variant={variant} active={active} />)}
          </div>
          <div className="mt-12 rounded-[1.75rem] border border-[#cbd9cb] bg-[#e9f0e8] p-8">
            <h2 className="text-2xl font-semibold tracking-[-.03em]">Kako uporabite kupon?</h2>
            <p className="mt-4 max-w-3xl text-sm leading-8 text-[#53675d]">Izberite ustrezni kupon, shranite ga in pri povpraševanju navedite kodo <strong>{CAMPAIGN.code}</strong>. Popust se obračuna pri pripravi individualne ponudbe v skladu s pogoji kampanje.</p>
            <p className="mt-3 max-w-3xl text-xs leading-6 text-[#53675d]">{CAMPAIGN.terms}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/paketi" className="rounded-full bg-[#416b59] px-6 py-3 text-sm font-semibold text-white hover:bg-[#304f42]">Oglej si pakete</Link>
              <Link href="/kontakt" className="rounded-full border border-[#416b59] px-6 py-3 text-sm font-semibold text-[#416b59] hover:bg-white">Kontakt</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
