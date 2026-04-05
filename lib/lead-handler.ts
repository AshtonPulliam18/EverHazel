export type LeadPayload = {
  name: string;
  phone?: string;
  email: string;
  message: string;
  interest?: string;
  source?: string;
};

function requireField(value: string | null, label: string) {
  if (!value || value.trim().length === 0) {
    throw new Error(`Missing ${label}`);
  }
  return value.trim();
}

export function parseLeadFromForm(formData: FormData): LeadPayload {
  const phone = (formData.get('phone')?.toString() ?? '').trim();
  return {
    name: requireField(formData.get('name')?.toString() ?? '', 'name'),
    phone: phone.length ? phone : undefined,
    email: requireField(formData.get('email')?.toString() ?? '', 'email'),
    message: requireField(formData.get('message')?.toString() ?? '', 'message'),
    interest: (formData.get('interest')?.toString() ?? '').trim() || undefined,
    source: formData.get('source')?.toString() ?? 'website'
  };
}

export async function handleLead(lead: LeadPayload) {
  const sendTasks: Promise<void>[] = [];
  const backgroundTasks: Promise<unknown>[] = [];

  const sendResendEmail = async (payload: {
    from: string;
    to: string[];
    subject: string;
    html: string;
  }) => {
    console.log('[Resend] Sending:', payload.subject, 'to', payload.to.join(', '));
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      let details = response.statusText;
      try {
        const data = await response.json();
        if (data?.message) details = data.message;
        else if (data?.error) details = data.error;
        else details = JSON.stringify(data);
      } catch {
        try {
          const text = await response.text();
          if (text) details = text;
        } catch {
          // ignore
        }
      }
      throw new Error(`Resend error (${response.status}): ${details}`);
    }

    try {
      const data = await response.json();
      console.log('[Resend] Sent:', data?.id ?? 'ok');
    } catch {
      console.log('[Resend] Sent (no JSON response)');
    }
  };

  if (process.env.LEAD_SHEETS_WEBHOOK_URL) {
    backgroundTasks.push(
      fetch(process.env.LEAD_SHEETS_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(lead)
      }).catch(() => undefined)
    );
  }

  if (process.env.RESEND_API_KEY && process.env.RESEND_TO_EMAIL) {
    const fromEmail = process.env.RESEND_FROM_EMAIL || 'EverHazel <hello@everhazel.com>';
    const phoneLine = lead.phone ? lead.phone : 'Not provided';

    sendTasks.push(
      sendResendEmail({
        from: fromEmail,
        to: [process.env.RESEND_TO_EMAIL],
        subject: `New lead from ${lead.name}`,
        html: `
          <div style="font-family: Arial, sans-serif; line-height: 1.5;">
            <h2>New EverHazel Lead</h2>
            <p><strong>Name:</strong> ${lead.name}</p>
            <p><strong>Email:</strong> ${lead.email}</p>
            <p><strong>Phone:</strong> ${phoneLine}</p>
            <p><strong>Message:</strong> ${lead.message}</p>
            <p><strong>Source:</strong> ${lead.source ?? 'website'}</p>
          </div>
        `
      })
    );

    sendTasks.push(
      sendResendEmail({
        from: fromEmail,
        to: [lead.email],
        subject: 'We received your request',
        html: `
          <div style="background:#f6f4f1;padding:32px 12px;">
            <div style="max-width:520px;margin:0 auto;background:#ffffff;border:1px solid #e7e2dc;border-radius:20px;padding:28px 28px 24px;font-family:Arial,sans-serif;color:#1a1a1a;">
              <div style="text-align:center;">
                <img src="https://everhazel.com/eh-logo-crop.png" alt="EverHazel" width="56" height="56" style="display:block;margin:0 auto 16px;" />
                <h2 style="margin:0 0 8px;font-size:20px;">We received your message</h2>
                <p style="margin:0;color:#4b4b4b;font-size:14px;">Thanks for reaching out, ${lead.name}. We will reply shortly.</p>
              </div>
              <div style="margin-top:20px;padding:14px 16px;border-radius:14px;background:#f2f7f5;border:1px solid #d7e5df;">
                <p style="margin:0;color:#2f6f5e;font-weight:600;font-size:12px;letter-spacing:0.12em;text-transform:uppercase;">What happens next</p>
                <p style="margin:8px 0 0;color:#4b4b4b;font-size:14px;">We are reviewing your request and will email you with next steps.</p>
              </div>
              <p style="margin:20px 0 0;color:#7a7a7a;font-size:12px;text-align:center;">EverHazel</p>
            </div>
          </div>
        `
      })
    );
  }

  if (process.env.FOLLOWUP_WEBHOOK_URL) {
    backgroundTasks.push(
      fetch(process.env.FOLLOWUP_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(lead)
      }).catch(() => undefined)
    );
  }

  if (sendTasks.length === 0 && backgroundTasks.length === 0) {
    return { ok: true, mocked: true };
  }

  await Promise.all(sendTasks);
  await Promise.allSettled(backgroundTasks);
  return { ok: true };
}
