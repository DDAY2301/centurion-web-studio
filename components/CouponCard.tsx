'use client';

import { useState } from 'react';
import Link from 'next/link';
import { COUPON_VARIANTS, CAMPAIGN } from '@/lib/campaign';

type CouponVariantId = typeof COUPON_VARIANTS[number]['id'];

interface CouponCardProps {
  variantId: CouponVariantId;
  onCopy?: () => void;
}

export default function CouponCard({ variantId, onCopy }: CouponCardProps) {
  const [copied, setCopied] = useState(false);
  const variant = COUPON_VARIANTS.find(v => v.id === variantId);

  if (!variant) return null;

  return (
    <div className="bg-white rounded-2xl p-8 border border-brand-border hover:shadow-lg transition-all">
      <div className="text-center">
        {/* Black Friday badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 text-xs font-medium text-brand-light bg-brand-subtle rounded-full border border-brand-border">
          <span className="w-2 h-2 rounded-full bg-accent-primary"></span>
          {CAMPAIGN.label}
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-brand-dark mb-3">
          {variant.title}
        </h3>

        {/* Description */}
        <p className="text-brand-light text-sm mb-4">
          {variant.description}
        </p>

        {/* Discount badge */}
        <div className="inline-block mb-6">
          <span className="inline-flex items-center gap-2 px-4 py-2 text-lg font-bold text-white bg-accent-primary rounded-full">
            -{CAMPAIGN.discount}%
          </span>
        </div>

        {/* Coupon Code */}
        <div className="bg-brand-subtle rounded-lg p-4 mb-6">
          <p className="text-xs text-brand-light mb-2">Koda</p>
          <div className="flex items-center justify-center gap-3">
            <code className="text-2xl font-bold text-accent-primary">
              {CAMPAIGN.code}
            </code>
            <button
              onClick={() => {
                navigator.clipboard.writeText(CAMPAIGN.code);
                setCopied(true);
                onCopy?.();
                setTimeout(() => setCopied(false), 2000);
              }}
              className="p-2 text-brand-light hover:text-brand-dark transition-colors"
              aria-label="Kopiraj kodo"
            >
              {copied ? (
                <span className="text-accent-primary">✓</span>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-2a2 2 0 00-2-2h-8a2 2 0 00-2 2v2a2 2 0 002 2z"></path>
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Benefits */}
        <div className="text-left mb-6">
          <p className="text-xs text-brand-light mb-2">Koristi:</p>
          <ul className="space-y-1">
            {variant.benefits.map((benefit) => (
              <li key={benefit} className="flex items-start gap-2">
                <svg className="w-4 h-4 text-accent-primary mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                </svg>
                <span className="text-sm text-brand-light">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA */}
        <Link
          href="/kontakt"
          className="block w-full inline-flex items-center justify-center gap-2 rounded-full bg-accent-primary px-6 py-3 text-sm font-semibold text-white hover:bg-accent-600 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary focus-visible:ring-offset-2"
          prefetch={false}
        >
          Povprašaj za ponudbo
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6l4 4m0 0l-4 4m4-4H6"></path>
          </svg>
        </Link>

        <p className="text-xs text-brand-light mt-3">
          Ob povpraševanju navedite kodo <code className="bg-brand-card px-1 py-0.5 rounded text-accent-primary">{CAMPAIGN.code}</code>
        </p>
      </div>
    </div>
  );
}