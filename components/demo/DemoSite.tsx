'use client';

import { useMemo, useState } from 'react';
import { LeadForm } from '../LeadForm';

type DemoPage = 'home' | 'services' | 'consultation';

type NavItem = {
  id: DemoPage;
  label: string;
};

const navItems: NavItem[] = [
  { id: 'home', label: 'Home' },
  { id: 'services', label: 'Services' },
  { id: 'consultation', label: 'Consultation' }
];

const featureServices = [
  {
    title: 'Precision Injectables',
    description: 'Subtle, balanced enhancements using evidence-based techniques and conservative dosing.'
  },
  {
    title: 'Skin Renewal',
    description: 'Corrective facials, peels, and medical-grade skincare tailored to your biology.'
  },
  {
    title: 'Laser + Light',
    description: 'Target tone, texture, and pigment with modern devices and minimal downtime.'
  },
  {
    title: 'Body Sculpt',
    description: 'Non-invasive contouring and tightening to support confidence and definition.'
  }
];

const trustPoints = [
  {
    title: 'Medical oversight',
    description: 'All treatments are led by licensed providers with advanced aesthetic training.'
  },
  {
    title: 'Transparent plans',
    description: 'You receive a personalized roadmap, clear pricing, and realistic timelines.'
  },
  {
    title: 'Results-first',
    description: 'We focus on natural outcomes that still look like you, only refreshed.'
  }
];

const testimonials = [
  {
    quote: 'The consultation was calm, thorough, and made me feel completely confident in the plan.',
    name: 'Maya L.',
    note: 'Hydrafacial + Skin Brightening'
  },
  {
    quote: 'My results looked natural within days. The follow-up was just as thoughtful as the treatment.',
    name: 'Kari S.',
    note: 'Toxin + Lip Balance'
  },
  {
    quote: 'They focused on what would age well over time, not just quick fixes.',
    name: 'Olivia N.',
    note: 'Laser + Texture Refinement'
  }
];

const results = [
  {
    label: 'Texture smoothing',
    detail: 'Visible refinement in 21-30 days'
  },
  {
    label: 'Balanced volume',
    detail: 'Natural-looking enhancement'
  },
  {
    label: 'Even tone',
    detail: 'Reduced redness + pigment'
  }
];

const serviceCategories = [
  {
    title: 'Injectables',
    items: [
      'Neuromodulators (Toxin)',
      'Lip balance + definition',
      'Cheek + midface support',
      'Jawline refinement'
    ]
  },
  {
    title: 'Skin Treatments',
    items: [
      'Signature facial therapy',
      'Brightening + pigment correction',
      'Clinical peels + resurfacing',
      'Collagen induction therapy'
    ]
  },
  {
    title: 'Laser + Light',
    items: [
      'Tone + texture resurfacing',
      'Redness + vascular therapy',
      'Targeted pigment removal',
      'Laser rejuvenation'
    ]
  },
  {
    title: 'Body',
    items: [
      'Non-invasive sculpting',
      'Skin tightening',
      'Targeted contouring',
      'Post-treatment care'
    ]
  }
];

