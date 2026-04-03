import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        ink: '#0E1116',
        haze: '#F5F2EE',
        ember: '#FF6B35',
        moss: '#1F7A5B',
        dusk: '#2B2D42'
      },
      boxShadow: {
        soft: '0 12px 30px -18px rgba(16, 24, 40, 0.35)',
        ring: '0 0 0 1px rgba(16, 24, 40, 0.08)'
      }
    }
  },
  plugins: []
};

export default config;

