import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service — Hikima',
  description: 'Terms and conditions for using Hikima content services.',
};

export default function Terms() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-24">
      <Link href="/" className="text-sm text-text-dim hover:text-accent transition-colors">&larr; Back to home</Link>
      <h1 className="font-sora text-3xl md:text-4xl font-semibold mt-8 mb-2">Terms of Service</h1>
      <p className="text-text-dim text-sm mb-10">Last updated: March 7, 2026</p>

      <div className="space-y-8 text-text-2 text-[15px] leading-relaxed">
        <section>
          <h2 className="font-sora text-lg font-semibold text-text mb-2">1. Services</h2>
          <p>Hikima provides content strategy and production services for health and wellness practitioners, including blog articles, social media posts, email newsletters, patient handouts, and related deliverables as described on our pricing page.</p>
        </section>

        <section>
          <h2 className="font-sora text-lg font-semibold text-text mb-2">2. Subscriptions and billing</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>All plans are billed monthly through Stripe. Prices are listed on our pricing page.</li>
            <li>Your subscription renews automatically each month until canceled.</li>
            <li>There are no long-term contracts. You may cancel at any time before your next billing cycle.</li>
            <li>Refunds are not provided for partial months. If you cancel mid-cycle, you will receive deliverables through the end of your current billing period.</li>
          </ul>
        </section>

        <section>
          <h2 className="font-sora text-lg font-semibold text-text mb-2">3. Content ownership</h2>
          <p>Once delivered and paid for, all content produced by Hikima becomes the property of the client. You may publish, modify, and distribute it as you see fit. Hikima retains the right to reference the work in our portfolio unless you request otherwise in writing.</p>
        </section>

        <section>
          <h2 className="font-sora text-lg font-semibold text-text mb-2">4. Revisions</h2>
          <p>Each delivery includes one round of revisions. Revision requests must be submitted within 48 hours of delivery. If no feedback is received within 48 hours, the content is considered approved and we proceed with the next cycle. Your feedback is carried forward to future deliveries.</p>
        </section>

        <section>
          <h2 className="font-sora text-lg font-semibold text-text mb-2">5. Client responsibilities</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Complete the onboarding questionnaire so we can match your brand voice.</li>
            <li>Provide timely feedback on deliveries to keep your publishing schedule on track.</li>
            <li>Do not send protected health information (PHI) by email or through unsecured channels.</li>
          </ul>
        </section>

        <section>
          <h2 className="font-sora text-lg font-semibold text-text mb-2">6. Compliance</h2>
          <p>All content is reviewed for medical claims, absolutist language, and scope-of-practice boundaries before delivery. Hikima content is educational in nature — we do not diagnose, treat, or prescribe. While we take compliance seriously, the client is ultimately responsible for ensuring published content meets the regulatory requirements of their jurisdiction and profession.</p>
        </section>

        <section>
          <h2 className="font-sora text-lg font-semibold text-text mb-2">7. Protected health information</h2>
          <p>Hikima does not require PHI to deliver services. Do not send PHI by email. If a workflow requires PHI, we will define a HIPAA-compliant process and execute required agreements before any PHI is shared.</p>
        </section>

        <section>
          <h2 className="font-sora text-lg font-semibold text-text mb-2">8. Limitation of liability</h2>
          <p>Hikima provides content services on an as-is basis. We are not liable for any indirect, incidental, or consequential damages arising from the use of our content. Our total liability is limited to the fees paid for the most recent month of service.</p>
        </section>

        <section>
          <h2 className="font-sora text-lg font-semibold text-text mb-2">9. Termination</h2>
          <p>Either party may terminate the service at any time. Upon cancellation, we complete any in-progress deliveries for the current billing cycle. Access to strategy calls, content calendars, and ongoing services ends at the close of the billing period.</p>
        </section>

        <section>
          <h2 className="font-sora text-lg font-semibold text-text mb-2">10. Changes to these terms</h2>
          <p>We may update these terms as our services evolve. Material changes will be communicated by email to active clients at least 14 days before taking effect.</p>
        </section>

        <section>
          <h2 className="font-sora text-lg font-semibold text-text mb-2">11. Contact</h2>
          <p>Questions about these terms? Email us at <a href="mailto:hello@hikima.health" className="text-accent hover:underline">hello@hikima.health</a>.</p>
        </section>
      </div>
    </main>
  );
}
