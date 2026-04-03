import { Container } from '../../components/Container';
import { SectionHeading } from '../../components/SectionHeading';
import { LeadForm } from '../../components/LeadForm';

export default function ContactPage() {
  return (
    <div className="py-16">
      <Container>
        <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-start">
          <div>
            <SectionHeading
              eyebrow="Contact"
              title="Book a 20-minute call."
              description="We will review your current lead flow, identify quick wins, and map the fastest path to more booked treatments."
            />
            <div className="mt-8 rounded-3xl border border-black/10 bg-white/80 p-6 shadow-ring">
              <p className="text-sm font-semibold text-ink">What to expect</p>
              <ul className="mt-4 grid gap-3 text-sm text-black/70">
                <li>Quick audit of your existing website + follow-up</li>
                <li>Personalized recommendations for your offers</li>
                <li>A simple launch plan you can say yes to</li>
              </ul>
            </div>
          </div>
          <div className="glass rounded-3xl p-6 shadow-soft">
            <LeadForm compact source="agency-site" label="Email" showInterest={false} />
          </div>
        </div>
      </Container>
    </div>
  );
}

