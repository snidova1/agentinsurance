'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { QuoteCalculator } from './QuoteCalculator';
import { ShieldIcon, ArrowRightIcon, PlayIcon } from './Icons';

export function HeroSection() {
  const [quoteOpen, setQuoteOpen] = useState(false);

  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
        
        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.02] border border-white/[0.08] backdrop-blur-linear mb-8"
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10b981] opacity-75" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#10b981]" />
              </span>
              <span className="text-[13px] font-medium text-[#d0d6e0] tracking-[-0.13px]">
                First AI Agent Insurance Protocol
              </span>
            </motion.div>

            {/* Main heading */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="display-md text-[#f7f8f8] mb-6 max-w-4xl mx-auto"
              style={{ fontFeatureSettings: '"cv01", "ss03"' }}
            >
              Parametric Insurance for{' '}
              <span className="brand-gradient">AI Agents</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="body-lg text-[#8a8f98] mb-12 max-w-2xl mx-auto"
            >
              The first decentralized insurance protocol protecting businesses from autonomous AI agent failures. 
              Instant payouts powered by smart contracts.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-20"
            >
              <button
                onClick={() => setQuoteOpen(true)}
                className="group relative px-6 py-3 bg-[#5e6ad2] hover:bg-[#7170ff] text-white rounded-lg font-medium text-[15px] transition-all duration-200 glow-brand inline-flex items-center gap-2"
              >
                <ShieldIcon size={16} />
                <span>Get Coverage</span>
                <ArrowRightIcon size={16} className="group-hover:translate-x-0.5 transition-transform" />
              </button>
              
              <a
                href="/demo"
                className="group px-6 py-3 bg-white/[0.02] hover:bg-white/[0.05] border border-white/[0.08] hover:border-white/[0.12] text-[#d0d6e0] rounded-lg font-medium text-[15px] transition-all duration-200 backdrop-blur-linear inline-flex items-center gap-2"
              >
                <PlayIcon size={14} />
                <span>View Live Demo</span>
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="grid grid-cols-3 gap-8 max-w-3xl mx-auto"
            >
              {[
                { value: '$2.5M', label: 'Coverage Issued' },
                { value: '150+', label: 'Agents Insured' },
                { value: '99.2%', label: 'Claim Accuracy' }
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + i * 0.1, duration: 0.5 }}
                  whileHover={{ y: -2 }}
                  className="group cursor-default"
                >
                  <div className="text-[32px] font-medium text-[#f7f8f8] mb-1 tracking-[-0.704px] group-hover:text-[#7170ff] transition-colors duration-200">
                    {stat.value}
                  </div>
                  <div className="text-[13px] text-[#62666d] tracking-[-0.13px]">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-5 h-8 rounded-full border border-white/[0.08] flex items-start justify-center p-1.5"
          >
            <div className="w-1 h-2 bg-white/20 rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* Quote Calculator Modal */}
      <QuoteCalculator isOpen={quoteOpen} onClose={() => setQuoteOpen(false)} />
    </>
  );
}
