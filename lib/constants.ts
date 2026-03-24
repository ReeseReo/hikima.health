export const SITE = {
  name: 'Hikima',
  domain: 'hikima.health',
  email: 'hello@hikima.health',
  url: 'https://hikima.health',
  tagline: 'Content strategy for health practices',
  meaning: 'Wisdom, Hausa',
} as const;

export const TIERS = [
  {
    name: 'Foundation',
    tagline: 'Establish your content base',
    price: 497,
    weekly: 124,
    featured: false,
    stripeEnvKey: 'NEXT_PUBLIC_STRIPE_FOUNDATION_URL',
    items: [
      '2 topic batches per month',
      'Each batch: article + 3 social posts + newsletter',
      'Monthly content calendar',
      'Voice & brand setup',
      '1 revision round per delivery',
      'Compliance review on every piece',
    ],
  },
  {
    name: 'Practice Growth',
    tagline: 'Scale patient engagement',
    price: 997,
    weekly: 249,
    featured: true,
    badge: 'Most Popular',
    stripeEnvKey: 'NEXT_PUBLIC_STRIPE_GROWTH_URL',
    items: [
      '4 topic batches per month',
      'Each batch: article + 4 social posts + newsletter',
      'Patient handouts (2 of 4 batches)',
      'Content calendar with strategy rationale',
      'Monthly strategy call (30 min, documented)',
      'Welcome email sequence',
      '1 revision round per delivery',
      'Compliance review on every piece',
    ],
  },
  {
    name: 'Clinical Authority',
    tagline: 'Become the go-to name in your specialty',
    price: 1697,
    weekly: 424,
    featured: false,
    stripeEnvKey: 'NEXT_PUBLIC_STRIPE_AUTHORITY_URL',
    items: [
      '4 topic batches per month',
      'Each batch: article + 5 social posts + newsletter + handout',
      '2 short-form video scripts per batch',
      'Content calendar with strategy rationale',
      '2 strategy calls per month (30 min each)',
      'Quarterly content audit',
      'Priority turnaround (48-hour production)',
      '1 revision round per delivery',
      'Compliance review on every piece',
    ],
  },
] as const;

export const PRICING_PERIODS = {
  monthly: { label: 'Monthly', discount: 0 },
  quarterly: { label: 'Quarterly', discount: 0.10, savings: 'Save 10%' },
  biannual: { label: '6-Month', discount: 0.15, savings: 'Save 15%' },
} as const;

export const ADDONS = [
  { price: '$297/ea', name: 'Additional Topic Batch', desc: 'A full content set following your declared batch mix, beyond your monthly allocation.' },
  { price: '$397', name: 'Content Audit', desc: 'Full audit of your existing content with gap analysis and action plan. One-time.' },
  { price: '$97/mo', name: 'WordPress Publishing', desc: 'We publish approved content straight to your WordPress site, formatted and SEO-optimized. Free with Clinical Authority.' },
  { price: '$297', name: 'Welcome Email Sequence', desc: 'Branded 4-part welcome sequence for new patients or subscribers. One-time setup. Included with Growth and above.' },
] as const;

