'use client';
import { motion } from 'framer-motion';
export function SectionLabel({ children, color = 'text-violet' }: { children: string; color?: string }) {
  return (
    <motion.p
      className={`font-mono text-[11px] tracking-[0.24em] uppercase ${color} mb-3`}
      initial={{ x: -20, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.p>
  );
}
