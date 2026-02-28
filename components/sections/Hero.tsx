'use client';
import { motion } from 'framer-motion';
import { GlowOrb } from '@/components/ui/GlowOrb';
import { Button } from '@/components/ui/Button';
const ease = [0.16, 1, 0.3, 1] as const;
export function Hero() {
  const item = (delay: number) => ({ initial: { y: 28, opacity: 0 }, animate: { y: 0, opacity: 1, transition: { delay, duration: 0.6, ease } } });
  return (
    <section className="relative pt-[100px] pb-[72px] px-6 md:px-12 overflow-hidden">
      <GlowOrb side="left" color="violet" />
      <GlowOrb side="right" color="accent" />
      <div className="max-w-[1280px] mx-auto relative z-10 text-center">
        <motion.p {...item(0.05)} className="font-mono tracking-[5px] text-text-dim text-sm mb-4">HIKI<span className="text-accent">MA</span></motion.p>
        <motion.p {...item(0.15)} className="font-mono text-xs tracking-[0.22em] mb-6 bg-gradient-to-r from-accent to-violet bg-clip-text text-transparent">CONTENT STRATEGY FOR HEALTH PRACTICES</motion.p>
        <motion.h1 {...item(0.25)} className="font-sora text-4xl md:text-6xl font-semibold leading-tight mb-4">Stop stressing about content.<br /><span className="bg-gradient-to-r from-accent to-violet bg-clip-text text-transparent">Start growing.</span></motion.h1>
        <motion.p {...item(0.4)} className="max-w-3xl mx-auto text-text-2 leading-relaxed mb-[52px]">You became a practitioner to help people, not to write blog posts. Hikima handles your content — evidence-based, compliance-reviewed, and branded to your practice. Delivered every week.</motion.p>
        <motion.div {...item(0.55)} className="flex flex-col sm:flex-row justify-center gap-4">
          <Button href="#pricing">Choose Your Plan</Button>
          <Button href="#proof" variant="secondary">See Our Work Live →</Button>
        </motion.div>
      </div>
    </section>
  );
}
