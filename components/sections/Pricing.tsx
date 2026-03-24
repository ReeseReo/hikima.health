'use client';
import { useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { TIERS, PRICING_PERIODS } from '@/lib/constants';
import { getStripeUrl } from '@/lib/stripe';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { StaggerContainer, fadeUp } from '@/components/ui/StaggerContainer';
import { Button } from '@/components/ui/Button';

type Period = keyof typeof PRICING_PERIODS;

function TierCard({ tier, period }: { tier: (typeof TIERS)[number]; period: Period }) {
  const rotateX = useSpring(useMotionValue(0), { stiffness: 100, damping: 12 });
  const rotateY = useSpring(useMotionValue(0), { stiffness: 100, damping: 12 });

  const periodInfo = PRICING_PERIODS[period];
  const discountedPrice = Math.round(tier.price * (1 - periodInfo.discount));
  const showOriginal = period !== 'monthly';

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
      <h3 className="font-sora text-2xl mb-1">{tier.name.toUpperCase()}</h3>
      <p className="text-xs text-text-muted mb-4">{tier.tagline}</p>
      {showOriginal && (
        <p className="font-mono text-sm text-text-dim line-through">${tier.price}/mo</p>
      )}
      {!showOriginal && <p className="font-mono text-sm text-text-dim opacity-0">.</p>}
      <p className={`font-mono text-[38px] font-bold ${tier.featured ? 'text-accent' : 'text-violet'}`}>${discountedPrice}<span className="text-base font-normal text-text-dim">/mo</span></p>
      <p className={`font-mono text-xs mb-5 ${tier.featured ? 'text-accent/60' : 'text-violet/60'}`}>~${Math.round(discountedPrice / 4.3)}/week</p>
      <ul className="space-y-2 mb-6">
        {tier.items.map((item) => <li key={item} className="text-sm text-text-muted pl-4 relative before:content-['→'] before:absolute before:left-0 before:font-mono before:text-xs before:text-violet">{item}</li>)}
      </ul>
      <Button href={getStripeUrl(tier.name)} variant={tier.featured ? 'primary' : 'outline'} className="w-full justify-center">Get Started</Button>
    </motion.article>
  );
}

export function Pricing() {
  const [period, setPeriod] = useState<Period>('monthly');

  return (
    <section id="pricing" className="py-[88px] px-6 md:px-12">
      <div className="max-w-[1280px] mx-auto">
        <SectionLabel color="text-accent">PRICING</SectionLabel>
        <h2 className="font-sora text-3xl md:text-5xl mb-4">Plans that scale with your practice</h2>
        <p className="text-text-2 mb-10 max-w-3xl">Every plan is built around topic batches: complete content sets from a single research brief. Customize your batch mix during onboarding. No contracts.</p>

        {/* Commitment Toggle */}
        <div className="flex justify-center mb-[52px]">
          <div className="inline-flex bg-surface border border-border rounded-xl p-1 gap-1">
            {(Object.entries(PRICING_PERIODS) as [Period, typeof PRICING_PERIODS[Period]][]).map(([key, info]) => (
              <button
                key={key}
                onClick={() => setPeriod(key)}
                className={`px-5 py-2.5 rounded-lg text-sm font-semibold transition-all ${
                  period === key
                    ? 'bg-accent text-background'
                    : 'text-text-muted hover:text-text'
                }`}
              >
                {info.label}
                {'savings' in info && (
                  <span className={`ml-1.5 text-xs font-bold ${period === key ? 'text-background/70' : 'text-violet'}`}>{info.savings}</span>
                )}
              </button>
            ))}
          </div>
        </div>

        <div className="[perspective:1000px]">
          <StaggerContainer className="grid xl:grid-cols-3 gap-6">
            {TIERS.map((tier) => <TierCard key={tier.name} tier={tier} period={period} />)}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
