import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t border-border py-10 text-center px-6">
      <div className="font-sora text-xl">Hiki<span className="text-accent">ma</span><span className="inline-block size-1.5 rounded-full bg-violet ml-1.5" /></div>
      <p className="font-mono text-[10px] tracking-widest uppercase text-violet mt-2">Wisdom — Hausa</p>
      <p className="text-text-dim text-sm mt-3">Content strategy for health & wellness practitioners · hello@hikima.health</p>
      <p className="text-text-dim text-xs mt-2">Do not send protected health information (PHI) by email.</p>
      <div className="flex justify-center gap-4 mt-4">
        <Link href="/privacy" className="text-text-dim text-xs hover:text-accent transition-colors">Privacy Policy</Link>
        <span className="text-text-dim text-xs">·</span>
        <Link href="/terms" className="text-text-dim text-xs hover:text-accent transition-colors">Terms of Service</Link>
      </div>
    </footer>
  );
}
