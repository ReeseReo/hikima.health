import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="max-w-xl mx-auto px-6 py-24 text-center">
      <p className="font-mono text-xs tracking-widest uppercase text-accent mb-4">404</p>
      <h1 className="font-sora text-4xl font-semibold mb-3">Page not found</h1>
      <p className="text-text-2 mb-8">The page you&apos;re looking for doesn&apos;t exist or has been moved.</p>
      <Link href="/" className="inline-flex items-center justify-center bg-accent text-background font-semibold px-6 py-3 rounded-lg text-sm hover:bg-accent/90 transition-colors">
        Back to home
      </Link>
    </main>
  );
}
