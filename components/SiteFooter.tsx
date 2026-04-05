import Link from 'next/link';
import { Container } from './Container';

export function SiteFooter() {
  return (
    <footer className="border-t border-black/5 py-10">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 text-sm text-black/70 md:flex-row">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-moss">EverHazel</p>
            <p className="mt-2 max-w-md">
              High-converting websites + automated follow-up for med spas that want more bookings.
            </p>
          </div>
          <div className="flex flex-col items-start gap-3 md:items-end">
            <div className="flex flex-wrap gap-6">
              <Link href="/services" className="hover:text-moss">Services</Link>
              <Link href="/demo" className="hover:text-moss">Demo</Link>
              <Link href="/contact" className="hover:text-moss">Contact</Link>
              <Link href="/privacy" className="hover:text-moss">Privacy</Link>
              <Link href="/terms" className="hover:text-moss">Terms</Link>
            </div>
            <p className="text-xs text-black/50">
              &copy; {new Date().getFullYear()} EverHazel LLC. All rights reserved.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
