'use client';

import { motion } from 'framer-motion';

export function SolutionSection() {
  const features = [
    { emoji: '🤖', title: 'Made for AI', desc: 'Built specifically for AI agent quirks', color: 'from-purple-300 to-pink-300' },
    { emoji: '⚡', title: 'Lightning Fast', desc: 'Get paid in 60 seconds, not 60 days', color: 'from-yellow-300 to-orange-300' },
    { emoji: '🎯', title: 'Smart Triggers', desc: 'On-chain conditions auto-payout', color: 'from-blue-300 to-cyan-300' },
    { emoji: '🌟', title: 'Smart Pricing', desc: 'AI scores risk, you save money', color: 'from-pink-300 to-purple-300' },
    { emoji: '🌈', title: 'Works Everywhere', desc: 'Solana, Ethereum, you name it', color: 'from-green-300 to-blue-300' },
    { emoji: '💵', title: 'Stable Coins', desc: 'USDC for premiums and payouts', color: 'from-orange-300 to-yellow-300' },
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
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', delay: 0.2 }}
            className="inline-block mb-4 text-6xl"
          >
            ✨
          </motion.div>
          <h2 className="display-sm md:display-md gradient-text mb-4">
            The Magic Solution
          </h2>
          <p className="body-lg text-purple-700/70 max-w-2xl mx-auto font-medium">
            Smart contracts + AI risk scoring = insurance that actually works for bots 🪄
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
                className={`w-16 h-16 rounded-3xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 text-4xl shadow-md`}
              >
                {feature.emoji}
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
