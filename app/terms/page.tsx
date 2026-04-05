import type { Metadata } from 'next';
import { Container } from '../../components/Container';
import { SectionHeading } from '../../components/SectionHeading';

export const metadata: Metadata = {
  title: 'Terms & Conditions | EverHazel',
  description: 'Terms and messaging conditions for EverHazel websites, automation, and SMS communications.'
};

const sections = [
  { id: 'overview', label: 'Overview' },
  { id: 'sms-terms', label: 'SMS Terms' },
  { id: 'consent', label: 'Consent' },
  { id: 'responsibilities', label: 'Your Responsibilities' },
  { id: 'changes', label: 'Changes' },
  { id: 'disclaimer', label: 'Disclaimer & Liability' },
  { id: 'contact', label: 'Contact' }
];

export default function TermsPage() {
  return (
    <div className="py-16">
      <Container>
        <SectionHeading
          eyebrow="Terms"
          title="Terms & Conditions"
          description="Clear, simple terms for using EverHazel and our messaging services."
        />
        <p className="mt-4 text-sm text-black/60">Effective date: April 5, 2026</p>

        <div className="mt-8 rounded-3xl border border-black/10 bg-white/80 p-6 shadow-ring">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-moss">Quick links</p>
          <div className="mt-4 flex flex-wrap gap-3 text-sm">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="rounded-full border border-black/10 bg-white px-3 py-1 text-black/70 hover:text-moss"
              >
                {section.label}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-8 text-sm text-black/70">
          <section id="overview" className="grid gap-3">
            <h2 className="text-lg font-semibold text-ink">Overview</h2>
            <p>
              By using the EverHazel website, forms, or services, you agree to these terms. EverHazel provides
              website, lead capture, and automation services for med spa practices and related businesses.
            </p>
          </section>

          <section id="sms-terms" className="grid gap-3">
            <h2 className="text-lg font-semibold text-ink">SMS Terms / Messaging Terms</h2>
            <p>We may send SMS messages related to your inquiry or consultation.</p>
            <ul className="grid gap-2">
              <li>Supported message types include appointment confirmations, reminders, scheduling updates, intake or follow-up messages, customer support, and promotions only where explicitly opted in.</li>
              <li>Message frequency may vary.</li>
              <li>Message and data rates may apply.</li>
              <li>Reply STOP to opt out, HELP for assistance.</li>
            </ul>
          </section>

          <section id="consent" className="grid gap-3">
            <h2 className="text-lg font-semibold text-ink">Consent</h2>
            <p>
              By submitting a form, booking a consultation, or providing a phone number, you consent to receive
              applicable SMS communications from EverHazel. Consent is not a condition of purchase.
            </p>
          </section>

          <section id="responsibilities" className="grid gap-3">
            <h2 className="text-lg font-semibold text-ink">Your Responsibilities</h2>
            <p>
              You agree to provide accurate information and keep your contact details up to date so we can reach you
              about your request.
            </p>
          </section>

          <section id="changes" className="grid gap-3">
            <h2 className="text-lg font-semibold text-ink">Changes</h2>
            <p>
              We may update our services or these terms from time to time. Changes will be posted on this page with a
              revised effective date.
            </p>
          </section>

          <section id="disclaimer" className="grid gap-3">
            <h2 className="text-lg font-semibold text-ink">Disclaimer &amp; Liability</h2>
            <p>
              We provide the site and services on an as-available basis. To the maximum extent permitted by law,
              EverHazel is not liable for indirect or incidental damages arising from use of the site or services.
            </p>
          </section>

          <section id="contact" className="grid gap-3">
            <h2 className="text-lg font-semibold text-ink">Contact</h2>
            <p>
              Questions about these terms? Email us at{' '}
              <a href="mailto:support@everhazel.com" className="font-semibold text-moss underline underline-offset-4">
                support@everhazel.com
              </a>.
            </p>
          </section>
        </div>
      </Container>
    </div>
  );
}
