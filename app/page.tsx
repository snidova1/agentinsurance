'use client';

import { HeroSection } from '@/components/HeroSection';
import { ProblemSection } from '@/components/ProblemSection';
import { SolutionSection } from '@/components/SolutionSection';
import { HowItWorksSection } from '@/components/HowItWorksSection';
import { StatsSection } from '@/components/StatsSection';
import { CTASection } from '@/components/CTASection';

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <HowItWorksSection />
      <StatsSection />
      <CTASection />
    </main>
  );
}
