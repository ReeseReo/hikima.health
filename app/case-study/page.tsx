import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Case Study: Diet Discipline | Hikima',
  description: 'How Hikima built a full content ecosystem for Diet Discipline: 13 articles, 33 nutrition entries, structured data, and automated publishing.',
  alternates: { canonical: '/case-study' },
};

const STATS = [
  { value: '13', label: 'Articles published' },
  { value: '33', label: 'Nutrition Hub entries' },
  { value: '13', label: 'Dirty List entries' },
  { value: '100%', label: 'Compliance-reviewed' },
  { value: '5', label: 'Quality checks per piece' },
  { value: '0', label: 'Medical claims published' },
];

const TIMELINE = [
  {
    phase: 'Phase 1: Foundation',
    items: [
      'Brand voice profiling and content strategy',
      'Topic research with citation verification',
      'First 3 cornerstone articles published',
      'Content calendar established',
    ],
  },
  {
    phase: 'Phase 2: Content Ecosystem',
    items: [
      '10 additional Health Insights articles across nutrition literacy topics',
      'Dirty List section: 13 ingredient deep-dives with health impact data',
      'Nutrition Hub: 27 foods + 6 herbs with full nutritional profiles',
      'Internal linking network connecting articles, hub entries, and dirty list',
    ],
  },
  {
    phase: 'Phase 3: Automation and Scale',
    items: [
      'Custom REST API endpoints for Dirty List and Nutrition Hub publishing',
      'Automated WordPress publishing pipeline',
      'Schema.org JSON-LD structured data on all articles',
      'Image optimization (67% compression, alt text on 105 images)',
      'Content calendar for ongoing monthly production',
    ],
  },
];

const CONTENT_TYPES = [
  {
    name: 'Health Insights (Blog)',
    count: '13 articles',
    desc: 'Long-form, citation-verified articles covering nutrition science, meal prep, gut health, hydration, and more. Each averages 1,500+ words with bold key stats, callout blocks, and data tables.',
    link: 'https://dietdiscipline.com/health-insights/',
  },
  {
    name: 'The Dirty List',
    count: '13 entries',
    desc: 'Ingredient investigation cards exposing what common additives actually do. Each entry includes health impact data, where the ingredient hides, and healthier alternatives.',
    link: 'https://dietdiscipline.com/the-dirty-list/',
  },
  {
    name: 'Nutrition Hub',
    count: '33 entries',
    desc: 'Comprehensive food and herb profiles with calories, fiber, protein, vitamins, minerals, GI rating, and health benefits. 27 whole foods + 6 medicinal herbs.',
    link: 'https://dietdiscipline.com/nutrition-hub/',
  },
];

