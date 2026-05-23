'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

interface QuoteCalculatorProps {
  isOpen: boolean;
  onClose: () => void;
}

// Cute mascot SVG
const Mascot = ({ mood = 'happy' }: { mood?: 'happy' | 'thinking' | 'celebrate' | 'wave' }) => (
  <motion.div
    animate={mood === 'celebrate' ? { rotate: [0, -10, 10, -10, 0], scale: [1, 1.1, 1] } : {}}
    transition={{ duration: 0.6 }}
    className="inline-block"
  >
    <svg width="80" height="80" viewBox="0 0 100 100" fill="none">
      {/* Body - rounded blob */}
      <motion.ellipse
        cx="50" cy="55" rx="35" ry="38"
        fill="url(#bodyGradient)"
        animate={{ ry: [38, 36, 38] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Cheeks */}
      <circle cx="28" cy="62" r="4" fill="#FFB7B7" opacity="0.7" />
      <circle cx="72" cy="62" r="4" fill="#FFB7B7" opacity="0.7" />
      {/* Eyes */}
      {mood === 'thinking' ? (
        <>
          <path d="M 35 50 Q 40 47 45 50" stroke="#1a1a2e" strokeWidth="3" strokeLinecap="round" fill="none" />
          <path d="M 55 50 Q 60 47 65 50" stroke="#1a1a2e" strokeWidth="3" strokeLinecap="round" fill="none" />
        </>
      ) : (
        <>
          <motion.circle 
            cx="40" cy="50" r="4" fill="#1a1a2e"
            animate={{ scaleY: [1, 0.1, 1] }}
            transition={{ duration: 0.3, repeat: Infinity, repeatDelay: 3 }}
          />
          <motion.circle 
            cx="60" cy="50" r="4" fill="#1a1a2e"
            animate={{ scaleY: [1, 0.1, 1] }}
            transition={{ duration: 0.3, repeat: Infinity, repeatDelay: 3 }}
          />
          {/* Eye sparkle */}
          <circle cx="41" cy="49" r="1" fill="white" />
          <circle cx="61" cy="49" r="1" fill="white" />
        </>
      )}
      {/* Mouth */}
      {mood === 'celebrate' ? (
        <path d="M 40 65 Q 50 75 60 65" stroke="#1a1a2e" strokeWidth="3" strokeLinecap="round" fill="#FF6B9D" />
      ) : mood === 'wave' ? (
        <path d="M 42 65 Q 50 70 58 65" stroke="#1a1a2e" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      ) : (
        <path d="M 42 65 Q 50 72 58 65" stroke="#1a1a2e" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      )}
      {/* Antenna */}
      <line x1="50" y1="20" x2="50" y2="10" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" />
      <motion.circle 
        cx="50" cy="8" r="3" fill="#FBBF24"
        animate={{ opacity: [1, 0.5, 1] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      />
      {/* Wave hand */}
      {mood === 'wave' && (
        <motion.g
          animate={{ rotate: [0, 20, -20, 20, 0] }}
          transition={{ duration: 1, repeat: Infinity }}
          style={{ transformOrigin: '85px 55px' }}
        >
          <ellipse cx="85" cy="55" rx="6" ry="8" fill="url(#bodyGradient)" />
        </motion.g>
      )}
      <defs>
        <linearGradient id="bodyGradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#A78BFA" />
          <stop offset="100%" stopColor="#7C3AED" />
        </linearGradient>
      </defs>
    </svg>
  </motion.div>
);

export function QuoteCalculator({ isOpen, onClose }: QuoteCalculatorProps) {
  const [step, setStep] = useState(1);
  const [agentType, setAgentType] = useState('');
  const [coverage, setCoverage] = useState(100000);
  const [riskLevel, setRiskLevel] = useState('medium');
  const [duration, setDuration] = useState(12);
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const calculatePremium = () => {
    const baseRate = {
      low: 0.005,
      medium: 0.01,
      high: 0.02,
    }[riskLevel] || 0.01;
    const monthly = (coverage * baseRate) / 12;
    return Math.round(monthly);
  };

  const premium = calculatePremium();

  const handleNext = () => { if (step < 4) setStep(step + 1); };
  const handleBack = () => { if (step > 1) setStep(step - 1); };
  const handleSubmit = async () => {
    setSubmitted(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
  };
  const handleClose = () => {
    setStep(1);
    setSubmitted(false);
    setAgentType('');
    onClose();
  };

  const agentTypes = [
    { id: 'trading', emoji: '💸', name: 'Trading Bot', desc: 'Buys & sells stuff' },
    { id: 'autonomous', emoji: '🤖', name: 'Smart Agent', desc: 'Makes decisions' },
    { id: 'data', emoji: '📊', name: 'Data Cruncher', desc: 'Loves numbers' },
    { id: 'service', emoji: '⚡', name: 'Workflow Bot', desc: 'Gets stuff done' },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleClose}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gradient-to-br from-purple-900/40 via-pink-900/30 to-blue-900/40 backdrop-blur-md"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', damping: 20 }}
              onClick={(e: React.MouseEvent) => e.stopPropagation()}
            className="relative w-full max-w-lg bg-gradient-to-br from-[#FFF8F0] to-[#FFE8F0] rounded-[32px] shadow-2xl overflow-hidden"
            style={{ boxShadow: '0 20px 60px rgba(124, 58, 237, 0.3), 0 0 0 1px rgba(255,255,255,0.5) inset' }}
          >
            {/* Cute floating shapes background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <motion.div 
                animate={{ y: [0, -15, 0], rotate: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute top-10 right-8 w-16 h-16 bg-yellow-300/40 rounded-full blur-xl" 
              />
              <motion.div 
                animate={{ y: [0, 15, 0], rotate: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute bottom-20 left-8 w-20 h-20 bg-pink-300/40 rounded-full blur-xl" 
              />
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute top-1/2 left-12 w-12 h-12 bg-blue-300/40 rounded-full blur-xl" 
              />
            </div>

            {/* Close button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/80 hover:bg-white shadow-md flex items-center justify-center text-purple-600 hover:rotate-90 transition-all duration-300"
              aria-label="Close"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            </button>

            {/* Progress */}
            {!submitted && (
              <div className="relative px-8 pt-8 pb-2">
                <div className="flex gap-2 mb-3">
                  {[1, 2, 3, 4].map((s) => (
                    <motion.div
                      key={s}
                      animate={{
                        backgroundColor: s <= step ? '#7C3AED' : '#E9D5FF',
                        scale: s === step ? 1.05 : 1,
                      }}
                      className="h-2 flex-1 rounded-full"
                    />
                  ))}
                </div>
                <p className="text-sm font-semibold text-purple-600">Step {step} of 4 ✨</p>
              </div>
            )}

            <div className="relative px-8 pb-8">
              <AnimatePresence mode="wait">
                {/* SUBMITTED STATE */}
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-8"
                  >
                    <Mascot mood="celebrate" />
                    <h2 className="text-3xl font-bold text-purple-700 mt-4 mb-2">Yay! You're in! 🎉</h2>
                    <p className="text-gray-600 mb-6">
                      We saved your spot. We'll email <span className="font-bold text-purple-600">{email}</span> when coverage opens up!
                    </p>
                    <div className="bg-white/70 rounded-2xl p-5 border-2 border-purple-200">
                      <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">Your Quote</p>
                      <p className="text-4xl font-bold text-purple-600">${premium}<span className="text-lg text-gray-500">/mo</span></p>
                      <p className="text-sm text-gray-600 mt-1">${coverage.toLocaleString()} coverage</p>
                    </div>
                    <button
                      onClick={handleClose}
                      className="mt-6 px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all"
                    >
                      Awesome, thanks! 💖
                    </button>
                  </motion.div>
                ) : (
                  <>
                    {/* STEP 1 - Agent Type */}
                    {step === 1 && (
                      <motion.div
                        key="step1"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                      >
                        <div className="text-center mb-6">
                          <Mascot mood="wave" />
                          <h2 className="text-2xl font-bold text-purple-700 mt-2">
                            Hi friend! What's your bot? 👋
                          </h2>
                          <p className="text-sm text-gray-600 mt-1">Pick the one that fits best</p>
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                          {agentTypes.map((type) => (
                            <motion.button
                              key={type.id}
                              whileHover={{ scale: 1.03, y: -2 }}
                              whileTap={{ scale: 0.97 }}
                              onClick={() => setAgentType(type.id)}
                              className={`p-4 rounded-2xl text-left transition-all ${
                                agentType === type.id
                                  ? 'bg-gradient-to-br from-purple-500 to-pink-500 text-white shadow-lg scale-105'
                                  : 'bg-white/80 hover:bg-white border-2 border-purple-100 hover:border-purple-300'
                              }`}
                            >
                              <div className="text-3xl mb-2">{type.emoji}</div>
                              <div className={`font-bold text-sm ${agentType === type.id ? 'text-white' : 'text-purple-700'}`}>
                                {type.name}
                              </div>
                              <div className={`text-xs mt-0.5 ${agentType === type.id ? 'text-white/80' : 'text-gray-500'}`}>
                                {type.desc}
                              </div>
                            </motion.button>
                          ))}
                        </div>
                      </motion.div>
                    )}

                    {/* STEP 2 - Coverage */}
                    {step === 2 && (
                      <motion.div
                        key="step2"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                      >
                        <div className="text-center mb-6">
                          <Mascot mood="thinking" />
                          <h2 className="text-2xl font-bold text-purple-700 mt-2">
                            How much coverage? 💰
                          </h2>
                          <p className="text-sm text-gray-600 mt-1">Slide to choose your amount</p>
                        </div>
                        <div className="bg-white/70 rounded-2xl p-6 mb-4">
                          <div className="text-center mb-4">
                            <motion.div
                              key={coverage}
                              initial={{ scale: 0.9 }}
                              animate={{ scale: 1 }}
                              className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"
                            >
                              ${coverage.toLocaleString()}
                            </motion.div>
                          </div>
                          <input
                            type="range"
                            min="10000"
                            max="1000000"
                            step="10000"
                            value={coverage}
                            onChange={(e) => setCoverage(Number(e.target.value))}
                            className="w-full h-3 bg-purple-200 rounded-full appearance-none cursor-pointer accent-purple-600"
                          />
                          <div className="flex justify-between text-xs text-gray-500 mt-2">
                            <span>$10K</span>
                            <span>$1M</span>
                          </div>
                        </div>
                        <div className="grid grid-cols-3 gap-2">
                          {[50000, 100000, 500000].map((amt) => (
                            <button
                              key={amt}
                              onClick={() => setCoverage(amt)}
                              className={`py-2 rounded-xl text-sm font-semibold transition-all ${
                                coverage === amt
                                  ? 'bg-purple-500 text-white shadow-md'
                                  : 'bg-white/70 text-purple-600 hover:bg-white border border-purple-200'
                              }`}
                            >
                              ${amt >= 1000000 ? `${amt/1000000}M` : `${amt/1000}K`}
                            </button>
                          ))}
                        </div>
                      </motion.div>
                    )}

                    {/* STEP 3 - Risk & Duration */}
                    {step === 3 && (
                      <motion.div
                        key="step3"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                      >
                        <div className="text-center mb-6">
                          <Mascot />
                          <h2 className="text-2xl font-bold text-purple-700 mt-2">
                            Almost there! 🌈
                          </h2>
                          <p className="text-sm text-gray-600 mt-1">Tell us about your risk</p>
                        </div>
                        <div className="space-y-4">
                          <div>
                            <label className="text-sm font-semibold text-purple-700 mb-2 block">Risk Level</label>
                            <div className="grid grid-cols-3 gap-2">
                              {[
                                { id: 'low', label: 'Chill', emoji: '😌', color: 'green' },
                                { id: 'medium', label: 'Medium', emoji: '😎', color: 'yellow' },
                                { id: 'high', label: 'Risky', emoji: '🔥', color: 'red' },
                              ].map((r) => (
                                <motion.button
                                  key={r.id}
                                  whileTap={{ scale: 0.95 }}
                                  onClick={() => setRiskLevel(r.id)}
                                  className={`py-3 rounded-2xl text-center transition-all ${
                                    riskLevel === r.id
                                      ? 'bg-gradient-to-br from-purple-500 to-pink-500 text-white shadow-md scale-105'
                                      : 'bg-white/70 hover:bg-white border-2 border-purple-100'
                                  }`}
                                >
                                  <div className="text-2xl mb-1">{r.emoji}</div>
                                  <div className="text-xs font-bold">{r.label}</div>
                                </motion.button>
                              ))}
                            </div>
                          </div>
                          <div>
                            <label className="text-sm font-semibold text-purple-700 mb-2 block">
                              Duration: {duration} months 📅
                            </label>
                            <input
                              type="range"
                              min="1"
                              max="24"
                              value={duration}
                              onChange={(e) => setDuration(Number(e.target.value))}
                              className="w-full h-3 bg-purple-200 rounded-full appearance-none cursor-pointer accent-purple-600"
                            />
                            <div className="flex justify-between text-xs text-gray-500 mt-1">
                              <span>1 mo</span>
                              <span>24 mo</span>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {/* STEP 4 - Email */}
                    {step === 4 && (
                      <motion.div
                        key="step4"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                      >
                        <div className="text-center mb-6">
                          <Mascot mood="celebrate" />
                          <h2 className="text-2xl font-bold text-purple-700 mt-2">
                            Last step! 💌
                          </h2>
                          <p className="text-sm text-gray-600 mt-1">Where should we send your quote?</p>
                        </div>
                        <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl p-6 mb-4 border-2 border-white">
                          <p className="text-xs uppercase tracking-wide text-purple-600 font-bold mb-1">Your Quote</p>
                          <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-3">
                            ${premium}<span className="text-lg text-gray-500">/mo</span>
                          </div>
                          <div className="space-y-1 text-sm text-gray-700">
                            <div className="flex justify-between"><span>Coverage</span><span className="font-semibold">${coverage.toLocaleString()}</span></div>
                            <div className="flex justify-between"><span>Duration</span><span className="font-semibold">{duration} mo</span></div>
                            <div className="flex justify-between"><span>Risk</span><span className="font-semibold capitalize">{riskLevel}</span></div>
                          </div>
                        </div>
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="your@email.com"
                          className="w-full px-5 py-4 bg-white/80 border-2 border-purple-200 focus:border-purple-500 rounded-2xl text-purple-900 placeholder-purple-300 focus:outline-none transition-colors"
                        />
                      </motion.div>
                    )}
                  </>
                )}
              </AnimatePresence>

              {/* Nav buttons */}
              {!submitted && (
                <div className="flex gap-3 mt-6">
                  <button
                    onClick={handleBack}
                    disabled={step === 1}
                    className="px-6 py-3 rounded-full text-purple-600 font-semibold hover:bg-white/50 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                  >
                    ← Back
                  </button>
                  <div className="flex-1" />
                  {step < 4 ? (
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={handleNext}
                      disabled={(step === 1 && !agentType)}
                      className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-full font-bold shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                    >
                      Next →
                    </motion.button>
                  ) : (
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={handleSubmit}
                      disabled={!email || !email.includes('@')}
                      className="px-8 py-3 bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white rounded-full font-bold shadow-lg hover:shadow-xl disabled:opacity-50 transition-all"
                    >
                      Get my quote! ✨
                    </motion.button>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
