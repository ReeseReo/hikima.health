'use client';
import { motion } from 'framer-motion';
import { ADDONS } from '@/lib/constants';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { StaggerContainer, fadeUp } from '@/components/ui/StaggerContainer';
export function AddOns() {
  return (
    <section className="pt-0 pb-[88px] px-6 md:px-12">
      <div className="max-w-[1280px] mx-auto">
        <SectionLabel>ADD-ONS</SectionLabel>
        <h2 className="font-sora text-2xl mb-[52px]">Need more? Add to any plan.</h2>
        <StaggerContainer className="grid md:grid-cols-2 xl:grid-cols-4 gap-4">
          {ADDONS.map((a) => (
            <motion.article key={a.name} variants={fadeUp} className="relative bg-surface border border-border rounded-xl p-6 hover:border-violet hover:-translate-y-0.5 hover:shadow-xl transition-all before:absolute before:top-0 before:left-0 before:right-0 before:h-0.5 before:bg-gradient-to-r before:from-violet before:to-accent before:opacity-0 hover:before:opacity-100">
              <p className="font-mono text-lg font-bold text-violet mb-1">{a.price}</p>
              <h3 className="font-sora text-sm font-semibold mb-2">{a.name}</h3>
              <p className="text-xs text-text-dim leading-relaxed">{a.desc}</p>
            </motion.article>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
