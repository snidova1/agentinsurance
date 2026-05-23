'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function DemoPage() {
  const [scenario, setScenario] = useState<string | null>(null);
  const [step, setStep] = useState(0);
  const [logs, setLogs] = useState<string[]>([]);
  const [payout, setPayout] = useState(0);

  const scenarios = [
    {
      id: 'trading',
      emoji: '📉',
      title: 'Trading Bot Oopsie',
      description: 'AI bot loses $50K in a flash crash 😱',
      coverage: 100000,
      payout: 50000,
      color: 'from-red-300 to-pink-300',
      logs: [
        '🤖 Trading bot connected to ZepInsurance',
        '👀 Monitoring market activity...',
        '📉 ALERT: Flash crash detected! BTC -15% in 2 min',
        '💔 Bot positions: -$50,000 unrealized loss',
        '🚨 Trigger condition met: loss_exceeds_threshold',
        '🔮 Oracle network verifying...',
        '✅ Consensus reached (5/5 nodes)',
        '📜 Smart contract executing payout',
        '💸 Sending $50,000 USDC to bot wallet',
        '🎉 PAID! Crisis averted in 47 seconds',
      ],
    },
    {
      id: 'autonomous',
      emoji: '🤔',
      title: 'AI Made a Boo-Boo',
      description: 'Smart agent caused $25K in damages 🙈',
      coverage: 50000,
      payout: 25000,
      color: 'from-yellow-300 to-orange-300',
      logs: [
        '🤖 Autonomous agent active',
        '⚙️ Executing decision logic...',
        '⚠️ ANOMALY: Unexpected output detected',
        '💔 Damages assessed: $25,000',
        '🔍 Behavior analysis: agent_error_class_3',
        '🚨 Coverage trigger: autonomous_error_payout',
        '🔮 Oracle verifying error classification',
        '✅ Verified by 4/5 oracles (80% threshold)',
        '📜 Executing payout smart contract',
        '💸 $25,000 USDC sent. All good now! 💖',
      ],
    },
    {
      id: 'breach',
      emoji: '🔓',
      title: 'Whoopsie, Data Leak!',
      description: 'AI pipeline exposed sensitive info 🫣',
      coverage: 200000,
      payout: 150000,
      color: 'from-blue-300 to-purple-300',
      logs: [
        '🤖 Data pipeline running',
        '🔄 Processing batch: 10K records',
        '🚨 BREACH: Unauthorized data access detected',
        '💔 Records exposed: 5,000',
        '📊 Estimated damage: $150,000',
        '🛡️ Coverage: data_breach_protection',
        '🔮 Oracle verifying breach scope',
        '✅ Multi-sig consensus achieved',
        '📜 Executing breach_payout contract',
        '💸 $150,000 USDC sent. Crisis handled! 🎉',
      ],
    },
  ];

  const runScenario = async (id: string) => {
    setScenario(id);
    setStep(0);
    setLogs([]);
    setPayout(0);

    const s = scenarios.find((x) => x.id === id);
    if (!s) return;

    for (let i = 0; i < s.logs.length; i++) {
      await new Promise((r) => setTimeout(r, 700));
      setLogs((prev) => [...prev, s.logs[i]]);
      setStep(i + 1);
    }

    await new Promise((r) => setTimeout(r, 500));
    setPayout(s.payout);
  };

  const reset = () => {
    setScenario(null);
    setStep(0);
    setLogs([]);
    setPayout(0);
  };

  return (
    <main className="relative min-h-screen py-20 px-6">
      <div className="relative max-w-5xl mx-auto z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 text-center"
        >
          <a href="/" className="inline-flex items-center gap-2 text-purple-700 font-bold mb-6 hover:text-purple-900 transition-colors">
            <span>←</span>
            <span>Back to Home</span>
          </a>
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
            className="text-6xl mb-4 inline-block"
          >
            🎬
          </motion.div>
          <h1 className="display-md md:display-lg gradient-text mb-4">Live Demo Time!</h1>
          <p className="body-lg text-purple-700/70 max-w-2xl mx-auto font-medium">
            Pick a scenario and watch the magic happen in real-time ✨
          </p>
        </motion.div>

        {!scenario ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {scenarios.map((s, i) => (
              <motion.button
                key={s.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, type: 'spring' }}
                whileHover={{ y: -8, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => runScenario(s.id)}
                className="card-cute p-6 text-left group"
              >
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${s.color} flex items-center justify-center mb-4 text-5xl shadow-md`}
                >
                  {s.emoji}
                </motion.div>
                <h3 className="heading-md text-purple-900 mb-2">{s.title}</h3>
                <p className="body-sm text-purple-700/70 mb-4">{s.description}</p>
                <div className="space-y-1 mb-4 text-sm">
                  <div className="flex justify-between font-bold">
                    <span className="text-purple-700/70">Coverage</span>
                    <span className="text-purple-900">${s.coverage.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between font-bold">
                    <span className="text-purple-700/70">Payout</span>
                    <span className="gradient-text-warm">${s.payout.toLocaleString()}</span>
                  </div>
                </div>
                <div className="btn-primary w-full justify-center group-hover:scale-105">
                  <span>▶️</span>
                  <span>Run Demo</span>
                </div>
              </motion.button>
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="card-cute p-8"
          >
            {/* Scenario header */}
            {(() => {
              const s = scenarios.find((x) => x.id === scenario);
              if (!s) return null;
              return (
                <div className="flex items-center gap-4 mb-6">
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className={`w-16 h-16 rounded-3xl bg-gradient-to-br ${s.color} flex items-center justify-center text-4xl shadow-md`}
                  >
                    {s.emoji}
                  </motion.div>
                  <div>
                    <h2 className="heading-lg text-purple-900">{s.title}</h2>
                    <p className="body-sm text-purple-700/70">{s.description}</p>
                  </div>
                </div>
              );
            })()}

            {/* Progress bar */}
            <div className="mb-6">
              <div className="flex justify-between text-sm font-bold text-purple-700/70 mb-2">
                <span>Progress</span>
                <span>
                  {step}/
                  {scenarios.find((s) => s.id === scenario)?.logs.length}
                </span>
              </div>
              <div className="h-3 bg-purple-100 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{
                    width: `${(step / (scenarios.find((s) => s.id === scenario)?.logs.length || 1)) * 100}%`,
                  }}
                  className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
                />
              </div>
            </div>

            {/* Logs */}
            <div className="bg-gradient-to-br from-purple-900 to-pink-900 rounded-2xl p-4 mb-6 max-h-96 overflow-y-auto font-mono text-sm">
              <AnimatePresence>
                {logs.map((log, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-purple-100 py-1"
                  >
                    <span className="text-pink-300">[{new Date().toLocaleTimeString()}]</span> {log}
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* Payout */}
            {payout > 0 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: 'spring' }}
                className="bg-gradient-to-br from-green-100 to-blue-100 border-2 border-green-300 rounded-3xl p-8 text-center mb-6"
              >
                <motion.div
                  animate={{ rotate: [0, 360], scale: [1, 1.2, 1] }}
                  transition={{ duration: 1 }}
                  className="text-7xl mb-3"
                >
                  💰
                </motion.div>
                <p className="text-sm font-bold text-purple-700 uppercase tracking-wide mb-1">PAYOUT COMPLETE!</p>
                <div className="display-md gradient-text-warm mb-2">
                  ${payout.toLocaleString()}
                </div>
                <p className="text-purple-900 font-bold">USDC sent in 47 seconds 🎉</p>
              </motion.div>
            )}

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                onClick={reset}
                className="btn-secondary justify-center"
              >
                <span>🔄</span>
                Try Another
              </motion.button>
              <motion.a
                whileHover={{ scale: 1.05 }}
                href="/"
                className="btn-primary justify-center"
              >
                <span>🏠</span>
                Back Home
              </motion.a>
            </div>
          </motion.div>
        )}
      </div>
    </main>
  );
}
