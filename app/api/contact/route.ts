import { NextRequest, NextResponse } from 'next/server';

// Type definitions
interface ContactFormData {
  name: string;
  company?: string;
  email: string;
  phone?: string;
  service: string;
  message: string;
  couponCode?: string;
  consent: boolean;
}

interface Lead {
  lead_id: string;
  company_name: string;
  contact_name: string;
  contact_email: string;
  contact_phone?: string;
  requested_service: string;
  coupon_code?: string;
  enquiry_source: string;
  created_at: string;
  status: string;
  notes: string;
}

// Rate limiting
const ipCounts = new Map<string, number>();
const MAX_REQUESTS_PER_MINUTE = 5;

// Contact API endpoint
export async function POST(request: NextRequest) {
  try {
    // Rate limiting
    const ip = request.headers.get('x-forwarded-for') || 'unknown';
    const count = ipCounts.get(ip) || 0;

    if (count > MAX_REQUESTS_PER_MINUTE) {
      return NextResponse.json(
        { error: 'Preveč zahtevkov. Poskusite znova za nekaj minut.' },
        { status: 429 }
      );
    }
    ipCounts.set(ip, count + 1);

    // Parse request body
    const body = await request.json();
    const { name, company, email, phone, service, message, couponCode, consent } = body as ContactFormData;

    // Validation
    if (!name || !email || !service || !message || consent !== true) {
      return NextResponse.json(
        { error: 'Vsi obvezni podatki morajo biti izpolnjeni.' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Vnesti veljaven email naslov.' },
        { status: 400 }
      );
    }

    // Create lead record
    const lead: Lead = {
      lead_id: `lead_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      company_name: company || 'Neizpolnjeno',
      contact_name: name,
      contact_email: email,
      contact_phone: phone || undefined,
      requested_service: service,
      coupon_code: couponCode || undefined,
      enquiry_source: 'web_form',
      created_at: new Date().toISOString(),
      status: 'NEW',
      notes: message
    };

    // In production, this would:
    // 1. Save to database
    // 2. Send email notification
    // 3. Apply coupon validation
    // 4. Integrate with CRM

    // Simulate successful submission
    console.log('New lead submitted:', JSON.stringify(lead, null, 2));

    // Return success response
    return NextResponse.json(
      {
        success: true,
        message: 'Hvala! Vaša sporočila bom prejel/a.',
        lead_id: lead.lead_id
      },
      { status: 201 }
    );

  } catch (error) {
    console.error('Contact API error:', error);
    return NextResponse.json(
      { error: 'Prišlo je do napake ob obdelavi zahtevka.' },
      { status: 500 }
    );
  }
}

// Health check endpoint (for monitoring)
export async function GET() {
  return NextResponse.json({
    status: 'up',
    timestamp: new Date().toISOString()
  });
}

// Handle CORS preflight requests
export async function OPTIONS() {
  return NextResponse.json(
    null,
    {
      status: 204,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type'
      }
    }
  );
}