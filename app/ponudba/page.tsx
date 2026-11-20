import type { Metadata } from 'next';
import Link from 'next/link';
import PageIntro from '@/components/PageIntro';
import { CAMPAIGN, isCampaignActive } from '@/lib/campaign';

export const revalidate = 300;

export const metadata: Metadata = { title: 'Ponudba', description: 'Kako poteka priprava ponudbe za spletno stran ali digitalni projekt pri Lumeli.' };

const steps = [
  { index: '01', title: 'Pogovorimo se o ideji', description: 'Najprej razumemo, kaj želite doseči in komu je spletna stran namenjena.' },
  { index: '02', title: 'Uskladimo obseg', description: 'Dogovorimo se, katere strani, vsebine in funkcije projekt dejansko potrebuje.' },
  { index: '03', title: 'Pripravimo predlog', description: 'Predstavimo primeren način izvedbe, okvirne faze in ponudbo po dogovoru.' },
  { index: '04', title: 'Ustvarimo in preverimo', description: 'Razvoj spremljata pregled vsebine in tehnična kontrola pred objavo.' },
];

export default function PonudbaPage() {
  const active = isCampaignActive();
  return (
    <main id="main">
      <PageIntro eyebrow="Kako sodelujemo" title="Dober projekt se začne z dobrim pogovorom." description="Brez zapletenega procesa in nejasnih obljub. Najprej spoznamo vaš projekt, nato skupaj določimo pravo rešitev." />
      {active && <section className="bg-[#e7eee5] px-5 py-9 sm:px-8"><div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-5"><div><p className="text-xs font-bold uppercase tracking-[.15em] text-[#416b59]">Black Friday 2026</p><h2 className="mt-2 text-2xl font-semibold tracking-tight">−30 % na storitve in pakete Lumeli</h2><p className="mt-3 text-sm text-[#53675d]">Do {CAMPAIGN.endLabel}. Koda: {CAMPAIGN.code}. Popust se obračuna v individualni ponudbi.</p></div><Link href="/kuponi" className="rounded-full bg-[#416b59] px-6 py-3 text-sm font-semibold text-white">Prevzemi kupon ↗</Link></div></section>}
      <section className="bg-white px-5 py-20 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2">
          {steps.map((step) => (
            <article key={step.index} className="rounded-[1.75rem] border border-[#dce4d9] p-9">
              <p className="text-xs font-bold tracking-[.2em] text-[#648172]">{step.index}</p>
              <h2 className="mt-8 text-2xl font-semibold tracking-[-.045em]">{step.title}</h2>
              <p className="mt-4 text-sm leading-7 text-[#53675d]">{step.description}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-8 px-5 py-20 sm:px-8">
        <div><h2 className="text-3xl font-semibold tracking-[-.05em]">Si predstavljate nekaj podobnega?</h2><p className="mt-4 max-w-xl leading-7 text-[#53675d]">Oglejte si naše delo in preverite, katera smer vam je najbližje.</p></div>
        <Link href="/portfolio" className="rounded-full bg-[#416b59] px-8 py-4 text-sm font-semibold text-white hover:bg-[#304f42]">Oglej si reference ↗</Link>
      </section>
    </main>
  );
}
