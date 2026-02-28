'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { TRUST_STATS } from '@/lib/constants';
import { useCountUp } from '@/hooks/useCountUp';
import { useReducedMotion } from '@/hooks/useReducedMotion';
function TrustValue({ value, numericValue, label, color, inView }: { value: string; numericValue: number | null; label: string; color: 'cyan' | 'violet'; inView: boolean }) {
  const reduce = useReducedMotion();
  const counted = useCountUp(numericValue ?? 0, numericValue === 100 ? 1500 : 1200, inView, reduce ?? false);
  const text = numericValue === null ? (inView ? 'Wed' : '') : value.includes('%') ? `${counted}%` : `${counted}`;
  return (
    <div className="flex-1 text-center py-4 relative">
      <motion.div animate={value === '0' && inView ? { scale: [1, 1.03, 1] } : undefined} transition={{ duration: 1.2, repeat: Infinity }} className={`font-mono text-[30px] font-bold ${color === 'cyan' ? 'text-accent' : 'text-violet'}`}>{text}</motion.div>
      <p className="text-xs text-text-dim">{label}</p>
    </div>
  );
}
export function TrustBar() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  return (
    <motion.section ref={ref} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.85 }} className="px-6 md:px-12 pb-[88px]">
      <div className="max-w-[1280px] mx-auto grid md:grid-cols-4 border border-border rounded-2xl bg-surface">
        {TRUST_STATS.map((stat, i) => (
          <div key={stat.label} className="relative md:after:absolute md:after:right-0 md:after:top-4 md:after:bottom-4 md:after:w-px md:after:bg-gradient-to-b md:after:from-transparent md:after:via-border md:after:to-transparent last:md:after:hidden">
            <TrustValue {...stat} inView={inView} />
          </div>
        ))}
      </div>
    </motion.section>
  );
}
