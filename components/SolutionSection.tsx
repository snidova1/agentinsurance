'use client';

import { motion } from 'framer-motion';
import { BotIcon, ZapIcon, ChartIcon, TargetIcon, LinkIcon, CoinIcon } from './Icons';

export function SolutionSection() {
  const features = [
    {
      Icon: BotIcon,
      title: 'Agent-Native Coverage',
      description: 'Insurance designed specifically for autonomous AI agents'
    },
    {
      Icon: ZapIcon,
      title: 'Instant Payouts',
      description: 'Smart contracts verify and pay claims in under 60 seconds'
    },
    {
      Icon: ChartIcon,
      title: 'Parametric Triggers',
      description: 'Objective, on-chain conditions trigger automatic payouts'
    },
    {
      Icon: TargetIcon,
      title: 'Risk Scoring',
      description: 'AI-powered risk assessment for accurate premium pricing'
    },
    {
      Icon: LinkIcon,
      title: 'Cross-Chain',
      description: 'Coverage works across Solana, Ethereum, and other chains'
    },
    {
      Icon: CoinIcon,
      title: 'Stablecoin Native',
      description: 'Premiums and payouts in USDC for stability'
    }
  ];

  return (
    <section className="relative py-32 px-6 overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ Icon, title, description }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.6 }}
              whileHover={{ y: -4 }}
              className="group p-6 rounded-lg bg-white/[0.02] border border-white/[0.08] backdrop-blur-linear hover:bg-white/[0.04] hover:border-white/[0.12] transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#5e6ad2]/20 to-[#7170ff]/10 border border-white/[0.08] flex items-center justify-center mb-4 text-[#7170ff] group-hover:scale-110 transition-transform">
                <Icon size={22} />
              </div>
              <h3 className="heading-md text-[#f7f8f8] mb-2">
                {title}
              </h3>
              <p className="body-sm text-[#8a8f98]">
                {description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
