'use client';

import { motion } from 'framer-motion';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { StaggerContainer, fadeUp } from '@/components/ui/StaggerContainer';

export function BestFor() {
  const bestFor = [
    'Private practices that want consistent weekly content without hiring in-house.',
    'Clinics that need compliance-safe education content across blog, email, and social.',
    'Teams that want strategy + execution, not just random post writing.',
  ];

  const notBestFor = [
    'Practices looking for one-off viral content with no strategy.',
    'Brands that want aggressive medical claims or fear-based messaging.',
    'Teams unwilling to provide basic brand voice/input during onboarding.',
  ];

  return (
    <section id="best-for" className="py-[88px] px-6 md:px-12 bg-[#0E111A]">
      <div className="max-w-[1280px] mx-auto">
        <SectionLabel>FIT CHECK</SectionLabel>
        <h2 className="font-sora text-3xl md:text-5xl mb-4">Who Hikima is best for</h2>
        <p className="text-text-2 max-w-3xl mb-10">
          A quick filter so we only start conversations where we can create clear ROI and clean execution.
        </p>

        <StaggerContainer className="grid md:grid-cols-2 gap-6">
          <motion.article
            variants={fadeUp}
            className="bg-surface border border-border rounded-2xl p-8 hover:border-accent hover:shadow-[0_0_24px_0_var(--accent-glow)] transition-all"
          >
            <h3 className="font-sora text-xl mb-4 text-accent">Best fit</h3>
            <ul className="space-y-3 text-text-2">
              {bestFor.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-accent">→</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.article>

          <motion.article
            variants={fadeUp}
            className="bg-surface border border-border rounded-2xl p-8 hover:border-violet hover:shadow-[0_0_24px_0_var(--violet-glow)] transition-all"
          >
            <h3 className="font-sora text-xl mb-4 text-violet">Not a fit</h3>
            <ul className="space-y-3 text-text-2">
              {notBestFor.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-violet">→</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.article>
        </StaggerContainer>
      </div>
    </section>
  );
}