export const FAQS = [
  {
    q: 'What is a "topic batch"?',
    a: "Every month, we research topics that matter to your patients. For each topic, we create a complete content set: a blog article, social posts, a newsletter, and more depending on your plan. Everything is built from one research brief, so your content is cohesive across channels.",
  },
  {
    q: 'What do I actually get each month?',
    a: "It depends on your plan. Foundation gives you 2 blog articles, 6 social posts, and 2 newsletters per month. Practice Growth doubles that to 4 articles, 16 social posts, 4 newsletters, plus 2 patient handouts and a monthly strategy call. Clinical Authority gives you the most: 4 articles, 20 social posts, 4 newsletters, 4 handouts, video scripts, 2 strategy calls, and priority turnaround. Every plan includes your brand voice setup, a content calendar, and compliance review.",
  },
  {
    q: 'Which plan is right for me?',
    a: "If you're just getting started with content or want to test the waters, Foundation covers the essentials: blog + social + email, twice a month. Practice Growth is for practices ready to show up consistently and start building authority with more content, patient handouts, and a strategy call. Clinical Authority is for practices that want a full content engine: maximum output, video scripts, 2 strategy calls, quarterly audits, and priority turnaround.",
  },
  {
    q: 'Can I see samples before signing up?',
    a: "Yes. Visit DietDiscipline.com. Every piece of content on that site is produced by the same team and process that would serve your practice. We can also create a mini content pack in your specialty so you can see the quality firsthand.",
  },
  {
    q: "What if I don't like the content?",
    a: "Every delivery includes one round of revisions within 48 hours. Your brand voice profile helps us get it right from Day 1. If we don't hear back within 48 hours, we move forward so your publishing schedule stays on track, and we apply your feedback in the next cycle.",
  },
  {
    q: 'How long is the commitment?',
    a: 'Month to month. No long-term contracts. We keep clients by producing work worth paying for, not by locking them in.',
  },
  {
    q: 'How do you make sure content is compliant?',
    a: 'Every piece goes through multiple quality checks, including compliance review for medical claims, absolutist language, and scope-of-practice boundaries. All citations are verified against source material before delivery. We educate. We never diagnose, treat, or prescribe.',
  },
  {
    q: 'Will the content sound like me?',
    a: "During onboarding, you complete a voice profile questionnaire covering your tone, vocabulary preferences, and communication style. Every piece is written to match your specific voice, not a generic template.",
  },
  {
    q: 'What happens on strategy calls?',
    a: "Strategy calls are working sessions, not check-ins. We review what content performed, plan next month's topics, and adjust your voice or messaging as needed. You receive an updated content calendar within 24 hours of every call.",
  },
  {
    q: 'Can I customize my batch mix?',
    a: "Yes. During onboarding, you tell us how you want your batches structured. Need 2 articles instead of social posts? Want a handout instead of a newsletter? We customize the mix to fit your practice. Every batch must include at least 1 article (your SEO backbone), and all swaps are declared at onboarding or during strategy calls.",
  },
  {
    q: 'Do you offer discounts for longer commitments?',
    a: "Yes. Quarterly commitments save 10% per month, and 6-month commitments save 15%. All plans are still cancel-anytime with 14 days notice. No long-term contracts.",
  },
  {
    q: 'Can you publish directly to my website?',
    a: "Yes. We publish approved content straight to your WordPress site, formatted and SEO-optimized. We deliver publication-ready files you can upload in minutes, or we handle publishing directly.",
  },
  {
    q: 'Do you need patient data or PHI to work with us?',
    a: 'No. Hikima does not require protected health information (PHI) to deliver content services. Please do not send PHI by email. If a workflow ever requires PHI, we define a HIPAA-compliant process and required agreements before use.',
  },
] as const;

export const PRACTITIONER_TYPES = [
  'Dietitians',
  'Nutritionists',
  'Physical Therapists',
  'Functional Medicine',
  'Wellness Coaches',
  'Naturopaths',
] as const;

export const TRUST_STATS = [
  { value: '7', numericValue: 7, label: 'Days to first delivery', color: 'cyan' as const },
  { value: 'Wed', numericValue: null, label: 'Recurring delivery day', color: 'violet' as const },
  { value: '100%', numericValue: 100, label: 'Compliance-reviewed', color: 'cyan' as const },
  { value: '0', numericValue: 0, label: 'Medical claims published', color: 'violet' as const },
] as const;

export const STEPS = [
  {
    num: '01',
    title: 'Pick a plan & share your brand',
    body: 'Choose your tier and complete an 11-question voice profile about your practice tone, audience, and brand assets. Takes about 5 minutes.',
    time: 'Day 0: Sign up',
  },
  {
    num: '02',
    title: 'We build your content strategy',
    body: 'Your dedicated content team creates a monthly content calendar tailored to your niche, audience, and goals. Research-backed topics, compliance-screened before writing begins.',
    time: 'Days 1-5: Strategy & production',
  },
  {
    num: '03',
    title: 'Content delivered, ready to publish',
    body: 'Blog posts, social captions, emails, and handouts, all branded to your practice, reviewed for compliance, and formatted for your platforms. Published or handed off, your choice.',
    time: 'Day 7: First delivery',
  },
] as const;

export const PROOF_STATS = [
  { value: '5', label: 'Quality checks per piece', color: 'cyan' as const },
  { value: '100%', label: 'Citation-verified', color: 'violet' as const },
  { value: '0', label: 'Medical claims published', color: 'violet' as const },
  { value: 'Wed', label: 'Weekly delivery day', color: 'cyan' as const },
] as const;
