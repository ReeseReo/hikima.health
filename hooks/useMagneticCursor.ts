'use client';
import { useCallback, useRef } from 'react';
import type React from 'react';
import { useMotionValue, useSpring } from 'framer-motion';
type Config = { distance?: number; strength?: number; disabled?: boolean };
export function useMagneticCursor(config: Config = {}) {
  const { distance = 60, strength = 0.08, disabled = false } = config;
  const ref = useRef<HTMLElement | null>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 220, damping: 20 });
  const springY = useSpring(y, { stiffness: 220, damping: 20 });
  const onMouseMove = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      if (disabled || !ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      const dist = Math.hypot(dx, dy);
      if (dist < distance) {
        x.set(dx * strength);
        y.set(dy * strength);
      } else {
        x.set(0);
        y.set(0);
      }
    },
    [disabled, distance, strength, x, y],
  );
  const onMouseLeave = useCallback(() => {
    x.set(0);
    y.set(0);
  }, [x, y]);
  return { ref, style: { x: springX, y: springY }, onMouseMove, onMouseLeave };
}
