'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { QuoteCalculator } from './QuoteCalculator';
import { ShieldIcon, ArrowRightIcon, PlayIcon, SparkleIcon, CoinIcon, BotIcon, SmileIcon } from './Icons';

// Hero mascot - bigger, friendlier
const HeroMascot = () => (
  <motion.div
    animate={{ y: [0, -10, 0], rotate: [0, 2, -2, 0] }}
    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
  >
    <svg width="140" height="140" viewBox="0 0 140 140" fill="none">
      {/* Floor shadow */}
      <ellipse cx="70" cy="125" rx="30" ry="4" fill="#7C3AED" opacity="0.15" />
      
      {/* Antenna */}
      <line x1="70" y1="25" x2="70" y2="10" stroke="#7C3AED" strokeWidth="3" strokeLinecap="round" />
      <motion.circle
        cx="70" cy="8" r="5" fill="#FBBF24"
        animate={{ opacity: [1, 0.5, 1], scale: [1, 1.2, 1] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      />
      
      {/* Body */}
      <motion.ellipse
        cx="70" cy="70" rx="50" ry="55"
        fill="url(#heroBody)"
        animate={{ ry: [55, 53, 55] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      
      {/* Body shine */}
      <ellipse cx="55" cy="50" rx="15" ry="20" fill="white" opacity="0.25" />
      
      {/* Cheeks */}
      <circle cx="38" cy="78" r="6" fill="#FFB7B7" opacity="0.8" />
      <circle cx="102" cy="78" r="6" fill="#FFB7B7" opacity="0.8" />
      
      {/* Eyes */}
      <motion.g
        animate={{ scaleY: [1, 0.1, 1] }}
        transition={{ duration: 0.3, repeat: Infinity, repeatDelay: 4 }}
        style={{ transformOrigin: 'center' }}
      >
        <circle cx="55" cy="62" r="6" fill="#1a1a2e" />
        <circle cx="85" cy="62" r="6" fill="#1a1a2e" />
        <circle cx="57" cy="60" r="2" fill="white" />
        <circle cx="87" cy="60" r="2" fill="white" />
      </motion.g>
      
      {/* Smile */}
      <path d="M 55 82 Q 70 92 85 82" stroke="#1a1a2e" strokeWidth="3" strokeLinecap="round" fill="none" />
      
      {/* Arms */}
      <motion.g
        animate={{ rotate: [0, 15, -15, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
        style={{ transformOrigin: '120px 75px' }}
      >
        <ellipse cx="120" cy="75" rx="8" ry="14" fill="url(#heroBody)" />
      </motion.g>
      <ellipse cx="20" cy="75" rx="8" ry="14" fill="url(#heroBody)" />
      
      {/* Heart on body */}
      <motion.g
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        style={{ transformOrigin: '70px 100px' }}
      >
        <path 
          d="M 70 105 C 70 100 65 96 60 100 C 55 104 65 112 70 115 C 75 112 85 104 80 100 C 75 96 70 100 70 105 Z" 
          fill="#EC4899" 
          opacity="0.9"
        />
      </motion.g>
      
      <defs>
        <linearGradient id="heroBody" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#A78BFA" />
          <stop offset="100%" stopColor="#7C3AED" />
        </linearGradient>
      </defs>
    </svg>
  </motion.div>
);

export function HeroSection() {
  const [quoteOpen, setQuoteOpen] = useState(false);

  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 py-20">
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Mascot */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, type: 'spring' }}
              className="flex justify-center mb-6"
            >
              <HeroMascot />
            </motion.div>

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 border-2 border-purple-200 backdrop-blur-sm mb-6 shadow-md"
            >
              <SparkleIcon className="text-yellow-500" size={16} />
              <span className="text-sm font-bold text-purple-700">
                First AI Agent Insurance Protocol
              </span>
              <SparkleIcon className="text-yellow-500" size={16} />
            </motion.div>

            {/* Main heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="display-md md:display-lg text-purple-900 mb-6 max-w-4xl mx-auto"
            >
              Insurance That{' '}
              <span className="gradient-text">Loves Your AI</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="body-lg text-purple-700/70 mb-10 max-w-2xl mx-auto font-medium"
            >
              When your AI agents mess up, we've got their back. Smart contract magic = instant payouts in seconds, not weeks.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
            >
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setQuoteOpen(true)}
                className="btn-primary"
              >
                <ShieldIcon size={18} />
                Protect My Bot
                <ArrowRightIcon size={18} />
              </motion.button>

              <motion.a
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href="/demo"
                className="btn-secondary"
              >
                <PlayIcon size={16} />
                See It Work
              </motion.a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-3 gap-4 max-w-3xl mx-auto"
            >
              {[
                { value: '$2.5M', label: 'Coverage Issued', Icon: CoinIcon, color: 'from-yellow-300 to-orange-300', iconColor: 'text-orange-700' },
                { value: '150+', label: 'Bots Protected', Icon: BotIcon, color: 'from-purple-300 to-pink-300', iconColor: 'text-purple-700' },
                { value: '99.2%', label: 'Happy Customers', Icon: SmileIcon, color: 'from-pink-300 to-rose-300', iconColor: 'text-pink-700' },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + i * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="card-cute p-4"
                >
                  <div className={`w-10 h-10 mx-auto rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-2 shadow-sm`}>
                    <stat.Icon className={stat.iconColor} size={20} />
                  </div>
                  <div className="text-2xl md:text-3xl font-extrabold gradient-text mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs font-bold text-purple-600/70">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      <QuoteCalculator isOpen={quoteOpen} onClose={() => setQuoteOpen(false)} />
    </>
  );
}