export function DemoSite() {
  const [page, setPage] = useState<DemoPage>('home');

  const pageTitle = useMemo(() => {
    if (page === 'services') return 'Services';
    if (page === 'consultation') return 'Consultation';
    return 'Home';
  }, [page]);

  return (
    <div className="rounded-[32px] border border-moss/20 bg-white/70 shadow-soft">
      <div className="flex items-center justify-between border-b border-moss/10 px-6 py-4">
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-moss/30" />
          <span className="h-3 w-3 rounded-full bg-moss/15" />
          <span className="h-3 w-3 rounded-full bg-moss/10" />
          <p className="ml-3 text-xs font-semibold uppercase tracking-[0.3em] text-moss">EverHazel Aesthetics</p>
        </div>
        <div className="hidden items-center gap-6 text-xs font-semibold uppercase tracking-[0.2em] text-black/60 sm:flex">
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setPage(item.id)}
              className={
                page === item.id
                  ? 'text-moss'
                  : 'transition hover:text-ink'
              }
            >
              {item.label}
            </button>
          ))}
        </div>
        <button
          type="button"
          onClick={() => setPage('consultation')}
          className="rounded-full border border-moss/30 bg-moss px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white shadow-ring transition hover:-translate-y-0.5 hover:bg-moss/90"
        >
          Book consult
        </button>
      </div>

      <div className="px-6 py-8 sm:px-10 sm:py-10">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-moss">{pageTitle}</p>
            <h2 className="mt-2 text-2xl font-semibold text-ink sm:text-3xl">EverHazel Aesthetics</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setPage(item.id)}
                className={
                  page === item.id
                    ? 'rounded-full border border-moss/30 bg-moss/10 px-3 py-1 text-xs font-semibold text-moss'
                    : 'rounded-full border border-black/10 bg-white/80 px-3 py-1 text-xs font-semibold text-black/60 hover:text-ink'
                }
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        {page === 'home' ? (
          <div className="mt-10 grid gap-10">
            <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-moss">Botanical modern med spa</p>
                <h3 className="mt-4 text-3xl font-semibold text-ink sm:text-4xl">
                  Radiant, natural results with a calm, clinical approach.
                </h3>
                <p className="mt-4 text-sm text-black/70">
                  EverHazel Aesthetics blends advanced skin science with restorative care, delivering
                  subtle enhancements that still look like you. Every plan starts with a thoughtful consultation.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <button
                    type="button"
                    onClick={() => setPage('consultation')}
                    className="rounded-full border border-moss/30 bg-moss px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white shadow-ring transition hover:-translate-y-0.5 hover:bg-moss/90"
                  >
                    Book a consult
                  </button>
                  <button
                    type="button"
                    onClick={() => setPage('services')}
                    className="rounded-full border border-moss/30 bg-white/80 px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-moss shadow-ring transition hover:-translate-y-0.5"
                  >
                    View services
                  </button>
                </div>
              </div>
              <div className="rounded-3xl border border-moss/15 bg-moss/10 p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-moss">Signature consult</p>
                <p className="mt-3 text-xl font-semibold text-ink">Glow-up assessment</p>
                <p className="mt-2 text-sm text-black/70">
                  Skin analysis, goal mapping, and a personalized plan to guide your treatment sequence.
                </p>
                <div className="mt-5 rounded-2xl border border-moss/20 bg-white/90 p-4 text-sm text-black/70">
                  <p className="font-semibold text-ink">Includes</p>
                  <ul className="mt-2 grid gap-2">
                    <li>Full skin + symmetry assessment</li>
                    <li>Provider-led recommendations</li>
                    <li>Custom home care outline</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {featureServices.map((service) => (
                <div key={service.title} className="rounded-2xl border border-black/10 bg-white/80 p-5 shadow-ring">
                  <p className="text-sm font-semibold text-ink">{service.title}</p>
                  <p className="mt-2 text-xs text-black/70">{service.description}</p>
                </div>
              ))}
            </div>

            <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="rounded-3xl border border-moss/15 bg-white/90 p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-moss">Why clients trust us</p>
                <div className="mt-4 grid gap-4">
                  {trustPoints.map((point) => (
                    <div key={point.title} className="rounded-2xl border border-black/10 bg-white/80 p-4">
                      <p className="text-sm font-semibold text-ink">{point.title}</p>
                      <p className="mt-2 text-xs text-black/70">{point.description}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-3xl border border-moss/15 bg-moss/10 p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-moss">Results focus</p>
                <div className="mt-4 grid gap-4">
                  {results.map((item) => (
                    <div key={item.label} className="rounded-2xl border border-moss/20 bg-white/90 p-4">
                      <p className="text-sm font-semibold text-ink">{item.label}</p>
                      <p className="mt-2 text-xs text-black/70">{item.detail}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-moss/15 bg-white/90 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-moss">Client notes</p>
              <div className="mt-4 grid gap-4 lg:grid-cols-3">
                {testimonials.map((item) => (
                  <div key={item.name} className="rounded-2xl border border-black/10 bg-white/80 p-4">
                    <p className="text-sm text-black/80">“{item.quote}”</p>
                    <p className="mt-3 text-xs font-semibold text-ink">{item.name}</p>
                    <p className="text-[11px] text-black/50">{item.note}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : null}

        {page === 'services' ? (
          <div className="mt-10 grid gap-8">
            <div className="rounded-3xl border border-moss/15 bg-moss/10 p-6">
              <h3 className="text-2xl font-semibold text-ink">Curated services for lasting confidence</h3>
              <p className="mt-3 text-sm text-black/70">
                Every treatment plan is customized after a provider-led consultation. Explore the core categories
                below, then let us tailor the sequence for your goals.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {serviceCategories.map((category) => (
                <div key={category.title} className="rounded-3xl border border-black/10 bg-white/80 p-6 shadow-ring">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-moss">{category.title}</p>
                  <ul className="mt-4 grid gap-2 text-sm text-black/70">
                    {category.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="rounded-3xl border border-moss/15 bg-white/90 p-6">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold text-ink">Not sure where to start?</p>
                  <p className="mt-2 text-xs text-black/70">
                    We will map a realistic, phased plan that balances results with downtime.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setPage('consultation')}
                  className="rounded-full border border-moss/30 bg-moss px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white shadow-ring transition hover:-translate-y-0.5 hover:bg-moss/90"
                >
                  Book a consult
                </button>
              </div>
            </div>
          </div>
        ) : null}

        {page === 'consultation' ? (
          <div className="mt-10 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-3xl border border-moss/15 bg-white/90 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-moss">Consultation</p>
              <h3 className="mt-3 text-2xl font-semibold text-ink">A calm, guided start to your treatment plan.</h3>
              <p className="mt-3 text-sm text-black/70">
                We take time to understand your goals, analyze your skin, and recommend the most effective sequence.
                No pressure, just clarity.
              </p>
              <div className="mt-5 grid gap-4">
                <div className="rounded-2xl border border-black/10 bg-white/80 p-4">
                  <p className="text-sm font-semibold text-ink">What you will receive</p>
                  <ul className="mt-2 grid gap-2 text-xs text-black/70">
                    <li>Personalized treatment roadmap</li>
                    <li>Timing + pricing transparency</li>
                    <li>Home care guidance</li>
                  </ul>
                </div>
                <div className="rounded-2xl border border-moss/20 bg-moss/10 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-moss">Contact</p>
                  <p className="mt-2 text-sm text-black/70">hello@everhazelaesthetics.com</p>
                  <p className="text-sm text-black/70">(512) 555-0198</p>
                  <p className="text-sm text-black/70">Austin, TX</p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-moss/15 bg-moss/10 p-6">
              <p className="text-sm font-semibold text-ink">Request a consultation</p>
              <p className="mt-2 text-xs text-black/70">
                Secure your consultation and receive a reply within one business day.
              </p>
              <div className="mt-5">
                <LeadForm source="demo" disabled />
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
