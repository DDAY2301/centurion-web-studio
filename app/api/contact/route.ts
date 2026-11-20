import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'nodejs';

const MAX_BODY_BYTES = 8_192;

type ContactInput = {
  name: string;
  company?: string;
  email: string;
  phone?: string;
  service: string;
  message: string;
  couponCode?: string;
  consent: boolean;
};

function validText(value: unknown, max: number): value is string {
  return typeof value === 'string' && value.trim().length > 0 && value.length <= max;
}

function response(error: string, status: number) {
  return NextResponse.json({ success: false, error }, { status });
}

export async function POST(request: NextRequest) {
  const contentType = request.headers.get('content-type') ?? '';
  if (!contentType.includes('application/json')) {
    return response('Zahtevan je JSON.', 415);
  }

  let input: unknown;
  try {
    const raw = await request.text();
    if (Buffer.byteLength(raw, 'utf8') > MAX_BODY_BYTES) {
      return response('Sporočilo je predolgo.', 413);
    }
    input = JSON.parse(raw);
  } catch {
    return response('Neveljavni podatki.', 400);
  }

  if (!input || typeof input !== 'object' || Array.isArray(input)) {
    return response('Neveljavni podatki.', 400);
  }

  const data = input as Partial<ContactInput>;
  if (!validText(data.name, 120) ||
      !validText(data.email, 254) ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email) ||
      !validText(data.service, 100) ||
      !validText(data.message, 5_000) ||
      data.consent !== true ||
      (data.company != null && typeof data.company !== 'string') ||
      (data.phone != null && typeof data.phone !== 'string') ||
      (data.couponCode != null && typeof data.couponCode !== 'string')) {
    return response('Preverite obvezna polja in e-poštni naslov.', 400);
  }

  // Fail closed. The former implementation returned a false success and logged
  // contact details without delivering or persistently storing the enquiry.
  // Do not accept personal data until a real, tested delivery service and
  // durable rate limiter are configured and a privacy notice is approved.
  return response('Spletna oddaja povpraševanj trenutno ni na voljo. Prosimo, uporabite preverjen kontaktni kanal.', 503);
}

export async function GET() {
  return NextResponse.json({ status: 'available', delivery: 'not-configured' });
}
