'use client';

import { motion } from 'framer-motion';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { StaggerContainer, fadeUp } from '@/components/ui/StaggerContainer';

export function ContentShowcase() {
  const items = [
    { title: 'Blog Article', detail: 'Evidence-based, SEO-ready article in your brand voice — formatted for your website and ready to publish.' },
    { title: 'Patient Handout', detail: 'Print-ready summary with action steps your patients take home. Branded to your practice.' },
    { title: 'Email Newsletter', detail: 'Nurture-style email that drives consult conversations — formatted for Mailchimp, ConvertKit, or your platform.' },
    { title: 'Social Posts', detail: 'Platform-ready captions, carousels, and video scripts — all built from the same topic for consistent messaging.' },
  ];

  return (
    <section id="showcase" className="py-[88px] px-6 md:px-12">
      <div className="max-w-[1280px] mx-auto">
        <SectionLabel>DELIVERABLE PREVIEW</SectionLabel>
        <h2 className="font-sora text-3xl md:text-5xl mb-4">One topic. A complete content set.</h2>
        <p className="text-text-2 max-w-3xl mb-10">
          Every topic we research becomes a full content ecosystem — article, email, social posts, and more. Cohesive messaging across every channel, from one research brief.
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
