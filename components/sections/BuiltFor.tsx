'use client';
import { motion } from 'framer-motion';
import { PRACTITIONER_TYPES } from '@/lib/constants';
export function BuiltFor() {
  return (
    <section className="px-6 md:px-12 pb-10">
      <motion.div initial="hidden" animate="visible" variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08, delayChildren: 0.7 } } }} className="max-w-[1280px] mx-auto flex flex-wrap gap-3 justify-center">
        {PRACTITIONER_TYPES.map((item) => (
          <motion.span key={item} variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }} className="text-violet bg-[var(--violet-dim)] border border-[var(--violet-border)] rounded-full text-xs font-medium px-4 py-[7px] hover:bg-violet/20 hover:border-violet hover:shadow-[0_0_12px_2px_var(--violet-glow)] transition-all">{item}</motion.span>
        ))}
      </motion.div>
    </section>
  );
}
