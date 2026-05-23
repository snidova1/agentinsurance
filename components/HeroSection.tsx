'use client';

import { motion } from 'framer-motion';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20" />
      
      {/* Animated grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f12_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f12_1px,transparent_1px)] bg-[size:64px_64px]" />
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-sm text-gray-300">First AI Agent Insurance Protocol</span>
          </motion.div>

          {/* Main heading */}
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-blue-200">
            AgentInsurance
          </h1>

          {/* Tagline */}
          <p className="text-2xl md:text-3xl text-gray-400 mb-4 font-light">
            Parametric Insurance for AI Agent Failures
          </p>

          {/* Description */}
          <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-12">
            The first decentralized insurance protocol protecting businesses from autonomous AI agent errors, 
            powered by smart contracts and real-time verification.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg font-semibold text-lg shadow-lg shadow-purple-500/50 hover:shadow-purple-500/70 transition-shadow"
            >
              Get Coverage
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white/5 border border-white/10 rounded-lg font-semibold text-lg backdrop-blur-sm hover:bg-white/10 transition-colors"
            >
              View Demo
            </motion.button>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-20 grid grid-cols-3 gap-8 max-w-3xl mx-auto"
          >
            <div>
              <div className="text-4xl font-bold text-white mb-2">$2.5M</div>
              <div className="text-sm text-gray-500">Coverage Issued</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">150+</div>
              <div className="text-sm text-gray-500">Agents Insured</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">99.2%</div>
              <div className="text-sm text-gray-500">Claim Accuracy</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating orbs */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl"
      />
      
      <motion.div
        animate={{
          y: [0, 20, 0],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
      />
    </section>
  );
}
