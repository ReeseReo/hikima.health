import { Navbar } from '@/components/sections/Navbar';
import { Hero } from '@/components/sections/Hero';
import { BuiltFor } from '@/components/sections/BuiltFor';
import { TrustBar } from '@/components/sections/TrustBar';
import { Divider } from '@/components/ui/Divider';
import { HowItWorks } from '@/components/sections/HowItWorks';
import { Proof } from '@/components/sections/Proof';
import { Pricing } from '@/components/sections/Pricing';
import { AddOns } from '@/components/sections/AddOns';
import { FAQ } from '@/components/sections/FAQ';
import { FinalCTA } from '@/components/sections/FinalCTA';
import { Footer } from '@/components/sections/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <BuiltFor />
      <TrustBar />
      <Divider />
      <HowItWorks />
      <Divider />
      <Proof />
      <Pricing />
      <AddOns />
      <Divider />
      <FAQ />
      <Divider />
      <FinalCTA />
      <Footer />
    </>
  );
}
