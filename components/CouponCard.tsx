'use client';

import Link from 'next/link';
import { useState } from 'react';
import { CAMPAIGN, type CouponVariant } from '@/lib/campaign';

export default function CouponCard({ variant, active }: { variant: CouponVariant; active: boolean }) {
  const [copied, setCopied] = useState(false);

  async function copyCode() {
    try {
      await navigator.clipboard.writeText(CAMPAIGN.code);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  }

  const base = `/coupons/${variant.id}`;

  return (
    <article className="flex flex-col overflow-hidden rounded-[1.75rem] border border-[#dce4d9] bg-white">
      <div className="bg-[#e6eee4] p-3">
        {/* Native img is intentional here: campaign SVG is a local, trusted, static asset. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={base + '.svg'} alt={`Lumeli kupon – ${variant.title}`} width="1200" height="630" className="w-full rounded-xl" />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="text-xs font-semibold uppercase tracking-[.18em] text-[#416b59]">−30 % · Black Friday</p>
        <h3 className="mt-3 text-xl font-semibold tracking-[-.03em]">{variant.title}</h3>
        <p className="mt-3 flex-1 text-sm leading-7 text-[#53675d]">{variant.audience}</p>
        <div className="mt-6 rounded-xl border border-dashed border-[#8aaa95] bg-[#f8f5ef] p-3">
          <p className="text-xs text-[#53675d]">Promocijska koda</p>
          <div className="mt-1 flex flex-wrap items-center justify-between gap-2">
            <code className="font-semibold text-[#293b34]">{CAMPAIGN.code}</code>
            <button type="button" onClick={copyCode} className="text-xs font-semibold text-[#416b59] underline-offset-4 hover:underline" aria-label={`Kopiraj kodo ${CAMPAIGN.code}`}>{copied ? 'Kopirano ✓' : 'Kopiraj'}</button>
          </div>
        </div>
        <div className="mt-5 flex flex-wrap gap-3 text-sm font-semibold">
          <a href={base + '.png'} download className="underline underline-offset-4 text-[#416b59]">PNG ↧</a>
          <a href={base + '.pdf'} download className="underline underline-offset-4 text-[#416b59]">PDF ↧</a>
          <a href={base + '.svg'} download className="underline underline-offset-4 text-[#416b59]">SVG ↧</a>
        </div>
        {active ? (
          <Link href="/kontakt" className="mt-6 rounded-full bg-[#416b59] px-5 py-3 text-center text-sm font-semibold text-white hover:bg-[#304f42]">Povprašaj za ponudbo ↗</Link>
        ) : (
          <p className="mt-6 text-sm text-[#765a5a]">Akcija je zaključena. Kupon ni več veljaven.</p>
        )}
      </div>
    </article>
  );
}
