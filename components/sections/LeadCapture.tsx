'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionLabel } from '@/components/ui/SectionLabel';

const SPECIALTIES = [
  'Dietetics / Nutrition',
  'Functional Medicine',
  'Physical Therapy',
  'Naturopathic Medicine',
  'Wellness Coaching',
  'Other',
];

export function LeadCapture() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [specialty, setSpecialty] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name || !email || !specialty) return;

    // Send via mailto until Resend/API is wired up
    const subject = encodeURIComponent(`Content Sample Request: ${specialty}`);
    const body = encodeURIComponent(
      `New content sample request:\n\nName: ${name}\nEmail: ${email}\nSpecialty: ${specialty}\n\nThis prospect wants to see a sample content pack for their practice.`
    );
    window.open(`mailto:hello@hikima.health?subject=${subject}&body=${body}`, '_self');
    setSubmitted(true);
  }

  return (
    <section className="py-[88px] px-6 md:px-12">
      <div className="max-w-[640px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="bg-surface border border-border rounded-2xl p-10 relative overflow-hidden"
        >
          <div className="absolute -right-20 -top-20 w-[200px] h-[200px] rounded-full blur-[60px] bg-accent/10 pointer-events-none" />
          <div className="relative">
            <SectionLabel color="text-accent">FREE SAMPLE</SectionLabel>
            <h2 className="font-sora text-2xl md:text-3xl mb-3">See what we&apos;d create for your practice</h2>
            <p className="text-text-2 text-sm mb-8">
              Tell us your specialty and we&apos;ll send you a sample content pack: a blog excerpt, social post, and newsletter intro written for your niche. No commitment, no follow-up spam.
            </p>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="lead-name" className="block text-xs text-text-dim mb-1.5 font-mono uppercase tracking-wider">Your name</label>
                  <input
                    id="lead-name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full bg-bg border border-border rounded-lg px-4 py-3 text-sm text-text placeholder:text-text-dim/50 focus:outline-none focus:border-accent transition-colors"
                    placeholder="Dr. Sarah Chen"
                  />
                </div>
                <div>
                  <label htmlFor="lead-email" className="block text-xs text-text-dim mb-1.5 font-mono uppercase tracking-wider">Email</label>
                  <input
                    id="lead-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full bg-bg border border-border rounded-lg px-4 py-3 text-sm text-text placeholder:text-text-dim/50 focus:outline-none focus:border-accent transition-colors"
                    placeholder="sarah@yourpractice.com"
                  />
                </div>
                <div>
                  <label htmlFor="lead-specialty" className="block text-xs text-text-dim mb-1.5 font-mono uppercase tracking-wider">Your specialty</label>
                  <select
                    id="lead-specialty"
                    value={specialty}
                    onChange={(e) => setSpecialty(e.target.value)}
                    required
                    className="w-full bg-bg border border-border rounded-lg px-4 py-3 text-sm text-text focus:outline-none focus:border-accent transition-colors appearance-none"
                  >
                    <option value="" disabled>Select your specialty</option>
                    {SPECIALTIES.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>
                <button
                  type="submit"
                  className="w-full bg-accent text-background font-semibold py-3.5 rounded-lg text-sm hover:bg-accent/90 transition-colors mt-2"
                >
                  Send Me a Sample Pack
                </button>
                <p className="text-[11px] text-text-dim text-center">No credit card. No sales calls. Just content.</p>
              </form>
            ) : (
              <div className="text-center py-8">
                <div className="text-4xl mb-4">✓</div>
                <h3 className="font-sora text-xl mb-2 text-accent">Request sent</h3>
                <p className="text-text-2 text-sm">We&apos;ll have a sample pack in your inbox within 48 hours. In the meantime, check out our live work at <a href="https://dietdiscipline.com/" target="_blank" rel="noopener" className="text-accent hover:underline">DietDiscipline.com</a>.</p>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
