'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { PROOF_STATS } from '@/lib/constants';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { StaggerContainer, fadeUp } from '@/components/ui/StaggerContainer';

const SAMPLE_ARTICLES = [
  {
    title: 'Cold Showers: What They Actually Do to Your Body',
    desc: 'Myth-busting deep dive separating real neurochemistry from overhyped wellness claims. 14 peer-reviewed studies cited.',
    words: '1,830',
    type: 'Myth-Busting',
    url: 'https://dietdiscipline.com/health-insights/cold-showers-what-they-actually-do-to-your-body/',
  },
  {
    title: 'Your Brain Is 60% Fat. Here Is Why That Changes Everything.',
    desc: 'Reframes dietary fat around brain function and cell biology. Breaks down which fats matter, which to avoid, and why the low-fat era got it wrong.',
    words: '1,600',
    type: 'Science Framework',
    url: 'https://dietdiscipline.com/health-insights/your-brain-is-60-percent-fat-heres-why-that-changes-everything/',
  },
  {
    title: 'Meal Prep Is Not About Tupperware. It Is About Removing Decisions.',
    desc: 'Practical framework for sustainable meal prep built around decision fatigue, not perfection. Actionable steps for any schedule.',
    words: '1,400',
    type: 'Practical Guide',
    url: 'https://dietdiscipline.com/health-insights/meal-prep-is-not-about-tupperware-it-is-about-removing-decisions/',
  },
];

function StatCard({ value, label, color }: { value: string; label: string; color: 'cyan' | 'violet' }) {
  const [pos, setPos] = useState({ x: 50, y: 50, o: 0 });
  return (
    <motion.div variants={fadeUp} onMouseMove={(e) => {
      const r = e.currentTarget.getBoundingClientRect();
      setPos({ x: ((e.clientX - r.left) / r.width) * 100, y: ((e.clientY - r.top) / r.height) * 100, o: 0.08 });
    }} onMouseLeave={() => setPos((p) => ({ ...p, o: 0 }))} className="relative bg-bg border border-border rounded-xl p-7 text-center hover:border-violet hover:-translate-y-0.5 transition-all overflow-hidden before:absolute before:bottom-0 before:left-0 before:right-0 before:h-0.5 before:bg-gradient-to-r before:from-accent before:to-violet before:opacity-0 hover:before:opacity-100">
      <div style={{ background: `radial-gradient(circle at ${pos.x}% ${pos.y}%, ${color === 'cyan' ? 'rgba(34,211,238,0.08)' : 'rgba(167,139,250,0.08)'} 0%, transparent 60%)`, opacity: pos.o }} className="absolute inset-0 transition-opacity" />
      <div className={`font-mono text-3xl font-bold relative z-10 ${color === 'cyan' ? 'text-accent' : 'text-violet'}`}>{value}</div>
      <p className="text-xs text-text-dim relative z-10">{label}</p>
    </motion.div>
  );
}

function ArticleCard({ article, index }: { article: typeof SAMPLE_ARTICLES[number]; index: number }) {
  return (
    <motion.a
      href={article.url}
      target="_blank"
      rel="noopener"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group block bg-bg border border-border rounded-xl p-6 hover:border-accent/50 hover:shadow-[0_0_20px_0_var(--accent-glow)] transition-all"
    >
      <div className="flex items-center gap-2 mb-3">
        <span className="font-mono text-[10px] tracking-widest uppercase text-violet bg-violet/10 px-2 py-0.5 rounded">{article.type}</span>
        <span className="font-mono text-[10px] text-text-dim">{article.words} words</span>
      </div>
      <h4 className="font-sora text-sm font-semibold text-text mb-2 group-hover:text-accent transition-colors leading-snug">{article.title}</h4>
      <p className="text-xs text-text-dim leading-relaxed">{article.desc}</p>
    </motion.a>
  );
}

export function Proof() {
  return (
    <section id="proof" className="py-[88px] px-6 md:px-12 bg-surface relative overflow-hidden">
      <div className="absolute right-0 top-0 w-[380px] h-[380px] rounded-full blur-[80px] bg-violet/20 pointer-events-none" />
      <div className="max-w-[1280px] mx-auto relative">
        <div className="grid xl:grid-cols-[1.1fr_0.9fr] gap-12 mb-12">
          <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }}>
            <SectionLabel color="text-accent">SEE THE WORK. LIVE.</SectionLabel>
            <h2 className="font-sora text-3xl md:text-5xl mb-4">Don&apos;t take our word for it. See the content we produce every week.</h2>
            <p className="text-text-2 mb-4">Most agencies show you a portfolio PDF. We show you a live website. DietDiscipline.com is built entirely on Hikima content. The same quality, structure, and compliance standards your practice would receive.</p>
            <p className="text-text-2 mb-7">Every blog post, every social caption, every handout. Produced by the same team and process that would serve your practice.</p>
            <a href="https://dietdiscipline.com/" target="_blank" rel="noopener" className="inline-flex rounded-full border border-[var(--violet-border)] bg-[var(--violet-dim)] text-violet px-5 py-2.5 text-sm hover:text-accent hover:bg-[var(--accent-dim)] hover:border-[var(--accent-border)] hover:shadow-[0_0_14px_2px_var(--accent-glow)] transition-all">Visit DietDiscipline.com →</a>
          </motion.div>
          <StaggerContainer className="grid sm:grid-cols-2 gap-4">
            {PROOF_STATS.map((s) => <StatCard key={s.label} {...s} />)}
          </StaggerContainer>
        </div>

        {/* Inline Article Previews */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <p className="font-mono text-xs tracking-widest uppercase text-text-dim">Recent articles produced by Hikima</p>
            <a href="/case-study" className="font-mono text-xs text-accent hover:underline">Full case study →</a>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {SAMPLE_ARTICLES.map((article, i) => (
              <ArticleCard key={article.title} article={article} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
