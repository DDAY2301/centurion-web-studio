import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import PageIntro from '@/components/PageIntro';
import { englishPages } from '@/lib/english-content';
import { CAMPAIGN, COUPON_VARIANTS, isCampaignActive } from '@/lib/campaign';

export const revalidate = 300;
export const dynamicParams = false;
type Props = { params: Promise<{ slug?: string[] }> };
export function generateStaticParams() {
  return Object.keys(englishPages).map(key => ({ slug: key ? key.split('/') : [] }));
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const key = (await params).slug?.join('/') || '';
  const page = englishPages[key];
  if (!page) return {};
  const path = key ? '/' + key : '/';
  return { title: page.title, description: page.description, alternates: { canonical: '/en' + (key ? path : ''), languages: { sl: path, en: '/en' + (key ? path : '') } } };
}
const couponTitles = ['New website', 'Website redesign', 'Landing page', 'Bespoke project'];
const couponDescriptions = ['For businesses creating their first online presence.', 'For businesses refreshing their online presence.', 'For a new product, service or campaign.', 'For digital solutions with specific requirements.'];
export default async function EnglishPage({ params }: Props) {
  const key = (await params).slug?.join('/') || '';
  const page = englishPages[key];
  if (!page) notFound();
  const active = isCampaignActive();
  return (
    <main id="main" lang="en" className="text-[#20362d]">
      {active && ['', 'storitve', 'paketi', 'ponudba', 'kuponi'].includes(key) && <section className="bg-[#20362d] px-5 py-3 text-[#f6f3ec]"><div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 text-sm"><span>Black Friday · −{CAMPAIGN.discountPercent}% · Valid until 7 December 2026, 23:59 CET. Code: <strong>{CAMPAIGN.code}</strong></span><Link href="/en/kuponi" className="font-semibold underline underline-offset-4">View coupons ↗</Link></div></section>}
      <PageIntro eyebrow={page.eyebrow} title={page.heading} description={page.description} />
      {key === 'kuponi' && <section className="bg-white px-5 py-12 sm:px-8"><div className="mx-auto max-w-7xl">
        <p className="mb-6 text-sm">{active ? 'Valid until 7 December 2026 at 23:59 CET.' : 'This campaign has ended. Coupons are no longer valid.'}</p>
        <div className="grid gap-6 md:grid-cols-2">{COUPON_VARIANTS.map((variant, i) => <article key={variant.id} className="overflow-hidden rounded-2xl border border-[#dce4d9] bg-[#f6f3ec] p-5">
          {/* Local, trusted SVG coupon artwork. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={'/coupons/en-' + variant.id + '.svg'} width={1200} height={630} alt={'Lumeli coupon: ' + couponTitles[i]} className="w-full rounded-xl"/>
          <h2 className="mt-5 text-2xl font-semibold">{couponTitles[i]}</h2><p className="mt-2 text-sm leading-7">{couponDescriptions[i]}</p>
          <p className="mt-4 font-semibold">{CAMPAIGN.code}</p>
          <div className="mt-4 flex flex-wrap gap-4 text-sm font-semibold text-[#416b59]">{['png','pdf','svg'].map(ext => <a key={ext} href={'/coupons/en-' + variant.id + '.' + ext} download className="underline">{ext.toUpperCase()} ↧</a>)}</div>
          {active && <Link href="/en/kontakt" className="mt-5 inline-flex rounded-lg bg-[#20362d] px-5 py-3 text-sm font-semibold text-white">Request a quote ↗</Link>}
        </article>)}</div>
        <a href="/coupons/lumeli-black-friday-2026-en.zip" download className="mt-6 inline-flex font-semibold text-[#416b59] underline">Download all English coupons (ZIP) ↧</a>
      </div></section>}
      <section className="bg-white px-5 py-16 sm:px-8"><div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2">
        {page.cards.map((card, i) => <article key={card.title} className="rounded-2xl border border-[#dce4d9] bg-[#fffefa] p-7 sm:p-9">
          <p aria-hidden="true" className="text-xs font-bold tracking-[.2em] text-[#a65b47]">{String(i + 1).padStart(2, '0')}</p>
          <h2 className="mt-5 text-2xl font-semibold tracking-tight">{card.title}</h2>
          <p className="mt-4 text-base leading-8 text-[#53675d]">{card.text}</p>
          {card.items && <ul className="mt-5 space-y-3 text-sm text-[#425b4e]">{card.items.map(item => <li key={item}>✓ {item}</li>)}</ul>}
          {card.link && (card.link.startsWith('https://') ? <a href={card.link} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex font-semibold text-[#416b59] underline">{card.linkLabel} ↗</a> : <Link href={card.link} className="mt-6 inline-flex font-semibold text-[#416b59] underline">{card.linkLabel} ↗</Link>)}
        </article>)}
      </div></section>
      {page.action && <section className="bg-[#e7eee6] px-5 py-12 sm:px-8"><div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-5"><p className="text-2xl font-semibold tracking-tight">Lumeli · Digital studio</p><Link href={page.action.href} className="rounded-lg bg-[#20362d] px-7 py-4 text-sm font-semibold text-white hover:bg-[#365245]">{page.action.label} ↗</Link></div></section>}
    </main>
  );
}
