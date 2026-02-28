'use client';
import { motion } from 'framer-motion';
import { STEPS } from '@/lib/constants';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { StaggerContainer, fadeUp } from '@/components/ui/StaggerContainer';
export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-[88px] px-6 md:px-12">
      <div className="max-w-[1280px] mx-auto">
        <SectionLabel>HOW IT WORKS</SectionLabel>
        <h2 className="font-sora text-3xl md:text-5xl mb-4">Three steps. Seven days.</h2>
        <p className="text-text-2 mb-[52px] max-w-3xl">From sign-up to your first branded content delivery in one week. No onboarding headaches. No learning curve.</p>
        <div className="relative">
          <div className="hidden xl:block absolute top-6 left-[16.5%] right-[16.5%] h-[2px] bg-gradient-to-r from-[var(--violet-border)] to-[var(--accent-border)]" />
          <StaggerContainer className="grid xl:grid-cols-3 gap-6">
            {STEPS.map((step) => (
              <motion.article key={step.num} variants={fadeUp} className="relative bg-surface border border-border rounded-2xl p-8 hover:border-violet hover:shadow-[0_0_24px_0_var(--violet-glow)] hover:-translate-y-1 transition-all before:absolute before:inset-x-0 before:top-0 before:h-0.5 before:bg-gradient-to-r before:from-violet before:to-accent before:opacity-0 hover:before:opacity-100">
                <div className="font-mono text-[52px] font-bold bg-gradient-to-b from-violet/30 to-accent/20 bg-clip-text text-transparent">{step.num}</div>
                <h3 className="font-sora text-xl mb-3">{step.title}</h3>
                <p className="text-sm text-text-muted">{step.body}</p>
                <p className="font-mono text-[10px] tracking-wider uppercase text-violet border-t border-border pt-[14px] mt-[18px]">{step.time}</p>
              </motion.article>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
