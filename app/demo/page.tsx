import { Container } from '../../components/Container';
import { SectionHeading } from '../../components/SectionHeading';
import { LeadForm } from '../../components/LeadForm';

export default function DemoPage() {
  return (
    <div className="py-16">
      <Container>
        <SectionHeading
          eyebrow="Demo"
          title="See the med spa lead capture flow in action."
          description="This page simulates the flow your med spa clients will experience: a clean landing page, a quick form, and instant SMS/email follow-up."
        />

        <div className="mt-10 rounded-3xl border border-moss/20 bg-moss/10 p-6 shadow-ring">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <div className="glass rounded-3xl p-8 shadow-soft">
              <h3 className="text-2xl font-semibold text-ink">EverHazel Aesthetics</h3>
              <p className="mt-3 text-sm text-black/70">
                We help you feel confident in your skin with advanced injectables, laser treatments, and custom
                skincare plans.
              </p>
              <div className="mt-6 grid gap-4 rounded-2xl border border-black/10 bg-white/80 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-moss">Limited offer</p>
                <p className="text-lg font-semibold text-ink">New client glow-up consultation - $75</p>
                <p className="text-sm text-black/70">Includes skin analysis + personalized treatment plan.</p>
              </div>
              <div className="mt-6 grid gap-4 text-sm text-black/70">
                <div className="flex items-center justify-between rounded-2xl border border-black/10 bg-white/80 p-4">
                  <span>Injectables</span>
                  <span className="text-xs font-semibold text-moss">Most booked</span>
                </div>
                <div className="flex items-center justify-between rounded-2xl border border-black/10 bg-white/80 p-4">
                  <span>Laser treatments</span>
                  <span className="text-xs font-semibold text-moss">Fast results</span>
                </div>
                <div className="flex items-center justify-between rounded-2xl border border-black/10 bg-white/80 p-4">
                  <span>Skin rejuvenation</span>
                  <span className="text-xs font-semibold text-moss">Signature</span>
                </div>
              </div>
            </div>

            <div className="glass rounded-3xl p-6 shadow-soft">
              <h4 className="text-xl font-semibold text-ink">Request availability</h4>
              <p className="mt-2 text-sm text-black/70">
                Get a text within 15 minutes with appointment times.
              </p>
              <div className="mt-5">
                <LeadForm source="demo" disabled />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
