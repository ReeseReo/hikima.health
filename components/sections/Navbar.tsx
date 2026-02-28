'use client';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { Button } from '@/components/ui/Button';
const links = [
  { href: '#how-it-works', label: 'How It Works' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#faq', label: 'FAQ' },
];
export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-[100] backdrop-blur-[20px] backdrop-saturate-[1.4] bg-bg/70 border-b border-border/50">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
        <a href="#" className="font-sora font-semibold text-xl">Hiki<span className="text-accent">ma</span><span className="inline-block size-1.5 rounded-full bg-violet ml-1.5" /></a>
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link key={l.label} href={l.href} className="text-sm text-text-2 hover:text-text relative after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-gradient-to-r after:from-accent after:to-violet hover:after:w-full after:transition-all after:duration-300">
              {l.label}
            </Link>
          ))}
          <Button href="#pricing" className="px-5 py-2.5">Get Started</Button>
        </nav>
        <button className="md:hidden text-text" onClick={() => setOpen((v) => !v)} aria-label="Toggle Menu">
          <motion.div animate={open ? 'open' : 'closed'} className="w-6 h-6 relative">
            <motion.span variants={{ closed: { rotate: 0, y: -5 }, open: { rotate: 45, y: 0 } }} className="absolute left-0 top-1/2 w-6 h-0.5 bg-text block" />
            <motion.span variants={{ closed: { opacity: 1 }, open: { opacity: 0 } }} className="absolute left-0 top-1/2 w-6 h-0.5 bg-text block" />
            <motion.span variants={{ closed: { rotate: 0, y: 5 }, open: { rotate: -45, y: 0 } }} className="absolute left-0 top-1/2 w-6 h-0.5 bg-text block" />
          </motion.div>
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} transition={{ duration: 0.3 }} className="md:hidden fixed top-20 right-0 h-[calc(100vh-80px)] w-72 bg-bg/80 backdrop-blur-xl border-l border-border p-8">
            {links.map((l, i) => (
              <motion.div key={l.label} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05 }}>
                <Link href={l.href} onClick={() => setOpen(false)} className="block py-3 text-text-2">{l.label}</Link>
              </motion.div>
            ))}
            <div className="pt-4"><Button href="#pricing" className="w-full justify-center">Get Started</Button></div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
