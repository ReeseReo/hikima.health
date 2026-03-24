'use client';
import Link from 'next/link';
import { useState } from 'react';

const VOICE_WORDS = [
  'Warm', 'Clinical', 'Direct', 'Motivational', 'Conversational',
  'Premium', 'Reassuring', 'Bold', 'Educational', 'Empathetic',
];

export default function VoiceProfile() {
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    practiceName: '',
    practitionerName: '',
    email: '',
    voiceSample: '',
    voiceWords: [] as string[],
    neverSay: '',
    contentLinks: '',
    brandPromise: '',
    differentiator: '',
    patientQuestions: '',
    offLimits: '',
  });

  const update = (field: string, value: string | string[]) => setForm((f) => ({ ...f, [field]: value }));

  const toggleWord = (word: string) => {
    const current = form.voiceWords;
    if (current.includes(word)) {
      update('voiceWords', current.filter((w) => w !== word));
    } else if (current.length < 3) {
      update('voiceWords', [...current, word]);
    }
  };

  const steps = [
    {
      title: 'About your practice',
      fields: (
        <>
          <Field label="Practice name" required>
            <input type="text" value={form.practiceName} onChange={(e) => update('practiceName', e.target.value)} required placeholder="Sunrise Nutrition Clinic" className="form-input" />
          </Field>
          <Field label="Your name" required>
            <input type="text" value={form.practitionerName} onChange={(e) => update('practitionerName', e.target.value)} required placeholder="Dr. Sarah Chen, RD" className="form-input" />
          </Field>
          <Field label="Email" required>
            <input type="email" value={form.email} onChange={(e) => update('email', e.target.value)} required placeholder="sarah@yourpractice.com" className="form-input" />
          </Field>
        </>
      ),
      valid: form.practiceName && form.practitionerName && form.email,
    },
    {
      title: 'Your voice',
      fields: (
        <>
          <Field label="Write a short message (4-6 sentences) to a new patient who just booked their first appointment" required hint="Write it the way you'd actually talk. That natural tone is what we want to capture.">
            <textarea value={form.voiceSample} onChange={(e) => update('voiceSample', e.target.value)} required rows={5} placeholder="Hey! So glad you booked with us. Here's what to expect at your first visit..." className="form-input resize-none" />
          </Field>
          <Field label="Pick 3 words that describe how you want your content to feel" required>
            <div className="flex flex-wrap gap-2">
              {VOICE_WORDS.map((w) => (
                <button
                  key={w}
                  type="button"
                  onClick={() => toggleWord(w)}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium border transition-all ${
                    form.voiceWords.includes(w)
                      ? 'bg-accent/20 border-accent text-accent'
                      : 'bg-transparent border-border text-text-muted hover:border-text-dim'
                  }`}
                >
                  {w}
                </button>
              ))}
            </div>
            {form.voiceWords.length > 0 && (
              <p className="text-xs text-accent mt-2">{form.voiceWords.length}/3 selected</p>
            )}
          </Field>
          <Field label="What would you NEVER want us to write in your name?" required hint="Topics, phrases, tones, claims. Example: 'Never promise weight loss', 'No clickbait headlines'">
            <textarea value={form.neverSay} onChange={(e) => update('neverSay', e.target.value)} required rows={3} placeholder="Don't use the word 'detox', never promise specific results..." className="form-input resize-none" />
          </Field>
          <Field label="Links to content you've written that sounds like you" hint="Blog posts, emails, social captions. Helps us match your voice faster than any checklist. Skip if none.">
            <textarea value={form.contentLinks} onChange={(e) => update('contentLinks', e.target.value)} rows={2} placeholder="https://yoursite.com/blog/my-post" className="form-input resize-none" />
          </Field>
        </>
      ),
      valid: form.voiceSample && form.voiceWords.length === 3 && form.neverSay,
    },
    {
      title: 'Your brand and content',
      fields: (
        <>
          <Field label="In one sentence, what's the promise you make to your patients?" required hint="Not a mission statement. The thing your best patients would say you do for them.">
            <input type="text" value={form.brandPromise} onChange={(e) => update('brandPromise', e.target.value)} required placeholder="I help busy professionals fix their gut without giving up the foods they love." className="form-input" />
          </Field>
          <Field label="What makes you different from other practices in your area?" required hint="Your approach, background, method, or the way you work with patients.">
            <textarea value={form.differentiator} onChange={(e) => update('differentiator', e.target.value)} required rows={3} placeholder="We focus on root-cause nutrition, not quick fixes..." className="form-input resize-none" />
          </Field>
          <Field label="What 3 topics do your patients ask about most?" required hint="The questions you answer over and over. These become your first content topics.">
            <textarea value={form.patientQuestions} onChange={(e) => update('patientQuestions', e.target.value)} required rows={3} placeholder="How to read a nutrition label, best supplements for energy, is intermittent fasting safe?" className="form-input resize-none" />
          </Field>
          <Field label="Any topics completely off-limits for your content?" hint="Leave blank if none.">
            <textarea value={form.offLimits} onChange={(e) => update('offLimits', e.target.value)} rows={2} placeholder="Weight loss promises, specific supplement brands..." className="form-input resize-none" />
          </Field>
        </>
      ),
      valid: form.brandPromise && form.differentiator && form.patientQuestions,
    },
  ];

  const currentStep = steps[step];
  const isLast = step === steps.length - 1;

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!isLast) {
      setStep(step + 1);
      return;
    }

    // Send via mailto until API is wired
    const subject = encodeURIComponent(`Voice Profile: ${form.practiceName}`);
    const body = encodeURIComponent(
      `Voice Profile Submission\n\n` +
      `Practice: ${form.practiceName}\n` +
      `Name: ${form.practitionerName}\n` +
      `Email: ${form.email}\n\n` +
      `--- VOICE ---\n` +
      `Sample: ${form.voiceSample}\n\n` +
      `Voice feel: ${form.voiceWords.join(', ')}\n\n` +
      `Never say: ${form.neverSay}\n\n` +
      `Content links: ${form.contentLinks || 'None'}\n\n` +
      `--- BRAND ---\n` +
      `Promise: ${form.brandPromise}\n\n` +
      `Differentiator: ${form.differentiator}\n\n` +
      `Patient questions: ${form.patientQuestions}\n\n` +
      `Off-limits: ${form.offLimits || 'None'}`
    );
    window.open(`mailto:hello@hikima.health?subject=${subject}&body=${body}`, '_self');
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <main className="max-w-xl mx-auto px-6 py-24 text-center">
        <div className="text-5xl mb-6">✓</div>
        <h1 className="font-sora text-3xl font-semibold mb-3 text-accent">Voice profile submitted</h1>
        <p className="text-text-2 mb-8">We&apos;ll use this to build your first content batch. You&apos;ll see a draft within 7 days.</p>
        <Link href="/" className="text-accent hover:underline text-sm">Back to home</Link>
      </main>
    );
  }

  return (
    <main className="max-w-xl mx-auto px-6 py-24">
      <Link href="/" className="text-sm text-text-dim hover:text-accent transition-colors">&larr; Back to home</Link>

      <div className="mt-8 mb-10">
        <p className="font-mono text-xs tracking-widest uppercase text-accent mb-3">VOICE PROFILE</p>
        <h1 className="font-sora text-3xl font-semibold mb-2">Let&apos;s capture your voice</h1>
        <p className="text-text-2 text-sm">Takes about 5 minutes. We use this to match your voice so content sounds like you, not a content agency.</p>
      </div>

      {/* Progress */}
      <div className="flex gap-2 mb-8">
        {steps.map((s, i) => (
          <div key={s.title} className="flex-1">
            <div className={`h-1 rounded-full transition-colors ${i <= step ? 'bg-accent' : 'bg-border'}`} />
            <p className={`text-[10px] mt-1.5 font-mono ${i <= step ? 'text-accent' : 'text-text-dim'}`}>{s.title}</p>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {currentStep.fields}
        <div className="flex gap-3 pt-4">
          {step > 0 && (
            <button type="button" onClick={() => setStep(step - 1)} className="px-6 py-3 rounded-lg text-sm font-semibold border border-border text-text-muted hover:text-text hover:border-text-dim transition-colors">
              Back
            </button>
          )}
          <button
            type="submit"
            disabled={!currentStep.valid}
            className="flex-1 bg-accent text-background font-semibold py-3 rounded-lg text-sm hover:bg-accent/90 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
          >
            {isLast ? 'Submit Voice Profile' : 'Continue'}
          </button>
        </div>
      </form>
    </main>
  );
}

function Field({ label, required, hint, children }: { label: string; required?: boolean; hint?: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="block text-sm text-text mb-1.5">
        {label}
        {required && <span className="text-accent ml-1">*</span>}
      </label>
      {hint && <p className="text-xs text-text-dim mb-2">{hint}</p>}
      {children}
      <style jsx global>{`
        .form-input {
          width: 100%;
          background: var(--bg, #0C0D12);
          border: 1px solid var(--border, #2A2B35);
          border-radius: 0.5rem;
          padding: 0.75rem 1rem;
          font-size: 0.875rem;
          color: var(--text, #E0E0E0);
          transition: border-color 0.2s;
        }
        .form-input::placeholder {
          color: rgba(255,255,255,0.25);
        }
        .form-input:focus {
          outline: none;
          border-color: var(--accent, #22D3EE);
        }
      `}</style>
    </div>
  );
}
