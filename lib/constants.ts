export const SITE = {
  name: 'Hikima',
  domain: 'hikima.health',
  email: 'hello@hikima.health',
  url: 'https://hikima.health',
  tagline: 'Content strategy for health practices',
  meaning: 'Wisdom — Hausa',
} as const;

export const TIERS = [
  {
    name: 'Starter',
    price: 597,
    weekly: 149,
    featured: false,
    stripeEnvKey: 'NEXT_PUBLIC_STRIPE_STARTER_URL',
    items: [
      '2 blog posts per month',
      '8 social media captions',
      '1 email newsletter',
      'Monthly content calendar',
      'Voice & brand setup',
      'Compliance review on every piece',
    ],
  },
  {
    name: 'Growth',
    price: 1197,
    weekly: 299,
    featured: true,
    badge: 'Most Popular',
    stripeEnvKey: 'NEXT_PUBLIC_STRIPE_GROWTH_URL',
    items: [
      '4 blog posts per month',
      '16 social media captions',
      '2 email newsletters',
      '2 branded patient handouts',
      'Monthly strategy call',
      'Welcome email sequence',
      'Compliance review on every piece',
    ],
  },
  {
    name: 'Authority',
    price: 1897,
    weekly: 474,
    featured: false,
    stripeEnvKey: 'NEXT_PUBLIC_STRIPE_AUTHORITY_URL',
    items: [
      '6 blog posts per month',
      '24 social media captions',
      '4 email newsletters',
      '4 branded patient handouts',
      '2 strategy calls per month',
      'Quarterly content audit',
      'Priority turnaround',
      'Compliance review on every piece',
    ],
  },
] as const;

export const ADDONS = [
  { price: '$397', name: 'Content Audit', desc: 'Full audit of your existing content with gap analysis and action plan. One-time.' },
  { price: '$147/mo', name: 'WordPress Publishing', desc: 'We publish directly to your WordPress site — SEO-optimized, formatted, scheduled.' },
  { price: '$200/ea', name: 'Additional Blog Post', desc: 'Extra blog posts beyond your tier allocation. Same quality, same process.' },
  { price: '$75/ea', name: 'Additional Handout', desc: 'Extra branded patient handouts for your practice or client education.' },
] as const;

export const FAQS = [
  {
    q: 'Can I see samples before signing up?',
    a: "Yes — visit DietDiscipline.com. Every piece of content on that site is produced by the same team and process that would serve your practice. That's your live portfolio.",
  },
  {
    q: "What if I don't like the content?",
    a: "Every delivery includes one round of revisions within 48 hours. Your brand voice profile ensures we get it right from Day 1. If we haven't heard from you in 48 hours, the delivery is approved and we move to next week's batch.",
  },
  {
    q: 'How long is the commitment?',
    a: 'Month to month. No long-term contracts. We keep clients by producing work worth paying for, not by locking them in.',
  },
  {
    q: 'How do you make sure content is compliant?',
    a: 'Every piece is reviewed for medical claims, absolutist language, and scope-of-practice boundaries before delivery. We educate — we never diagnose, treat, or prescribe.',
  },
  {
    q: 'Will the content sound like me?',
    a: "During onboarding, you complete a voice profile questionnaire — your tone, vocabulary preferences, and communication style. Every piece is written to match your specific voice, not a generic template.",
  },
  {
    q: 'What platforms do you support?',
    a: 'Blog content formatted for WordPress or any CMS. Social captions for Instagram, Facebook, and LinkedIn. Email templates for Mailchimp and ConvertKit. Patient handouts as branded PDFs.',
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
  { value: '0', numericValue: 0, label: 'Medical claims. Ever.', color: 'violet' as const },
] as const;

export const STEPS = [
  {
    num: '01',
    title: 'Pick a plan & share your brand',
    body: 'Choose your tier and complete a short questionnaire about your practice voice, audience, and brand assets (logo, colors, fonts). Takes about 15 minutes.',
    time: 'Day 0 — Sign up',
  },
  {
    num: '02',
    title: 'We build your content strategy',
    body: 'Your dedicated content team creates a monthly content calendar tailored to your niche, audience, and goals. Research-backed topics, compliance-screened before writing begins.',
    time: 'Days 1–5 — Strategy & production',
  },
  {
    num: '03',
    title: 'Content delivered, ready to publish',
    body: 'Blog posts, social captions, emails, and handouts — all branded to your practice, reviewed for compliance, and formatted for your platforms. Published or handed off, your choice.',
    time: 'Day 7 — First delivery',
  },
] as const;

export const PROOF_STATS = [
  { value: 'Weekly', label: 'Content published', color: 'cyan' as const },
  { value: '5-Part', label: 'Evidence-based template', color: 'violet' as const },
  { value: '0', label: 'Medical claims', color: 'violet' as const },
  { value: '100%', label: 'Actionable content', color: 'cyan' as const },
] as const;
