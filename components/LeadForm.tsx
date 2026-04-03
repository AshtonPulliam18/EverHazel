'use client';

import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { useFormState } from 'react-dom';
import { submitLead } from '../lib/lead-actions';
import type { LeadActionState } from '../lib/lead-actions';
import { SubmitButton } from './SubmitButton';

function formatPhone(value: string) {
  const digits = value.replace(/\D/g, '').slice(0, 10);
  if (digits.length <= 3) return digits;
  if (digits.length <= 6) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
}

const initialState: LeadActionState = { ok: false, submittedAt: 0 };
const successText = 'Successful';

export function LeadForm({
  compact = false,
  source = 'website',
  label = 'Request availability',
  showInterest = true,
  showMessage = true,
  disabled = false
}: {
  compact?: boolean;
  source?: string;
  label?: string;
  showInterest?: boolean;
  showMessage?: boolean;
  disabled?: boolean;
}) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const lastSubmission = useRef(0);
  const formRef = useRef<HTMLFormElement | null>(null);
  const [state, formAction] = useFormState(submitLead, initialState);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (disabled) return;
    if (state.ok && state.submittedAt && state.submittedAt !== lastSubmission.current) {
      lastSubmission.current = state.submittedAt;
      setModalOpen(true);
      setName('');
      setEmail('');
      setPhone('');
      setMessage('');
      formRef.current?.reset();
    }
  }, [state, disabled]);

  useEffect(() => {
    if (!modalOpen) return;
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setModalOpen(false);
      }
    };
    window.addEventListener('keydown', handleKey);
    const timeoutId = window.setTimeout(() => setModalOpen(false), 8000);
    return () => {
      window.removeEventListener('keydown', handleKey);
      window.clearTimeout(timeoutId);
    };
  }, [modalOpen]);

  const modal = modalOpen ? (
    <div className="fixed inset-0 z-[100] grid place-items-center bg-black/40 px-4 backdrop-blur-sm">
      <button
        type="button"
        aria-label="Close confirmation"
        className="absolute inset-0 h-full w-full cursor-default"
        onClick={() => setModalOpen(false)}
      />
      <div className="pointer-events-none absolute inset-0 grid place-items-center">
        <span className="modal-wave" />
      </div>
      <div className="relative w-full max-w-md rounded-3xl bg-white/95 p-8 text-center shadow-soft modal-pop">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-moss/10 text-moss">
          <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
            <path
              fill="currentColor"
              d="M9.2 16.2 4.8 11.8 6.2 10.4 9.2 13.4 17.8 4.8 19.2 6.2z"
            />
          </svg>
        </div>
        <div className="mt-4 text-xl font-semibold text-ink">
          <span className="success-title" aria-label={successText}>
            {successText.split('').map((letter, index) => (
              <span
                key={`${letter}-${index}`}
                className="success-letter"
                style={{ animationDelay: `${index * 60}ms` }}
              >
                {letter}
              </span>
            ))}
          </span>
        </div>
        <p className="mt-3 text-sm text-black/70">
          We will reach out shortly to confirm your availability and next steps.
        </p>
        <p className="mt-3 text-xs text-black/60">This modal will close automatically.</p>
        <button
          type="button"
          onClick={() => setModalOpen(false)}
          className="mt-6 inline-flex rounded-full border border-moss/30 bg-moss px-4 py-2 text-sm font-semibold text-white shadow-ring transition hover:-translate-y-0.5 hover:bg-moss/90 hover:border-moss/60"
        >
          Close
        </button>
      </div>
    </div>
  ) : null;

  const formClasses = disabled ? 'grid gap-4 pointer-events-none opacity-80' : 'grid gap-4';

  return (
    <>
      <form
        ref={formRef}
        action={disabled ? undefined : formAction}
        onSubmit={disabled ? (event) => event.preventDefault() : undefined}
        className={formClasses}
      >
        <input type="hidden" name="source" value={source} />
        <div className={compact ? 'grid gap-4 md:grid-cols-2' : 'grid gap-4'}>
          <input
            name="name"
            required
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Full name"
            className="w-full rounded-2xl border border-black/10 bg-white/80 px-4 py-3 text-sm shadow-ring"
          />
          <input
            type="tel"
            name="phone"
            inputMode="tel"
            autoComplete="tel"
            maxLength={14}
            value={phone}
            onChange={(event) => setPhone(formatPhone(event.target.value))}
            placeholder="Mobile phone (optional)"
            className="w-full rounded-2xl border border-black/10 bg-white/80 px-4 py-3 text-sm shadow-ring"
          />
          <input
            type="email"
            name="email"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Email address"
            className="w-full rounded-2xl border border-black/10 bg-white/80 px-4 py-3 text-sm shadow-ring"
          />
          {showInterest ? (
            <select
              name="interest"
              required
              className="w-full rounded-2xl border border-black/10 bg-white/80 px-4 py-3 text-sm shadow-ring"
              defaultValue=""
            >
              <option value="" disabled>
                Service interest
              </option>
              <option>Injectables</option>
              <option>Laser treatments</option>
              <option>Facials + skincare</option>
              <option>Body contouring</option>
              <option>Other</option>
            </select>
          ) : null}
          {showMessage ? (
            <textarea
              name="message"
              required
              rows={compact ? 3 : 4}
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              placeholder="How can we help?"
              className="w-full rounded-2xl border border-black/10 bg-white/80 px-4 py-3 text-sm shadow-ring md:col-span-2"
            />
          ) : null}
        </div>
        {state.error ? <p className="text-xs text-ember">{state.error}</p> : null}
        <div className="grid gap-2">
          <SubmitButton label={label} disabled={disabled} />
        </div>
        <p className="text-xs text-black/60">
          By submitting, you agree to receive email follow-ups. Reply STOP to opt out.
        </p>
      </form>

      {mounted && modalOpen ? createPortal(modal, document.body) : null}
    </>
  );
}