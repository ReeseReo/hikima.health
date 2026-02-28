'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';
export function GlowOrb({ side, color }: { side: 'left' | 'right'; color: 'accent' | 'violet' }) {
  const { scrollY } = useScroll();
  const shouldReduceMotion = useReducedMotion();
  const y = useTransform(scrollY, [0, 1200], [0, -40]);
  return (
    <motion.div
      style={{ y: shouldReduceMotion ? 0 : y }}
      animate={shouldReduceMotion ? undefined : { opacity: [0.6, 1, 0.6] }}
      transition={shouldReduceMotion ? undefined : { duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      className={`absolute top-16 ${side === 'left' ? 'left-[8%]' : 'right-[8%]'} w-[460px] h-[460px] blur-[40px] rounded-full ${color === 'accent' ? 'bg-accent/20' : 'bg-violet/20'} z-0`}
    />
  );
}
