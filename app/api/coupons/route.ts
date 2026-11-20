import { NextRequest, NextResponse } from 'next/server';

// Type definitions
interface Coupon {
  code: string;
  campaign_id: string;
  discount_type: 'percentage' | 'fixed';
  discount_value: number;
  description: string;
  expiry_date: string;
  usage_limit: number;
  used_count: number;
  active: boolean;
  applicable_services: string[];
  min_order_value?: number;
}

// In-memory coupon store (in production, use database)
const coupons: Coupon[] = [
  {
    code: 'CENTURION10',
    campaign_id: 'launch_2026_10_percent',
    discount_type: 'percentage',
    discount_value: 10,
    description: '10% popust na prvi projekt',
    expiry_date: '2026-11-30T23:59:59Z',
    usage_limit: 100,
    used_count: 0,
    active: true,
    applicable_services: ['business-website', 'landing-page', 'redesign', 'repair', 'seo-performance', 'maintenance', 'custom-integration']
  }
];

// Coupon validation API
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { code, service } = body;

    if (!code) {
      return NextResponse.json(
        { error: 'Koda je obvezna.' },
        { status: 400 }
      );
    }

    // Find coupon
    const coupon = coupons.find(c => c.code.toLowerCase() === code.toLowerCase());

    if (!coupon) {
      return NextResponse.json(
        { valid: false, error: 'Kuponna koda ne velja.' },
        { status: 400 }
      );
    }

    // Check if coupon is active
    if (!coupon.active) {
      return NextResponse.json(
        { valid: false, error: 'Kuponna koda je onemočena.' },
        { status: 400 }
      );
    }

    // Check expiry
    if (new Date(coupon.expiry_date) < new Date()) {
      return NextResponse.json(
        { valid: false, error: 'Kuponna koda je potekla.' },
        { status: 400 }
      );
    }

    // Check usage limit
    if (coupon.used_count >= coupon.usage_limit) {
      return NextResponse.json(
        { valid: false, error: 'Kuponna koda je izpuščena.' },
        { status: 400 }
      );
    }

    // Check if service is applicable
    if (service && !coupon.applicable_services.includes(service)) {
      return NextResponse.json(
        { valid: false, error: 'Ta koda ni veljavna za izbrano storitev.' },
        { status: 400 }
      );
    }

    // Return valid coupon details
    return NextResponse.json({
      valid: true,
      code: coupon.code,
      discount_type: coupon.discount_type,
      discount_value: coupon.discount_value,
      description: coupon.description,
      campaign_id: coupon.campaign_id,
      remaining_uses: coupon.usage_limit - coupon.used_count
    });

  } catch (error) {
    console.error('Coupon validation error:', error);
    return NextResponse.json(
      { error: 'Prišlo je do napake ob preverjanju kode.' },
      { status: 500 }
    );
  }
}

// Apply coupon (increment usage count)
export async function PATCH(request: NextRequest) {
  try {
    const body = await request.json();
    const { code } = body;

    if (!code) {
      return NextResponse.json(
        { error: 'Koda je obvezna.' },
        { status: 400 }
      );
    }

    const couponIndex = coupons.findIndex(c => c.code.toLowerCase() === code.toLowerCase());

    if (couponIndex === -1) {
      return NextResponse.json(
        { error: 'Kuponna koda ne velja.' },
        { status: 400 }
      );
    }

    const coupon = coupons[couponIndex];

    if (coupon.used_count >= coupon.usage_limit) {
      return NextResponse.json(
        { error: 'Kuponna koda je izpuščena.' },
        { status: 400 }
      );
    }

    // Increment usage count
    coupons[couponIndex] = {
      ...coupon,
      used_count: coupon.used_count + 1
    };

    return NextResponse.json({
      success: true,
      message: 'Koda je bila uspešno uporabljena.'
    });

  } catch (error) {
    console.error('Coupon application error:', error);
    return NextResponse.json(
      { error: 'Prišlo je do napake pri uporabi kode.' },
      { status: 500 }
    );
  }
}

// Get all coupons (admin use only - protected)
export async function GET(request: NextRequest) {
  const authHeader = request.headers.get('authorization');

  // In production, verify admin token
  if (process.env.ADMIN_TOKEN && authHeader !== `Bearer ${process.env.ADMIN_TOKEN}`) {
    return NextResponse.json(
      { error: 'Dostop zavrnjen.' },
      { status: 401 }
    );
  }

  return NextResponse.json({
    coupons: coupons.map(c => ({
      code: c.code,
      discount_value: c.discount_value,
      used_count: c.used_count,
      usage_limit: c.usage_limit,
      active: c.active
    }))
  });
}