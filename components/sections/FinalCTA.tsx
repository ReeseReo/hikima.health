import { Button } from '@/components/ui/Button';
export function FinalCTA() {
  return (
    <section className="py-[88px] px-6 md:px-12 text-center relative overflow-hidden">
      <div className="absolute left-1/2 -translate-x-1/2 bottom-10 w-[800px] h-[400px] blur-[30px] pointer-events-none" style={{ background: 'radial-gradient(ellipse, rgba(34,211,238,0.04), rgba(167,139,250,0.03) 40%, transparent 70%)' }} />
      <div className="max-w-[1280px] mx-auto relative z-10">
        <h2 className="font-sora text-4xl md:text-6xl mb-4">Your practice deserves<br /><span className="bg-gradient-to-r from-accent to-violet bg-clip-text text-transparent">wiser content</span></h2>
        <p className="max-w-2xl mx-auto text-text-2 mb-8">You&apos;re 7 days from your first delivery. Pick a plan, share your brand, and let Hikima handle the rest.</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button href="#pricing">Choose Your Plan</Button>
          <Button href="#proof" variant="secondary">See Our Work First →</Button>
        </div>
      </div>
    </section>
  );
}
