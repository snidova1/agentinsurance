'use client';

import { motion } from 'framer-motion';

export function HowItWorksSection() {
  const steps = [
    {
      number: "01",
      title: "Agent Registration",
      description: "Connect your AI agent via API. We analyze its behavior, risk profile, and historical performance.",
      details: ["Agent ID verification", "Performance history scan", "Risk assessment", "Coverage quote generated"]
    },
    {
      number: "02",
      title: "Policy Creation",
      description: "Define coverage parameters and triggers. Smart contract is deployed with your custom terms.",
      details: ["Set coverage amount", "Define failure triggers", "Choose premium tier", "Deploy smart contract"]
    },
    {
      number: "03",
      title: "Monitoring",
      description: "Our oracle network monitors your agent 24/7. Every action is tracked and verified on-chain.",
      details: ["Real-time monitoring", "Oracle verification", "Performance tracking", "Anomaly detection"]
    },
    {
      number: "04",
      title: "Instant Payout",
      description: "When a trigger condition is met, smart contract automatically verifies and releases funds.",
      details: ["Trigger detected", "Oracle consensus", "Smart contract execution", "USDC payout (< 60 seconds)"]
    }
  ];

  return (
    <section className="relative py-32 px-6 bg-gradient-to-b from-black via-purple-950/10 to-black">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            How It <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">Works</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Four simple steps from registration to payout. Fully automated, fully transparent.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="space-y-24">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
            >
              {/* Content */}
              <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                <div className="text-7xl font-bold text-white/5 mb-4">{step.number}</div>
                <h3 className="text-4xl font-bold mb-6">{step.title}</h3>
                <p className="text-xl text-gray-400 mb-8 leading-relaxed">{step.description}</p>
                
                {/* Details list */}
                <div className="space-y-3">
                  {step.details.map((detail, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + i * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <div className="w-2 h-2 rounded-full bg-purple-500" />
                      <span className="text-gray-300">{detail}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Visual */}
              <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="relative aspect-square bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-white/10 rounded-3xl p-8 backdrop-blur-sm overflow-hidden"
                >
                  {/* Animated background pattern */}
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:32px_32px]" />
                  </div>

                  {/* Icon/Illustration placeholder */}
                  <div className="relative z-10 h-full flex items-center justify-center">
                    <div className="text-9xl opacity-50">
                      {index === 0 && "🤖"}
                      {index === 1 && "📋"}
                      {index === 2 && "👁️"}
                      {index === 3 && "💰"}
                    </div>
                  </div>

                  {/* Floating elements */}
                  <motion.div
                    animate={{
                      y: [0, -10, 0],
                      opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute top-8 right-8 w-24 h-24 bg-purple-500/20 rounded-full blur-2xl"
                  />
                  
                  <motion.div
                    animate={{
                      y: [0, 10, 0],
                      opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1,
                    }}
                    className="absolute bottom-8 left-8 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl"
                  />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Timeline connector */}
        <div className="hidden md:block absolute left-1/2 top-32 bottom-32 w-px bg-gradient-to-b from-transparent via-purple-500/50 to-transparent" />
      </div>
    </section>
  );
}
