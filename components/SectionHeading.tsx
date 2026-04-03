import type { ReactNode } from 'react';

export function SectionHeading({ eyebrow, title, description }: { eyebrow?: string; title: string; description?: string }) {
  return (
    <div className="max-w-2xl">
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-moss">{eyebrow}</p>
      ) : null}
      <h2 className="mt-3 text-3xl font-semibold leading-tight text-ink md:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-3 text-base text-black/70">{description}</p>
      ) : null}
    </div>
  );
}

