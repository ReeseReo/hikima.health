import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy — Hikima',
  description: 'How Hikima collects, uses, and protects your information.',
};

export default function Privacy() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-24">
      <Link href="/" className="text-sm text-text-dim hover:text-accent transition-colors">&larr; Back to home</Link>
      <h1 className="font-sora text-3xl md:text-4xl font-semibold mt-8 mb-2">Privacy Policy</h1>
      <p className="text-text-dim text-sm mb-10">Last updated: March 7, 2026</p>

      <div className="space-y-8 text-text-2 text-[15px] leading-relaxed">
        <section>
          <h2 className="font-sora text-lg font-semibold text-text mb-2">1. Who we are</h2>
          <p>Hikima (&quot;we,&quot; &quot;us,&quot; &quot;our&quot;) provides content strategy and production services for health and wellness practitioners. Our website is hikima.health.</p>
        </section>

        <section>
          <h2 className="font-sora text-lg font-semibold text-text mb-2">2. Information we collect</h2>
          <p className="mb-2">We collect information you provide directly:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Name, email address, and practice details when you sign up or contact us</li>
            <li>Brand voice questionnaire responses during onboarding</li>
            <li>Payment information processed securely through Stripe (we do not store card details)</li>
          </ul>
          <p className="mt-2">We automatically collect basic analytics data (page views, referral source, browser type) through Vercel Analytics. This data is aggregated and does not use cookies or track individuals across sites.</p>
        </section>

        <section>
          <h2 className="font-sora text-lg font-semibold text-text mb-2">3. How we use your information</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>To deliver content services and manage your account</li>
            <li>To match your brand voice in the content we produce</li>
            <li>To communicate with you about deliveries, strategy calls, and billing</li>
            <li>To improve our website and services</li>
          </ul>
        </section>

        <section>
          <h2 className="font-sora text-lg font-semibold text-text mb-2">4. Protected health information (PHI)</h2>
          <p>Hikima does not require protected health information to deliver content services. <strong>Do not send PHI by email.</strong> If a workflow ever requires PHI, we will establish a HIPAA-compliant process and execute any required agreements before use.</p>
        </section>

        <section>
          <h2 className="font-sora text-lg font-semibold text-text mb-2">5. Third-party services</h2>
          <p>We use the following third-party services:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Stripe</strong> — payment processing</li>
            <li><strong>Vercel</strong> — website hosting and analytics</li>
          </ul>
          <p className="mt-2">Each service has its own privacy policy. We do not sell or share your personal information with third parties for marketing purposes.</p>
        </section>

        <section>
          <h2 className="font-sora text-lg font-semibold text-text mb-2">6. Data retention</h2>
          <p>We retain your information for as long as your account is active or as needed to provide services. If you cancel, we retain records for up to 12 months for billing and compliance purposes, then delete them.</p>
        </section>

        <section>
          <h2 className="font-sora text-lg font-semibold text-text mb-2">7. Your rights</h2>
          <p>You may request access to, correction of, or deletion of your personal information at any time by emailing hello@hikima.health.</p>
        </section>

        <section>
          <h2 className="font-sora text-lg font-semibold text-text mb-2">8. Changes to this policy</h2>
          <p>We may update this policy as our services evolve. Material changes will be communicated by email to active clients.</p>
        </section>

        <section>
          <h2 className="font-sora text-lg font-semibold text-text mb-2">9. Contact</h2>
          <p>Questions about this policy? Email us at <a href="mailto:hello@hikima.health" className="text-accent hover:underline">hello@hikima.health</a>.</p>
        </section>
      </div>
    </main>
  );
}
