'use client';
import { motion } from 'framer-motion';
import { FAQS } from '@/lib/constants';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { StaggerContainer, fadeUp } from '@/components/ui/StaggerContainer';
export function FAQ() {
  return (
    <section id="faq" className="py-[88px] px-6 md:px-12">
      <div className="max-w-[1280px] mx-auto">
        <SectionLabel>FREQUENTLY ASKED</SectionLabel>
        <h2 className="font-sora text-3xl md:text-5xl mb-4">Questions before you start</h2>
        <p className="text-text-2 mb-3">If yours isn&apos;t here, email us at hello@hikima.health</p>
        <p className="text-xs text-text-dim mb-[52px]">Security note: please do not send protected health information (PHI) by email.</p>
        <StaggerContainer className="grid xl:grid-cols-2 gap-4">
          {FAQS.map((f) => (
            <motion.article key={f.q} variants={fadeUp} className="bg-surface border border-border border-l-[3px] border-l-violet rounded-xl p-[26px] hover:border-l-accent hover:-translate-y-0.5 hover:shadow-lg transition-all">
              <h3 className="font-sora text-[15px] font-semibold mb-[10px]">{f.q}</h3>
              <p className="text-sm text-text-muted leading-[1.65]">{f.a}</p>
            </motion.article>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
