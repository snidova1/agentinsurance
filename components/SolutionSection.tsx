'use client';

import { motion } from 'framer-motion';
import { BotIcon, ZapIcon, TargetIcon, ChartIcon, GlobeIcon, CoinIcon } from './Icons';

export function SolutionSection() {
  const features = [
    { Icon: BotIcon, title: 'Made for AI', desc: 'Built specifically for AI agent quirks', color: 'from-purple-300 to-pink-300', iconColor: 'text-purple-700' },
    { Icon: ZapIcon, title: 'Lightning Fast', desc: 'Get paid in 60 seconds, not 60 days', color: 'from-yellow-300 to-orange-300', iconColor: 'text-orange-700' },
    { Icon: TargetIcon, title: 'Smart Triggers', desc: 'On-chain conditions auto-payout', color: 'from-blue-300 to-cyan-300', iconColor: 'text-blue-700' },
    { Icon: ChartIcon, title: 'Smart Pricing', desc: 'AI scores risk, you save money', color: 'from-pink-300 to-purple-300', iconColor: 'text-pink-700' },
    { Icon: GlobeIcon, title: 'Works Everywhere', desc: 'Solana, Ethereum, you name it', color: 'from-green-300 to-blue-300', iconColor: 'text-green-700' },
    { Icon: CoinIcon, title: 'Stable Coins', desc: 'USDC for premiums and payouts', color: 'from-orange-300 to-yellow-300', iconColor: 'text-orange-700' },
  ];

  return (
    <section className="relative py-32 px-6 overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="display-sm md:display-md gradient-text mb-4">
            The Magic Solution
          </h2>
          <p className="body-lg text-purple-700/70 max-w-2xl mx-auto font-medium">
            Smart contracts + AI risk scoring = insurance that actually works for bots
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, type: 'spring' }}
              whileHover={{ y: -6, rotate: i % 2 === 0 ? 1 : -1 }}
              className="card-cute p-6 group"
            >
              <motion.div
                whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                transition={{ duration: 0.5 }}
                className={`w-16 h-16 rounded-3xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 shadow-md`}
              >
                <feature.Icon className={feature.iconColor} size={32} />
              </motion.div>
              <h3 className="heading-md text-purple-900 mb-2">{feature.title}</h3>
              <p className="body-sm text-purple-700/70">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
