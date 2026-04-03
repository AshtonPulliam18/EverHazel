import type { Metadata } from 'next';
import { Space_Grotesk, Instrument_Serif } from 'next/font/google';
import './globals.css';
import { SiteHeader } from '../components/SiteHeader';
import { SiteFooter } from '../components/SiteFooter';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap'
});

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  variable: '--font-serif',
  weight: ['400'],
  display: 'swap'
});

export const metadata: Metadata = {
  title: 'EverHazel | Med Spa Lead Capture + Automation',
  description: 'High-converting websites and automated follow-up for med spas that want more bookings.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${instrumentSerif.variable}`}>
      <body className="font-[var(--font-sans)] text-ink">
        <div className="relative">
          <div className="pointer-events-none absolute inset-0 noise" />
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}

