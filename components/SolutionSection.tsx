'use client';

import { motion } from 'framer-motion';

export function SolutionSection() {
  const features = [
    {
      icon: '🤖',
      title: 'Agent-Native Coverage',
      description: 'Insurance designed specifically for autonomous AI agents'
    },
    {
      icon: '⚡',
      title: 'Instant Payouts',
      description: 'Smart contracts verify and pay claims in under 60 seconds'
    },
    {
      icon: '📊',
      title: 'Parametric Triggers',
      description: 'Objective, on-chain conditions trigger automatic payouts'
    },
    {
      icon: '🎯',
      title: 'Risk Scoring',
      description: 'AI-powered risk assessment for accurate premium pricing'
    },
    {
      icon: '🔗',
      title: 'Cross-Chain',
      description: 'Coverage works across Solana, Ethereum, and other chains'
    },
    {
      icon: '💵',
      title: 'Stablecoin Native',
      description: 'Premiums and payouts in USDC for stability'
    }
  ];

  return (
    <section className="relative py-32 px-6 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#08090a] via-[#0f1011] to-[#08090a]" />
      
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="display-sm text-[#f7f8f8] mb-4" style={{ fontFeatureSettings: '"cv01", "ss03"' }}>
            The Solution
          </h2>
          <p className="body-lg text-[#8a8f98] max-w-2xl mx-auto">
            AgentInsurance provides parametric, smart contract-based coverage that protects businesses 
            from AI agent failures with instant, verifiable payouts.
          </p>
        </motion.div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.6 }}
              whileHover={{ y: -4, borderColor: 'rgba(255,255,255,0.12)' }}
              className="group p-6 rounded-lg bg-white/[0.02] border border-white/[0.08] backdrop-blur-linear hover:bg-white/[0.04] transition-all duration-300"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="heading-md text-[#f7f8f8] mb-2">
                {feature.title}
              </h3>
              <p className="body-sm text-[#8a8f98]">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
