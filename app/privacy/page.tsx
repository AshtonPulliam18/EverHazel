import type { Metadata } from 'next';
import { Container } from '../../components/Container';
import { SectionHeading } from '../../components/SectionHeading';

export const metadata: Metadata = {
  title: 'Privacy Policy | EverHazel',
  description: 'Privacy policy for EverHazel websites, automation, and messaging services.'
};

const sections = [
  { id: 'information-we-collect', label: 'Information We Collect' },
  { id: 'how-we-use-information', label: 'How We Use Information' },
  { id: 'sms-communications', label: 'SMS Communications' },
  { id: 'sharing', label: 'Sharing & Service Providers' },
  { id: 'cookies', label: 'Cookies & Analytics' },
  { id: 'your-choices', label: 'Your Choices' },
  { id: 'contact', label: 'Contact' }
];

export default function PrivacyPage() {
  return (
    <div className="py-16">
      <Container>
        <SectionHeading
          eyebrow="Privacy"
          title="Privacy Policy"
          description="We respect your privacy and keep things simple, transparent, and secure."
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
          <section id="information-we-collect" className="grid gap-3">
            <h2 className="text-lg font-semibold text-ink">Information We Collect</h2>
            <p>
              We collect information you submit to us, including your name, phone number, email address, and any
              appointment or request details you provide. We may also collect basic usage data when you browse the
              site, such as pages viewed and device or browser information.
            </p>
          </section>

          <section id="how-we-use-information" className="grid gap-3">
            <h2 className="text-lg font-semibold text-ink">How We Use Information</h2>
            <p>
              We use your information to schedule consultations, send reminders, follow up on inquiries, and provide
              support. We also use it to keep the site running smoothly and to improve the experience. Marketing
              messages are only sent when you explicitly opt in.
            </p>
          </section>

          <section id="sms-communications" className="grid gap-3">
            <h2 className="text-lg font-semibold text-ink">SMS Communications</h2>
            <ul className="grid gap-2">
              <li>SMS messages may include appointment confirmations, reminders, follow-ups, and support.</li>
              <li>Promotional texts are only sent with explicit opt-in.</li>
              <li>Message frequency may vary.</li>
              <li>Message and data rates may apply.</li>
              <li>Reply STOP to opt out, HELP for assistance.</li>
            </ul>
          </section>

          <section id="sharing" className="grid gap-3">
            <h2 className="text-lg font-semibold text-ink">Sharing &amp; Service Providers</h2>
            <p>
              We do not sell or share your personal information for third-party marketing. We may share information
              with trusted vendors who process data on our behalf to operate our services (such as email or messaging
              platforms), and only for that purpose.
            </p>
          </section>

          <section id="cookies" className="grid gap-3">
            <h2 className="text-lg font-semibold text-ink">Cookies &amp; Analytics</h2>
            <p>
              We use minimal cookies or analytics tools to understand how the site is used and to keep things running
              smoothly. You can adjust your browser settings to limit cookies if you prefer.
            </p>
          </section>

          <section id="your-choices" className="grid gap-3">
            <h2 className="text-lg font-semibold text-ink">Your Choices</h2>
            <p>
              You can opt out of marketing messages at any time. You may also contact us to update or correct your
              information.
            </p>
          </section>

          <section id="contact" className="grid gap-3">
            <h2 className="text-lg font-semibold text-ink">Contact</h2>
            <p>
              Questions about this policy? Email us at{' '}
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
