'use client';

import { motion } from 'framer-motion';

export function HowItWorksSection() {
  const steps = [
    {
      number: '1',
      emoji: '🤖',
      title: 'Meet Your Bot',
      description: 'Connect your AI buddy. We\'ll learn its vibe, quirks, and superpowers!',
      color: 'from-purple-400 to-pink-400',
    },
    {
      number: '2',
      emoji: '📋',
      title: 'Pick Your Plan',
      description: 'Choose coverage amount, set rules. Smart contract handles the rest!',
      color: 'from-pink-400 to-orange-400',
    },
    {
      number: '3',
      emoji: '👀',
      title: 'We\'re Watching',
      description: 'Our oracle network keeps an eye on things 24/7. No nap breaks!',
      color: 'from-blue-400 to-purple-400',
    },
    {
      number: '4',
      emoji: '💸',
      title: 'Boom! Paid!',
      description: 'Something goes wrong? USDC hits your wallet in under 60 seconds.',
      color: 'from-green-400 to-blue-400',
    },
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
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
            className="inline-block mb-4 text-6xl"
          >
            🪄
          </motion.div>
          <h2 className="display-sm md:display-md gradient-text mb-4">
            How It Works
          </h2>
          <p className="body-lg text-purple-700/70 max-w-2xl mx-auto font-medium">
            4 super simple steps. No paperwork, no hassle, just magic ✨
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, type: 'spring' }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="relative card-cute p-6 text-center"
            >
              {/* Step number badge */}
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 + 0.3, type: 'spring' }}
                className={`absolute -top-4 -right-4 w-12 h-12 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center font-extrabold text-white text-lg shadow-lg`}
              >
                {step.number}
              </motion.div>

              {/* Big emoji */}
              <motion.div
                animate={{ y: [0, -8, 0], rotate: [0, 5, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: i * 0.5 }}
                className={`mx-auto w-24 h-24 rounded-3xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-4 text-6xl shadow-md`}
              >
                {step.emoji}
              </motion.div>

              <h3 className="heading-md text-purple-900 mb-2">
                {step.title}
              </h3>
              <p className="body-sm text-purple-700/70">
                {step.description}
              </p>

              {/* Arrow to next */}
              {i < steps.length - 1 && (
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 + 0.5 }}
                  className="hidden lg:block absolute top-1/2 -right-6 -translate-y-1/2 text-3xl z-10"
                >
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    💜
                  </motion.span>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
