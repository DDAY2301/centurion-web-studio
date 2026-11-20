/**
 * Black Friday Campaign Configuration
 * Central source of truth for campaign data
 */

export const CAMPAIGN = {
  label: 'LUMELI BLACK FRIDAY',
  discount: 30,
  code: 'BLACKFRIDAY30',
  validity: 'Akcija velja do 30.11.2026',
  startDate: '2026-11-20',
  endDate: '2026-11-30',
  message: 'Popust se obračuna v končni ponudbi.',
  domain: 'https://lumeli.net',
} as const;

export const COUPON_VARIANTS = [
  {
    id: 'new-website',
    title: 'Nova spletna stran',
    description: 'Black Friday: -30% na novo spletno stran za vaše podjetje.',
    benefits: ['Modern oblikovanje', 'Hitra izgradnja', 'Celotna zasnova'],
  },
  {
    id: 'redesign',
    title: 'Ponovno oblikovanje',
    description: 'Black Friday: -30% na ponovno oblikovanje vaše obstoječe spletne strani.',
    benefits: ['Novo oblikovanje', 'Modern tehnologija', 'Boljša izkušnja uporabnika'],
  },
  {
    id: 'landing-page',
    title: 'Landing page',
    description: 'Black Friday: -30% na landing page za predstavitev izdrodu ali kampanje.',
    benefits: ['Visoko konverzijsko', 'Kratek čas izgradnje', 'Mobilno prijazno'],
  },
  {
    id: 'custom-project',
    title: 'Moj projekt',
    description: 'Black Friday: -30% na poljubno digitalno razrešitev.',
    benefits: ['Individualno prilagodljivo', 'Popolna podpora', 'Trajna vzdrževanje'},
  },
] as const;

export function getDiscountedPrice(originalPrice: number | null): {
  original: number | null;
  discounted: number;
  savings: number;
  percentage: number;
} {
  if (originalPrice === null) {
    return {
      original: null,
      discounted: 0,
      savings: 0,
      percentage: CAMPAIGN.discount,
    };
  }
  const discounted = Math.round(originalPrice * (1 - CAMPAIGN.discount / 100));
  const savings = originalPrice - discounted;
  return {
    original: originalPrice,
    discounted,
    savings,
    percentage: CAMPAIGN.discount,
  };
}