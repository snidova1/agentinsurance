'use client';

import { motion } from 'framer-motion';

export function CTASection() {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-black to-blue-900/30" />
      
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
      />
      
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
      />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8"
          >
            <span className="text-sm text-gray-300">🚀 Launching Q3 2026</span>
          </motion.div>

          {/* Heading */}
          <h2 className="text-5xl md:text-7xl font-bold mb-8">
            Ready to <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400">Protect</span> Your Agents?
          </h2>

          {/* Description */}
          <p className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            Join the waitlist for early access. First 100 users get 50% off premiums for 6 months.
          </p>

          {/* Email signup */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-2xl mx-auto mb-12"
          >
            <input
              type="email"
              placeholder="your@email.com"
              className="w-full sm:flex-1 px-6 py-4 bg-white/5 border border-white/10 rounded-lg backdrop-blur-sm focus:outline-none focus:border-purple-500 transition-colors text-white placeholder-gray-500"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg font-semibold shadow-lg shadow-purple-500/50 hover:shadow-purple-500/70 transition-shadow whitespace-nowrap"
            >
              Join Waitlist
            </motion.button>
          </motion.div>

          {/* Social proof */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-wrap justify-center items-center gap-8 text-sm text-gray-500"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500" />
              <span>500+ on waitlist</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-blue-500" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-purple-500" />
              <span>Early access perks</span>
            </div>
          </motion.div>

          {/* Additional CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-16 flex flex-col sm:flex-row gap-6 justify-center"
          >
            <a
              href="#"
              className="px-6 py-3 bg-white/5 border border-white/10 rounded-lg backdrop-blur-sm hover:bg-white/10 transition-colors"
            >
              📄 Read Whitepaper
            </a>
            <a
              href="#"
              className="px-6 py-3 bg-white/5 border border-white/10 rounded-lg backdrop-blur-sm hover:bg-white/10 transition-colors"
            >
              💬 Join Discord
            </a>
            <a
              href="#"
              className="px-6 py-3 bg-white/5 border border-white/10 rounded-lg backdrop-blur-sm hover:bg-white/10 transition-colors"
            >
              🐦 Follow on X
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 1, duration: 0.6 }}
        className="relative z-10 mt-32 pt-12 border-t border-white/10 text-center text-sm text-gray-500"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🛡️</span>
              <span className="font-bold text-white">AgentInsurance</span>
            </div>
            
            <div className="flex gap-8">
              <a href="#" className="hover:text-white transition-colors">About</a>
              <a href="#" className="hover:text-white transition-colors">Docs</a>
              <a href="#" className="hover:text-white transition-colors">Blog</a>
              <a href="#" className="hover:text-white transition-colors">Careers</a>
            </div>
            
            <div>
              © 2026 AgentInsurance. All rights reserved.
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
