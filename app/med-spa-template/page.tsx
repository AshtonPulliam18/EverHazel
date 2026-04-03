import { Container } from '../../components/Container';
import { LeadForm } from '../../components/LeadForm';
import { SectionHeading } from '../../components/SectionHeading';

const services = [
  { title: 'Botox + Dysport', desc: 'Smooth fine lines with natural-looking results.' },
  { title: 'Dermal Fillers', desc: 'Restore volume and sculpt facial contours.' },
  { title: 'Laser Resurfacing', desc: 'Improve texture, tone, and sun damage.' },
  { title: 'Hydrafacial', desc: 'Hydration-focused glow in 30 minutes.' }
];

const testimonials = [
  {
    name: 'Sophia L.',
    quote: 'The team made me feel comfortable and the results were subtle but amazing.'
  },
  {
    name: 'Avery M.',
    quote: 'Booking was easy and they followed up quickly with times that worked for me.'
  },
  {
    name: 'Jenna R.',
    quote: 'My skin has never looked better. I loved the consultation and treatment plan.'
  }
];

export default function MedSpaTemplatePage() {
  return (
    <div>
      <section className="py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-moss">Lumen Skin Studio</p>
              <h1 className="mt-4 text-4xl font-semibold leading-tight text-ink md:text-5xl">
                Elevated aesthetics with personalized care.
              </h1>
              <p className="mt-4 text-lg text-black/70">
                Expert injectables, lasers, and skincare in a calming studio. Book your consultation and get a plan
                tailored to your goals.
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                <button className="rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white shadow-soft">
                  Book a Consultation
                </button>
                <button className="rounded-full border border-black/10 bg-white/80 px-6 py-3 text-sm font-semibold text-ink shadow-ring">
                  View Services
                </button>
              </div>
            </div>
            <div className="glass rounded-3xl p-6 shadow-soft">
              <LeadForm compact source="template-hero" />
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <SectionHeading
            eyebrow="Services"
            title="Signature treatments designed for real results."
            description="Choose your service, then meet with our experts for a customized plan."
          />
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {services.map((service) => (
              <div key={service.title} className="glass rounded-3xl p-6 shadow-soft">
                <h3 className="text-xl font-semibold text-ink">{service.title}</h3>
                <p className="mt-2 text-sm text-black/70">{service.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <SectionHeading
            eyebrow="Reviews"
            title="Clients who feel confident and cared for."
          />
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div key={testimonial.name} className="glass rounded-3xl p-6 shadow-soft">
                <p className="text-sm text-black/70">"{testimonial.quote}"</p>
                <p className="mt-4 text-sm font-semibold text-ink">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <div className="grid gap-8 rounded-3xl border border-black/10 bg-white/80 p-10 shadow-ring lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-moss">Book now</p>
              <h3 className="mt-3 text-3xl font-semibold text-ink">
                Ready for your glow-up consultation?
              </h3>
              <p className="mt-4 text-sm text-black/70">
                Share your details and we will text you available appointment times.
              </p>
            </div>
            <LeadForm source="template-footer" />
          </div>
        </Container>
      </section>
    </div>
  );
}

