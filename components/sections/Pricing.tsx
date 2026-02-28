'use client';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { TIERS } from '@/lib/constants';
import { getStripeUrl } from '@/lib/stripe';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { StaggerContainer, fadeUp } from '@/components/ui/StaggerContainer';
import { Button } from '@/components/ui/Button';
function TierCard({ tier }: { tier: (typeof TIERS)[number] }) {
  const rotateX = useSpring(useMotionValue(0), { stiffness: 100, damping: 12 });
  const rotateY = useSpring(useMotionValue(0), { stiffness: 100, damping: 12 });
  return (
    <motion.article
      variants={fadeUp}
      style={{ rotateX, rotateY }}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;
        rotateX.set((0.5 - y) * 3);
        rotateY.set((x - 0.5) * 3);
      }}
      onMouseLeave={() => {
        rotateX.set(0);
        rotateY.set(0);
      }}
      className={`relative rounded-2xl p-8 border transition-all hover:-translate-y-1.5 hover:shadow-2xl ${tier.featured ? 'bg-gradient-to-b from-accent/5 to-surface border-[var(--accent-border)] featured-rotating' : 'bg-surface border-border'}`}
    >
      {tier.featured && <span className="absolute top-4 right-4 font-mono text-[9px] tracking-widest uppercase text-accent bg-[var(--accent-dim)] shadow-[0_0_12px_2px_var(--accent-glow)] rounded-full px-2.5 py-1">MOST POPULAR</span>}
      <h3 className="font-sora text-2xl mb-3">{tier.name.toUpperCase()}</h3>
      <p className={`font-mono text-[38px] font-bold ${tier.featured ? 'text-accent' : 'text-violet'}`}>${tier.price}/month</p>
      <p className={`font-mono text-xs mb-5 ${tier.featured ? 'text-accent' : 'text-violet'}`}>(~${tier.weekly}/week)</p>
      <ul className="space-y-2 mb-6">
        {tier.items.map((item) => <li key={item} className="text-sm text-text-muted pl-4 relative before:content-['→'] before:absolute before:left-0 before:font-mono before:text-xs before:text-violet">{item}</li>)}
      </ul>
      <Button href={getStripeUrl(tier.name)} variant={tier.featured ? 'primary' : 'outline'} className="w-full justify-center">Get Started</Button>
    </motion.article>
  );
}
export function Pricing() {
  return (
    <section id="pricing" className="py-[88px] px-6 md:px-12">
      <div className="max-w-[1280px] mx-auto">
        <SectionLabel color="text-accent">PRICING</SectionLabel>
        <h2 className="font-sora text-3xl md:text-5xl mb-4">Plans that scale with your practice</h2>
        <p className="text-text-2 mb-[52px] max-w-3xl">Every plan includes voice & brand setup, a monthly content calendar, and compliance review on every piece. No contracts — month to month.</p>
        <div className="[perspective:1000px]"><StaggerContainer className="grid xl:grid-cols-3 gap-6">{TIERS.map((tier) => <TierCard key={tier.name} tier={tier} />)}</StaggerContainer></div>
      </div>
    </section>
  );
}
