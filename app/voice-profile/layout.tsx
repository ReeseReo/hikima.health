import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Voice Profile | Hikima',
  description: 'Complete your voice profile in 5 minutes. We use it to match your content to your tone, style, and brand.',
  alternates: { canonical: '/voice-profile' },
};

export default function VoiceProfileLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
