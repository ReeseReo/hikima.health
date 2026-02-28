'use client';
import type React from 'react';
import { motion } from 'framer-motion';
import { useMagneticCursor } from '@/hooks/useMagneticCursor';
import { useReducedMotion } from '@/hooks/useReducedMotion';
export function Button({ href, children, variant = 'primary', className = '' }: { href: string; children: React.ReactNode; variant?: 'primary' | 'secondary' | 'outline'; className?: string }) {
  const reduce = useReducedMotion();
  const magnetic = useMagneticCursor({ disabled: reduce ?? false });
  const styles =
    variant === 'primary'
      ? 'bg-accent text-bg hover:shadow-[0_0_28px_6px_var(--accent-glow)]'
      : variant === 'secondary'
        ? 'bg-[var(--violet-dim)] text-violet border border-[var(--violet-border)] hover:bg-violet/20 hover:shadow-[0_0_24px_4px_var(--violet-glow)]'
        : 'bg-transparent text-violet border-2 border-[var(--violet-border)] hover:border-violet hover:shadow-[0_0_20px_3px_var(--violet-glow)]';
  return (
    <motion.a
      ref={magnetic.ref as React.RefObject<HTMLAnchorElement>}
      href={href}
      style={magnetic.style}
      onMouseMove={magnetic.onMouseMove as React.MouseEventHandler<HTMLAnchorElement>}
      onMouseLeave={magnetic.onMouseLeave}
      className={`inline-flex font-sora text-sm font-semibold rounded-xl px-6 py-3 transition-all duration-300 hover:-translate-y-0.5 ${styles} ${className}`}
    >
      {children}
    </motion.a>
  );
}
