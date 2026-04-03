import Link from 'next/link';
import { CalendlyButton } from '../components/CalendlyButton';
import { Container } from '../components/Container';
import { SectionHeading } from '../components/SectionHeading';

export default function HomePage() {
  return (
    <div>
      <section className="py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-moss">
                Med spa growth system
              </p>
              <h1 className="mt-4 text-4xl font-semibold leading-tight text-ink md:text-5xl">
                Turn med spa traffic into booked appointments within minutes.
              </h1>
              <p className="mt-5 text-lg text-black/70">
                EverHazel builds conversion-focused websites and automates follow-up via SMS + email so every lead
                gets a fast response.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <CalendlyButton
                  label="Book a Call"
                  className="rounded-full bg-moss px-6 py-3 text-sm font-semibold text-white border border-moss/30 shadow-ring shadow-[0_0_0_1px_rgba(255,255,255,0.45)] transition hover:-translate-y-0.5 hover:bg-moss/90 hover:border-moss/60"
                />
                <Link
                  href="/demo"
                  className="rounded-full border border-moss/30 bg-white/80 px-6 py-3 text-sm font-semibold text-moss shadow-ring transition hover:-translate-y-0.5 hover:border-moss/60"
                >
                  View Demo
                </Link>
              </div>
              <div className="mt-10">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-moss">How It Works</p>
                <div className="mt-4 grid gap-4 text-sm text-black/70 md:grid-cols-4">
                  <div className="glass rounded-2xl p-4">
                    <p className="text-sm font-semibold text-ink">Capture the lead</p>
                    <p className="mt-2">A potential client visits your site and submits a quick form.</p>
                  </div>
                  <div className="glass rounded-2xl p-4">
                    <p className="text-sm font-semibold text-ink">Instant response</p>
                    <p className="mt-2">They immediately receive a text and email confirming their request.</p>
                  </div>
                  <div className="glass rounded-2xl p-4">
                    <p className="text-sm font-semibold text-ink">Automated follow-up</p>
                    <p className="mt-2">If they do not respond, follow-ups are sent automatically so no lead goes cold.</p>
                  </div>
                  <div className="glass rounded-2xl p-4">
                    <p className="text-sm font-semibold text-ink">More booked appointments</p>
                    <p className="mt-2">More conversations turn into consultations and paying clients.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="glass rounded-3xl p-8 shadow-soft">
              <div className="flex flex-col gap-6">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-moss">What you get</p>
                  <h3 className="mt-3 text-2xl font-semibold text-ink">
                    A booking engine that runs even when you are busy.
                  </h3>
                </div>
                <ul className="grid gap-4 text-sm text-black/70">
                  <li>Conversion-first landing page + service pages</li>
                  <li>Lead capture with SMS + email confirmations</li>
                  <li>Follow-up sequences that nudge prospects to book</li>
                  <li>Weekly performance snapshot and optimization</li>
                </ul>
                <Link
                  href="/services"
                  className="text-sm font-semibold text-moss underline underline-offset-4"
                >
                  See full service breakdown
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <SectionHeading
            eyebrow="Why EverHazel"
            title="More leads. Faster response. Higher conversion."
            description="Med spas win when every inquiry gets an immediate, consistent reply. We combine high-converting websites with automated follow-up so your team focuses on treatments, not chasing leads."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                title: 'High-converting design',
                body: 'Modern layouts built for mobile first, clear service pathways, and rapid load times.'
              },
              {
                title: 'Instant follow-up',
                body: 'SMS + email confirmations go out within minutes, with smart reminders later.'
              },
              {
                title: 'Owner visibility',
                body: 'Every lead stored in a simple dashboard or Google Sheet with status tracking.'
              }
            ].map((item) => (
              <div key={item.title} className="glass rounded-3xl p-6 shadow-soft">
                <h3 className="text-lg font-semibold text-ink">{item.title}</h3>
                <p className="mt-3 text-sm text-black/70">{item.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <div className="glass rounded-3xl p-10 shadow-soft">
            <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-moss">Results</p>
                <h3 className="mt-3 text-3xl font-semibold text-ink">
                  The fastest way for a med spa to look premium and respond instantly.
                </h3>
                <p className="mt-4 text-sm text-black/70">
                  We build a launch-ready website, connect it to automated follow-up, and help you start booking in
                  days. You get the system plus a playbook your team can run.
                </p>
              </div>
              <div className="rounded-2xl border border-black/10 bg-white/80 p-6">
                <p className="text-sm font-semibold text-moss">Next steps</p>
                <ul className="mt-4 grid gap-3 text-sm text-black/70">
                  <li>1. Book a 20-min discovery call</li>
                  <li>2. We map your services + offers</li>
                  <li>3. Launch your site + follow-up flow</li>
                </ul>
                <Link
                  href="/contact"
                  className="mt-6 inline-flex rounded-full bg-moss px-5 py-2 text-xs font-semibold text-white border border-moss/30 shadow-ring shadow-[0_0_0_1px_rgba(255,255,255,0.45)] transition hover:-translate-y-0.5 hover:bg-moss/90 hover:border-moss/60"
                >
                  Start now
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}

