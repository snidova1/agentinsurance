'use client';

import { useState } from 'react';
import { HeroSectionEnhanced } from '@/components/HeroSectionEnhanced';
import { ProblemSection } from '@/components/ProblemSection';
import { SolutionSection } from '@/components/SolutionSection';
import { HowItWorksSection } from '@/components/HowItWorksSection';
import { StatsSection } from '@/components/StatsSection';
import { CTASection } from '@/components/CTASection';
import { InteractiveModals } from '@/components/InteractiveModals';

export default function Home() {
  const [activeModal, setActiveModal] = useState<'coverage' | 'demo' | null>(null);

  return (
    <main className="min-h-screen bg-black">
      <HeroSectionEnhanced
        onGetCoverage={() => setActiveModal('coverage')}
        onViewDemo={() => setActiveModal('demo')}
      />
      <ProblemSection />
      <SolutionSection />
      <HowItWorksSection />
      <StatsSection />
      <CTASection />
      <InteractiveModals active={activeModal} onClose={() => setActiveModal(null)} />
    </main>
  );
}
