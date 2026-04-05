import Link from 'next/link';
import { Container } from '../../components/Container';
import { CalendlyButton } from '../../components/CalendlyButton';
import { SectionHeading } from '../../components/SectionHeading';

const tiers = [
  {
    title: 'Website Launch',
    price: 'Starting at $250',
    items: [
      'Custom 3-page site (Home, Services, Contact)',
      'Mobile-first, fast, modern design',
      'Built to convert visitors into inquiries'
    ]
  },
  {
    title: 'Website + Automation',
    price: 'Starting at $350',
    popular: 'Most Popular',
    items: [
      'Everything in Website Launch',
      'Lead capture system',
      'Instant SMS + email response',
      'Automated follow-up sequences',
      'Simple lead tracking (Google Sheets or CRM)'
    ]
  },
  {
    title: 'Automation Setup',
    price: 'Starting at $250',
    items: [
      'Automation setup for an existing site',
      'Lead capture system',
      'Instant SMS + email response',
      'Automated follow-up sequences',
      'Simple lead tracking (Google Sheets or CRM)'
    ]
  },
  {
    title: 'Growth Retainer',
    price: '$250/mo',
    items: [
      'Ongoing conversion improvements',
      'Landing page tweaks and testing',
      'Lead handling optimization',
      'Light reporting / insights'
    ]
  }
];

export default function ServicesPage() {
  return (
    <div className="py-16">
      <Container>
        <SectionHeading
          eyebrow="Services"
          title="A simple system that moves leads to booked appointments."
          description="Pick a fast launch option, then add automation to stop leads from slipping through the cracks."
        />
        <p className="mt-4 text-sm text-black/70">Pricing varies depending on your needs. These are typical starting points.</p>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {tiers.map((tier) => (
            <div key={tier.title} className="glass rounded-3xl p-6 shadow-soft">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-moss">{tier.title}</p>
              <p className="mt-4 text-3xl font-semibold text-ink">{tier.price}</p>
              <ul className="mt-5 grid gap-3 text-sm text-black/70">
                {tier.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              {tier.popular ? (
                <span className="mt-5 inline-flex w-fit rounded-full border border-moss/30 bg-moss/10 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-moss">
                  {tier.popular}
                </span>
              ) : null}
            </div>
          ))}
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-center">
          <div className="glass rounded-3xl p-8 shadow-soft">
            <h3 className="text-2xl font-semibold text-ink">What is included</h3>
            <ul className="mt-4 grid gap-3 text-sm text-black/70">
              <li>Discovery + offer positioning call</li>
              <li>Brand-aligned design + copy for your offers</li>
              <li>Lead capture + automated follow-up (if selected)</li>
              <li>Launch support + team handoff</li>
            </ul>
          </div>
          <div className="rounded-3xl border border-black/10 bg-white/80 p-8 shadow-ring">
            <h3 className="text-2xl font-semibold text-ink">Not included</h3>
            <ul className="mt-4 grid gap-3 text-sm text-black/70">
              <li>Paid ads management</li>
              <li>Complex custom integrations</li>
              <li>Long-form content production</li>
              <li>Legal or medical compliance review</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap items-center gap-4">
          <CalendlyButton
            label="Book a Call"
            className="rounded-full bg-moss px-5 py-2 text-sm font-semibold text-white border border-moss/30 shadow-ring shadow-[0_0_0_1px_rgba(255,255,255,0.45)] transition hover:-translate-y-0.5 hover:bg-moss/90 hover:border-moss/60"
          />
          <Link href="/demo" className="text-sm font-semibold text-moss underline underline-offset-4">
            View the demo system
          </Link>
        </div>
      </Container>
    </div>
  );
}

