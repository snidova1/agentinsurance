'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

interface QuoteCalculatorProps {
  isOpen: boolean;
  onClose: () => void;
}

export function QuoteCalculator({ isOpen, onClose }: QuoteCalculatorProps) {
  const [step, setStep] = useState(1);
  const [agentType, setAgentType] = useState('');
  const [coverage, setCoverage] = useState(100000);
  const [riskLevel, setRiskLevel] = useState('medium');
  const [duration, setDuration] = useState(12);
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // Calculate premium based on inputs
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

  const handleNext = () => {
    if (step < 4) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = async () => {
    setSubmitted(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
  };

  const handleClose = () => {
    setStep(1);
    setSubmitted(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={handleClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="relative w-full max-w-2xl bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-2xl p-8 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors"
            >
              <span className="text-white text-xl">×</span>
            </button>

            {!submitted ? (
              <>
                {/* Progress bar */}
                <div className="mb-8">
                  <div className="flex justify-between mb-2">
                    {[1, 2, 3, 4].map((s) => (
                      <div
                        key={s}
                        className={`flex-1 h-1 mx-1 rounded-full transition-colors ${
                          s <= step ? 'bg-purple-500' : 'bg-white/10'
                        }`}
                      />
                    ))}
                  </div>
                  <div className="text-sm text-gray-400">Step {step} of 4</div>
                </div>

                {/* Step 1: Agent Type */}
                {step === 1 && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                  >
                    <h2 className="text-3xl font-bold mb-2">What type of AI agent?</h2>
                    <p className="text-gray-400 mb-6">Select the category that best describes your agent</p>

                    <div className="grid grid-cols-2 gap-4 mb-8">
                      {[
                        { id: 'trading', icon: '📈', name: 'Trading Bot', desc: 'Automated trading & DeFi' },
                        { id: 'autonomous', icon: '🤖', name: 'Autonomous Agent', desc: 'Decision-making AI' },
                        { id: 'data', icon: '📊', name: 'Data Processing', desc: 'Analytics & ML pipelines' },
                        { id: 'service', icon: '⚡', name: 'Service Automation', desc: 'API & workflow agents' },
                      ].map((type) => (
                        <motion.button
                          key={type.id}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => setAgentType(type.id)}
                          className={`p-4 rounded-xl border text-left transition-all ${
                            agentType === type.id
                              ? 'bg-purple-500/20 border-purple-500'
                              : 'bg-white/5 border-white/10 hover:bg-white/10'
                          }`}
                        >
                          <div className="text-3xl mb-2">{type.icon}</div>
                          <div className="font-semibold mb-1">{type.name}</div>
                          <div className="text-xs text-gray-400">{type.desc}</div>
                        </motion.button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* Step 2: Coverage Amount */}
                {step === 2 && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                  >
                    <h2 className="text-3xl font-bold mb-2">Coverage Amount</h2>
                    <p className="text-gray-400 mb-6">How much coverage do you need?</p>

                    <div className="mb-6">
                      <div className="text-5xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
                        ${coverage.toLocaleString()}
                      </div>
                      <input
                        type="range"
                        min="10000"
                        max="1000000"
                        step="10000"
                        value={coverage}
                        onChange={(e) => setCoverage(Number(e.target.value))}
                        className="w-full h-2 bg-white/10 rounded-full appearance-none cursor-pointer accent-purple-500"
                      />
                      <div className="flex justify-between text-sm text-gray-500 mt-2">
                        <span>$10K</span>
                        <span>$500K</span>
                        <span>$1M</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-3 mb-6">
                      {[50000, 100000, 250000].map((amount) => (
                        <button
                          key={amount}
                          onClick={() => setCoverage(amount)}
                          className={`py-2 rounded-lg border text-sm font-medium transition-all ${
                            coverage === amount
                              ? 'bg-purple-500/20 border-purple-500'
                              : 'bg-white/5 border-white/10 hover:bg-white/10'
                          }`}
                        >
                          ${(amount / 1000).toFixed(0)}K
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* Step 3: Risk & Duration */}
                {step === 3 && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                  >
                    <h2 className="text-3xl font-bold mb-2">Risk Profile & Duration</h2>
                    <p className="text-gray-400 mb-6">Configure your policy</p>

                    <div className="mb-6">
                      <label className="text-sm text-gray-400 mb-3 block">Risk Level</label>
                      <div className="grid grid-cols-3 gap-3">
                        {[
                          { id: 'low', label: 'Low', desc: '0.5% rate', color: 'green' },
                          { id: 'medium', label: 'Medium', desc: '1% rate', color: 'yellow' },
                          { id: 'high', label: 'High', desc: '2% rate', color: 'red' },
                        ].map((risk) => (
                          <button
                            key={risk.id}
                            onClick={() => setRiskLevel(risk.id)}
                            className={`p-4 rounded-xl border text-center transition-all ${
                              riskLevel === risk.id
                                ? 'bg-purple-500/20 border-purple-500'
                                : 'bg-white/5 border-white/10 hover:bg-white/10'
                            }`}
                          >
                            <div className="font-semibold mb-1">{risk.label}</div>
                            <div className="text-xs text-gray-400">{risk.desc}</div>
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="text-sm text-gray-400 mb-3 block">Coverage Duration: {duration} months</label>
                      <input
                        type="range"
                        min="1"
                        max="36"
                        value={duration}
                        onChange={(e) => setDuration(Number(e.target.value))}
                        className="w-full h-2 bg-white/10 rounded-full appearance-none cursor-pointer accent-purple-500"
                      />
                      <div className="flex justify-between text-sm text-gray-500 mt-2">
                        <span>1 mo</span>
                        <span>18 mo</span>
                        <span>36 mo</span>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Step 4: Quote Summary */}
                {step === 4 && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                  >
                    <h2 className="text-3xl font-bold mb-2">Your Quote</h2>
                    <p className="text-gray-400 mb-6">Review and reserve your coverage</p>

                    <div className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-white/10 rounded-xl p-6 mb-6">
                      <div className="space-y-3 mb-4">
                        <div className="flex justify-between">
                          <span className="text-gray-400">Agent Type</span>
                          <span className="font-semibold capitalize">{agentType || 'N/A'}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Coverage</span>
                          <span className="font-semibold">${coverage.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Risk Level</span>
                          <span className="font-semibold capitalize">{riskLevel}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Duration</span>
                          <span className="font-semibold">{duration} months</span>
                        </div>
                      </div>

                      <div className="border-t border-white/10 pt-4">
                        <div className="text-sm text-gray-400 mb-1">Monthly Premium</div>
                        <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
                          ${premium.toLocaleString()}/mo
                        </div>
                        <div className="text-sm text-gray-500 mt-1">
                          ${(premium * duration).toLocaleString()} total ({duration} months)
                        </div>
                      </div>
                    </div>

                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg backdrop-blur-sm focus:outline-none focus:border-purple-500 transition-colors mb-2"
                    />
                    <p className="text-xs text-gray-500 mb-4">We'll email your quote and onboarding details</p>
                  </motion.div>
                )}

                {/* Navigation buttons */}
                <div className="flex justify-between mt-8">
                  <button
                    onClick={handleBack}
                    disabled={step === 1}
                    className="px-6 py-3 rounded-lg bg-white/5 border border-white/10 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-white/10 transition-colors"
                  >
                    ← Back
                  </button>

                  {step < 4 ? (
                    <button
                      onClick={handleNext}
                      disabled={step === 1 && !agentType}
                      className="px-6 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 font-semibold disabled:opacity-30 disabled:cursor-not-allowed hover:shadow-lg hover:shadow-purple-500/50 transition-all"
                    >
                      Next →
                    </button>
                  ) : (
                    <button
                      onClick={handleSubmit}
                      disabled={!email}
                      className="px-6 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 font-semibold disabled:opacity-30 disabled:cursor-not-allowed hover:shadow-lg hover:shadow-purple-500/50 transition-all"
                    >
                      Reserve Coverage 🚀
                    </button>
                  )}
                </div>
              </>
            ) : (
              /* Success state */
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1, rotate: 360 }}
                  transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                  className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center text-4xl"
                >
                  ✓
                </motion.div>

                <h2 className="text-3xl font-bold mb-2">Quote Reserved!</h2>
                <p className="text-gray-400 mb-6">
                  We've sent your personalized coverage details to <span className="text-white font-semibold">{email}</span>
                </p>

                <div className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-white/10 rounded-xl p-6 mb-6 text-left">
                  <div className="text-sm text-gray-400 mb-2">Your reserved quote:</div>
                  <div className="text-2xl font-bold mb-1">${premium.toLocaleString()}/mo</div>
                  <div className="text-sm text-gray-500">${coverage.toLocaleString()} coverage • {duration} months</div>
                </div>

                <button
                  onClick={handleClose}
                  className="px-8 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all"
                >
                  Done
                </button>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
