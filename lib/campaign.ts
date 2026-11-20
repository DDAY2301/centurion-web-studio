/** Single source of truth for the Lumeli Black Friday campaign. */
export const CAMPAIGN = {
  name: 'Lumeli Black Friday 2026',
  code: 'BLACKFRIDAY30',
  discountPercent: 30,
  start: '2026-11-19T23:00:00.000Z', // 20 Nov 00:00 in Ljubljana
  endExclusive: '2026-11-30T23:00:00.000Z', // 1 Dec 00:00 in Ljubljana
  endLabel: '30. november 2026 ob 23.59',
  domain: 'https://lumeli.net',
  terms: '30 % popusta na dogovorjeno ceno naših storitev. Morebitni stroški zunanjih ponudnikov niso vključeni, razen če je dogovorjeno drugače.',
} as const;

export type CouponId = 'new-website' | 'redesign' | 'landing-page' | 'custom-project';

export type CouponVariant = {
  id: CouponId;
  title: string;
  description: string;
  audience: string;
};

export const COUPON_VARIANTS: readonly CouponVariant[] = [
  {
    id: 'new-website',
    title: 'Nova spletna stran',
    description: 'Vaše podjetje si zasluži odlično spletno stran.',
    audience: 'Za podjetja, ki potrebujejo svojo prvo spletno predstavitev.',
  },
  {
    id: 'redesign',
    title: 'Prenova spletne strani',
    description: 'Sveža podoba. Boljša izkušnja.',
    audience: 'Za podjetja, ki želijo osvežiti svojo spletno podobo.',
  },
  {
    id: 'landing-page',
    title: 'Pristajalna stran',
    description: 'Ena stran. Jasno sporočilo.',
    audience: 'Za predstavitev novega izdelka, storitve ali kampanje.',
  },
  {
    id: 'custom-project',
    title: 'Projekt po meri',
    description: 'Vaša ideja. Naša izvedba.',
    audience: 'Za digitalne rešitve s posebnimi zahtevami.',
  },
] as const;

export function isCampaignActive(now: Date = new Date()): boolean {
  const timestamp = now.getTime();
  return timestamp >= Date.parse(CAMPAIGN.start) && timestamp < Date.parse(CAMPAIGN.endExclusive);
}

export function getDiscountedPrice(originalPrice: number | null, now: Date = new Date()): number | null {
  if (originalPrice === null || !Number.isFinite(originalPrice) || originalPrice < 0) return null;
  if (!isCampaignActive(now)) return originalPrice;
  return Math.round(originalPrice * (1 - CAMPAIGN.discountPercent / 100) * 100) / 100;
}
