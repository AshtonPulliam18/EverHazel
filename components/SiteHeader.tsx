import Image from 'next/image';
import Link from 'next/link';
import { CalendlyButton } from './CalendlyButton';
import { Container } from './Container';

const nav = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/demo', label: 'Demo' },
  { href: '/contact', label: 'Contact' }
];

export function SiteHeader() {
  return (
    <header className="border-b border-black/5 bg-white/70 backdrop-blur">
      <Container>
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="flex items-center">
            <Image
              src="/eh-logo-crop.png"
              alt="EverHazel"
              width={121}
              height={125}
              className="h-10 w-auto md:h-12"
              priority
            />
            <span className="sr-only">EverHazel</span>
          </Link>
          <nav className="hidden items-center gap-6 text-sm font-medium text-black/70 md:flex">
            {nav.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-moss">
                {item.label}
              </Link>
            ))}
          </nav>
          <CalendlyButton
            label="Book a Call"
            className="rounded-full border border-moss/30 bg-moss px-5 py-2 text-sm font-semibold text-white shadow-ring transition hover:-translate-y-0.5 hover:border-moss/60 hover:bg-moss/90"
          />
        </div>
      </Container>
    </header>
  );
}

