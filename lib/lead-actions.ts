'use server';

import { handleLead, parseLeadFromForm } from './lead-handler';

export type LeadActionState = {
  ok: boolean;
  submittedAt: number;
  error?: string;
};

export async function submitLead(_prevState: LeadActionState, formData: FormData): Promise<LeadActionState> {
  try {
    const lead = parseLeadFromForm(formData);
    await handleLead(lead);
    return { ok: true, submittedAt: Date.now() };
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unable to submit form.';
    return { ok: false, submittedAt: 0, error: message };
  }
}
