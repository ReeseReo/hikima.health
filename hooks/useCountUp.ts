'use client';
import { useEffect, useState } from 'react';
export function useCountUp(target: number, duration: number, inView: boolean, reduceMotion = false) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!inView || reduceMotion) {
      setValue(inView ? target : 0);
      return;
    }
    let raf = 0;
    const start = performance.now();
    const tick = (time: number) => {
      const progress = Math.min((time - start) / duration, 1);
      setValue(Math.round(target * progress));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [duration, inView, reduceMotion, target]);
  return value;
}
