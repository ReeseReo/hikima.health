'use client';

import { motion } from 'framer-motion';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { StaggerContainer, fadeUp } from '@/components/ui/StaggerContainer';

export function ContentShowcase() {
  const items = [
    { title: 'Blog', detail: 'Evidence-based, SEO-ready article in your brand voice.' },
    { title: 'Handout', detail: 'Patient-friendly printable summary with action steps.' },
    { title: 'Email', detail: 'Nurture-style copy that drives consult conversations.' },
    { title: 'Social', detail: 'Repurposed short-form captions from core weekly themes.' },
  ];

  return (
    <section id="showcase" className="py-[88px] px-6 md:px-12">
      <div className="max-w-[1280px] mx-auto">
        <SectionLabel>DELIVERABLE PREVIEW</SectionLabel>
        <h2 className="font-sora text-3xl md:text-5xl mb-4">What your weekly content stack looks like</h2>
        <p className="text-text-2 max-w-3xl mb-10">
          One strategy, multiple assets — designed to keep your practice visible and credible across channels.
        </p>

        <StaggerContainer className="grid md:grid-cols-2 gap-6">
          {items.map((item) => (
            <motion.article
              key={item.title}
              variants={fadeUp}
              className="bg-surface border border-border rounded-2xl p-8 hover:border-accent/70 hover:shadow-[0_0_24px_0_var(--accent-glow)] transition-all"
            >
              <h3 className="font-sora text-xl mb-3">{item.title}</h3>
              <p className="text-text-2">{item.detail}</p>
            </motion.article>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
