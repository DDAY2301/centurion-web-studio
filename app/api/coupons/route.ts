import { NextResponse } from 'next/server';

// No commercial offer has been approved and no persistent, transactional
// redemption backend is configured. Do not advertise a fictitious campaign,
// provide anonymous admin access, or mutate in-memory coupon counts.
function unavailable() {
  return NextResponse.json(
    { valid: false, error: 'Kuponska kampanja trenutno ni aktivna.' },
    { status: 503, headers: { 'Cache-Control': 'no-store' } }
  );
}

export const GET = unavailable;
export const POST = unavailable;
export const PATCH = unavailable;
