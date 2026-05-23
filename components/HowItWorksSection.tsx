'use client';

import { motion } from 'framer-motion';

export function HowItWorksSection() {
  const steps = [
    {
      number: '01',
      title: 'Agent Registration',
      description: 'Connect your AI agent via API. We analyze its behavior, risk profile, and historical performance.',
      details: ['Agent ID verification', 'Performance history scan', 'Risk assessment', 'Coverage quote generated']
    },
    {
      number: '02',
      title: 'Policy Creation',
      description: 'Define coverage parameters and triggers. Smart contract is deployed with your custom terms.',
      details: ['Set coverage amount', 'Define failure triggers', 'Choose premium tier', 'Deploy smart contract']
    },
    {
      number: '03',
      title: 'Monitoring',
      description: 'Our oracle network monitors your agent 24/7. Every action is tracked and verified on-chain.',
      details: ['Real-time monitoring', 'Oracle verification', 'Performance tracking', 'Anomaly detection']
    },
    {
      number: '04',
      title: 'Instant Payout',
      description: 'When a trigger condition is met, smart contract automatically verifies and releases funds.',
      details: ['Trigger detected', 'Oracle consensus', 'Smart contract execution', 'USDC payout (< 60 seconds)']
    }
  ];

  return (
    <section className="relative py-32 px-6 overflow-hidden">
      {/* Background */}
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
            How It Works
          </h2>
          <p className="body-lg text-[#8a8f98] max-w-2xl mx-auto">
            Four simple steps from registration to payout. Fully automated, fully transparent.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="space-y-12">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
            >
              {/* Left: Number and title */}
              <div className={i % 2 === 1 ? 'md:order-2' : ''}>
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="text-6xl font-medium text-[#5e6ad2] tracking-[-1.056px]" style={{ fontFeatureSettings: '"cv01", "ss03"' }}>
                      {step.number}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="heading-lg text-[#f7f8f8] mb-3">
                      {step.title}
                    </h3>
                    <p className="body-md text-[#8a8f98]">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Right: Details */}
              <div className={i % 2 === 1 ? 'md:order-1' : ''}>
                <div className="p-6 rounded-lg bg-white/[0.02] border border-white/[0.08] backdrop-blur-linear">
                  <ul className="space-y-3">
                    {step.details.map((detail, j) => (
                      <motion.li
                        key={j}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 + j * 0.05, duration: 0.5 }}
                        className="flex items-center gap-3 text-[#d0d6e0]"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-[#7170ff]" />
                        <span className="body-sm">{detail}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Connector line */}
              {i < steps.length - 1 && (
                <motion.div
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 + 0.3, duration: 0.6 }}
                  className="hidden md:block absolute left-1/2 -translate-x-1/2 w-0.5 h-24 bg-gradient-to-b from-[#5e6ad2] to-transparent origin-top"
                  style={{ marginTop: '100px' }}
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
