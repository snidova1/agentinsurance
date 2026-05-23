'use client';

import { motion } from 'framer-motion';

export function ProblemSection() {
  const problems = [
    {
      emoji: '😱',
      title: 'Oops, $$$ Gone!',
      description: 'A tiny AI mistake can wipe out millions in seconds. Yikes!',
      color: 'from-red-300 to-pink-300',
    },
    {
      emoji: '🚫',
      title: 'No One Covers AI',
      description: 'Old-school insurance has no clue what an AI agent even is.',
      color: 'from-yellow-300 to-orange-300',
    },
    {
      emoji: '🐌',
      title: 'Claims Take Forever',
      description: 'Weeks of paperwork while your business bleeds money.',
      color: 'from-blue-300 to-purple-300',
    },
  ];

  return (
    <section className="relative py-32 px-6 overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', delay: 0.2 }}
            className="inline-block mb-4 text-6xl"
          >
            🤔
          </motion.div>
          <h2 className="display-sm md:display-md gradient-text mb-4">
            The Problem
          </h2>
          <p className="body-lg text-purple-700/70 max-w-2xl mx-auto font-medium">
            AI agents are getting smarter and bolder. But when they goof up... yikes! 💸
          </p>
        </motion.div>

        {/* Problem cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {problems.map((problem, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30, rotate: -2 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, type: 'spring' }}
              whileHover={{ y: -8, rotate: i % 2 === 0 ? 1 : -1 }}
              className="card-cute p-6"
            >
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
                className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${problem.color} flex items-center justify-center mb-4 text-5xl shadow-md`}
              >
                {problem.emoji}
              </motion.div>
              <h3 className="heading-md text-purple-900 mb-2">
                {problem.title}
              </h3>
              <p className="body-sm text-purple-700/70">
                {problem.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Big stat */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: 'spring' }}
          className="relative card-cute p-10 text-center overflow-hidden"
          style={{ background: 'linear-gradient(135deg, rgba(167,139,250,0.15), rgba(236,72,153,0.15))' }}
        >
          {/* Floating shapes */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className="absolute -top-10 -right-10 text-8xl opacity-20"
          >
            💸
          </motion.div>
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
            className="absolute -bottom-10 -left-10 text-8xl opacity-20"
          >
            💰
          </motion.div>

          <div className="relative z-10">
            <p className="text-sm font-bold uppercase tracking-wide text-purple-600 mb-2">
              The Damage in 2025
            </p>
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="display-lg gradient-text-warm mb-2"
            >
              $4.2B
            </motion.div>
            <p className="body-md text-purple-700 font-semibold">
              Lost to AI agent oopsies. That's a lot of zeros! 😬
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
