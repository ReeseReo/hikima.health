import type { Metadata } from 'next';
import { Sora, Plus_Jakarta_Sans, Space_Mono } from 'next/font/google';
import './globals.css';
import { NoiseOverlay } from '@/components/ui/NoiseOverlay';
import { ScrollProgress } from '@/components/ui/ScrollProgress';

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
});

const spaceMono = Space_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
  weight: ['400', '700'],
});

export const metadata: Metadata = {
  title: 'Hikima — Content Strategy for Health Practices',
  description:
    'Evidence-based, compliance-reviewed content for health & wellness practitioners. Blog posts, social captions, emails, and patient handouts — branded to your practice. Delivered every week.',
  metadataBase: new URL('https://hikima.health'),
  openGraph: {
    title: 'Hikima — Content Strategy for Health Practices',
    description:
      'Evidence-based, compliance-reviewed content for health & wellness practitioners. Delivered every week.',
    url: 'https://hikima.health',
    siteName: 'Hikima',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hikima — Content Strategy for Health Practices',
    description:
      'Evidence-based, compliance-reviewed content for health & wellness practitioners.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sora.variable} ${jakarta.variable} ${spaceMono.variable}`}>
      <body className="font-jakarta antialiased">
        <ScrollProgress />
        {children}
        <NoiseOverlay />
      </body>
    </html>
  );
}
