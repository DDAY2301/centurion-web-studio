import { CAMPAIGN, COUPON_VARIANTS, getDiscountedPrice, isCampaignActive } from './campaign';

describe('Lumeli Black Friday campaign', () => {
  const firstDay = new Date('2026-11-20T12:00:00+01:00');
  const expired = new Date('2026-12-08T00:00:00+01:00');

  it('starts at 20 November midnight in Ljubljana', () => {
    expect(isCampaignActive(new Date('2026-11-19T22:59:59Z'))).toBe(false);
    expect(isCampaignActive(new Date(CAMPAIGN.start))).toBe(true);
  });

  it('expires at 7 December 23:59:59 in Ljubljana', () => {
    expect(isCampaignActive(new Date('2026-12-07T22:59:59Z'))).toBe(true);
    expect(isCampaignActive(new Date('2026-12-01T12:00:00+01:00'))).toBe(true);
    expect(isCampaignActive(expired)).toBe(false);
  });

  it('applies 30 percent only during the campaign', () => {
    expect(getDiscountedPrice(100, firstDay)).toBe(70);
    expect(getDiscountedPrice(100, expired)).toBe(100);
  });

  it('never invents zero euro pricing for non-priced services', () => {
    expect(getDiscountedPrice(null, firstDay)).toBeNull();
  });

  it('has four unique business coupon variants', () => {
    expect(COUPON_VARIANTS).toHaveLength(4);
    expect(new Set(COUPON_VARIANTS.map((v) => v.id)).size).toBe(4);
  });
});