export default function CaseStudy() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-24">
      <Link href="/" className="text-sm text-text-dim hover:text-accent transition-colors">&larr; Back to home</Link>

      {/* Header */}
      <div className="mt-8 mb-16">
        <p className="font-mono text-xs tracking-widest uppercase text-accent mb-4">CASE STUDY</p>
        <h1 className="font-sora text-3xl md:text-5xl font-semibold mb-4">
          How we built a complete content ecosystem for Diet Discipline
        </h1>
        <p className="text-text-2 text-lg leading-relaxed max-w-2xl">
          From zero content to 13 published articles, 33 nutrition profiles, 13 ingredient investigations, and automated publishing. All compliance-reviewed, citation-verified, and SEO-optimized.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-16">
        {STATS.map((s) => (
          <div key={s.label} className="bg-surface border border-border rounded-xl p-6 text-center">
            <div className="font-mono text-3xl font-bold text-accent">{s.value}</div>
            <p className="text-xs text-text-dim mt-1">{s.label}</p>
          </div>
        ))}
      </div>

      {/* The Challenge */}
      <section className="mb-16">
        <h2 className="font-sora text-2xl font-semibold mb-4">The challenge</h2>
        <p className="text-text-2 leading-relaxed mb-4">
          Diet Discipline needed a full content platform built from scratch. No existing articles, no nutrition database, no publishing workflow. The goal: create a credible, research-backed nutrition education site that could serve as both a standalone resource and a proof-of-capability for Hikima&apos;s content services.
        </p>
        <p className="text-text-2 leading-relaxed">
          Every piece of content had to meet strict compliance standards: no medical claims, no absolutist language, all citations traced to peer-reviewed sources. The site needed to feel authoritative without crossing scope-of-practice boundaries.
        </p>
      </section>

      {/* Content Types */}
      <section className="mb-16">
        <h2 className="font-sora text-2xl font-semibold mb-6">What we built</h2>
        <div className="space-y-4">
          {CONTENT_TYPES.map((ct) => (
            <a
              key={ct.name}
              href={ct.link}
              target="_blank"
              rel="noopener"
              className="block bg-surface border border-border rounded-xl p-6 hover:border-accent/50 hover:shadow-[0_0_20px_0_var(--accent-glow)] transition-all group"
            >
              <div className="flex items-baseline justify-between mb-2">
                <h3 className="font-sora text-lg font-semibold group-hover:text-accent transition-colors">{ct.name}</h3>
                <span className="font-mono text-xs text-violet">{ct.count}</span>
              </div>
              <p className="text-text-2 text-sm leading-relaxed">{ct.desc}</p>
            </a>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="mb-16">
        <h2 className="font-sora text-2xl font-semibold mb-6">How we did it</h2>
        <div className="space-y-8">
          {TIMELINE.map((phase) => (
            <div key={phase.phase} className="border-l-2 border-accent/30 pl-6">
              <h3 className="font-sora text-lg font-semibold text-accent mb-3">{phase.phase}</h3>
              <ul className="space-y-2">
                {phase.items.map((item) => (
                  <li key={item} className="text-text-2 text-sm pl-4 relative before:content-['→'] before:absolute before:left-0 before:font-mono before:text-xs before:text-violet">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Quality Standards */}
      <section className="mb-16">
        <h2 className="font-sora text-2xl font-semibold mb-4">Quality standards applied</h2>
        <div className="bg-surface border border-border rounded-xl p-6">
          <ul className="space-y-3">
            <li className="text-text-2 text-sm pl-4 relative before:content-['✓'] before:absolute before:left-0 before:text-accent before:font-bold">
              <strong className="text-text">5-pass compliance review</strong> on every piece: medical claims, absolutist language, scope-of-practice, citation accuracy, brand voice
            </li>
            <li className="text-text-2 text-sm pl-4 relative before:content-['✓'] before:absolute before:left-0 before:text-accent before:font-bold">
              <strong className="text-text">Citation verification</strong> against peer-reviewed sources. No claim published without a traceable reference.
            </li>
            <li className="text-text-2 text-sm pl-4 relative before:content-['✓'] before:absolute before:left-0 before:text-accent before:font-bold">
              <strong className="text-text">Schema.org structured data</strong> (JSON-LD) on all articles for search engine visibility
            </li>
            <li className="text-text-2 text-sm pl-4 relative before:content-['✓'] before:absolute before:left-0 before:text-accent before:font-bold">
              <strong className="text-text">Image optimization:</strong> 67% file size reduction across 21 hub images, descriptive alt text on all 105 images
            </li>
            <li className="text-text-2 text-sm pl-4 relative before:content-['✓'] before:absolute before:left-0 before:text-accent before:font-bold">
              <strong className="text-text">Internal linking network</strong> connecting articles, nutrition hub entries, and dirty list items
            </li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-12 border-t border-border">
        <h2 className="font-sora text-2xl font-semibold mb-3">Ready to build your content ecosystem?</h2>
        <p className="text-text-2 mb-6">The same team, process, and quality standards. Branded to your practice.</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a href="/#pricing" className="inline-flex items-center justify-center bg-accent text-background font-semibold px-6 py-3 rounded-lg text-sm hover:bg-accent/90 transition-colors">Choose Your Plan</a>
          <a href="https://dietdiscipline.com/" target="_blank" rel="noopener" className="inline-flex items-center justify-center border border-accent text-accent font-semibold px-6 py-3 rounded-lg text-sm hover:bg-accent/10 transition-colors">Visit DietDiscipline.com →</a>
        </div>
      </section>
    </main>
  );
}
