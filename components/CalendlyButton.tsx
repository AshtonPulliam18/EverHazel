'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

const CALENDLY_URL = 'https://calendly.com/everhazel-consultation/20min';

export function CalendlyButton({ label, className }: { label: string; className: string }) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) return;
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [open]);

  const modal = open ? (
    <div className="fixed inset-0 z-[120] grid place-items-center bg-black/40 px-4 backdrop-blur-sm">
      <button
        type="button"
        aria-label="Close booking"
        className="absolute inset-0 h-full w-full cursor-default"
        onClick={() => setOpen(false)}
      />
      <div
        className="relative w-full max-w-3xl overflow-hidden rounded-3xl bg-white shadow-soft"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-black/10 px-4 py-3">
          <p className="text-sm font-semibold text-ink">Book a 20-minute call</p>
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="text-sm font-semibold text-moss"
          >
            Close
          </button>
        </div>
        <div className="h-[680px]">
          <iframe
            title="EverHazel booking"
            src={`${CALENDLY_URL}?hide_gdpr_banner=1&background_color=ffffff&text_color=0e1116&primary_color=1f7a5b`}
            className="h-full w-full"
          />
        </div>
      </div>
    </div>
  ) : null;

  return (
    <>
      <button type="button" className={className} onClick={() => setOpen(true)}>
        {label}
      </button>
      {mounted && open ? createPortal(modal, document.body) : null}
    </>
  );
}
