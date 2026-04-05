import { NextResponse } from 'next/server';
import { handleLead, type LeadPayload } from '../../../lib/lead-handler';

export async function POST(request: Request) {
  const body = (await request.json()) as LeadPayload;

  if (!body?.name || !body?.email || !body?.message) {
    return NextResponse.json({ ok: false, error: 'Missing required fields.' }, { status: 400 });
  }

  await handleLead({ ...body, source: body.source ?? 'api' });
  return NextResponse.json({ ok: true });
}
