'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function DemoPage() {
  const [scenario, setScenario] = useState<string | null>(null);
  const [step, setStep] = useState(0);
  const [logs, setLogs] = useState<Array<{type: string; message: string; time: string}>>([]);
  const [running, setRunning] = useState(false);
  const [payout, setPayout] = useState(0);

  const scenarios = {
    trading: {
      name: 'Trading Bot Failure',
      icon: '📈',
      description: 'AI trading bot loses $50,000 in flash crash',
      coverage: 100000,
      payout: 50000,
      steps: [
        { type: 'info', message: '🤖 Trading bot active on Binance', delay: 1000 },
        { type: 'info', message: '📊 Monitoring 5 trading pairs', delay: 1500 },
        { type: 'warning', message: '⚠️ Flash crash detected on BTC/USDT', delay: 2000 },
        { type: 'error', message: '❌ Bot executed 50 trades in 2 seconds', delay: 1500 },
        { type: 'error', message: '💸 Loss: $50,000 (exceeds threshold)', delay: 1500 },
        { type: 'info', message: '🔍 Oracle verifying loss event...', delay: 2000 },
        { type: 'info', message: '✅ Oracle consensus reached (3/3 nodes)', delay: 1500 },
        { type: 'info', message: '📝 Smart contract triggered', delay: 1000 },
        { type: 'success', message: '💰 Payout initiated: $50,000 USDC', delay: 1500 },
        { type: 'success', message: '✅ Funds received in 47 seconds', delay: 1000 },
      ]
    },
    autonomous: {
      name: 'Autonomous Agent Error',
      icon: '🤖',
      description: 'Decision-making AI causes $25,000 in damages',
      coverage: 50000,
      payout: 25000,
      steps: [
        { type: 'info', message: '🤖 Autonomous agent making decisions', delay: 1000 },
        { type: 'info', message: '📋 Processing customer requests', delay: 1500 },
        { type: 'warning', message: '⚠️ Anomaly detected in decision logic', delay: 2000 },
        { type: 'error', message: '❌ Wrong decision: $25K refunds issued', delay: 1500 },
        { type: 'error', message: '🚨 Coverage trigger activated', delay: 1500 },
        { type: 'info', message: '🔍 Verifying error patterns...', delay: 2000 },
        { type: 'info', message: '✅ Error confirmed by oracle network', delay: 1500 },
        { type: 'info', message: '📝 Smart contract executing payout', delay: 1000 },
        { type: 'success', message: '💰 Payout: $25,000 USDC', delay: 1500 },
        { type: 'success', message: '✅ Coverage paid in 52 seconds', delay: 1000 },
      ]
    },
    data: {
      name: 'Data Breach Coverage',
      icon: '🔓',
      description: 'AI data pipeline exposes sensitive info',
      coverage: 200000,
      payout: 150000,
      steps: [
        { type: 'info', message: '📊 Data pipeline processing 1M records', delay: 1000 },
        { type: 'warning', message: '⚠️ Unusual access pattern detected', delay: 2000 },
        { type: 'error', message: '❌ Breach: 10K records exposed', delay: 1500 },
        { type: 'error', message: '🚨 Compliance violation triggered', delay: 1500 },
        { type: 'info', message: '🔍 Forensic verification in progress...', delay: 2500 },
        { type: 'info', message: '✅ Breach confirmed, scope identified', delay: 1500 },
        { type: 'info', message: '📝 GDPR coverage activating', delay: 1000 },
        { type: 'success', message: '💰 Payout: $150,000 USDC', delay: 1500 },
        { type: 'success', message: '✅ Funds + legal support deployed', delay: 1000 },
      ]
    }
  };

  const startSimulation = (scenarioId: string) => {
    setScenario(scenarioId);
    setStep(0);
    setLogs([]);
    setRunning(true);
    setPayout(0);
  };

  useEffect(() => {
    if (!running || !scenario) return;
    
    const currentScenario = scenarios[scenario as keyof typeof scenarios];
    if (step >= currentScenario.steps.length) {
      setRunning(false);
      setPayout(currentScenario.payout);
      return;
    }

    const currentStep = currentScenario.steps[step];
    const timer = setTimeout(() => {
      setLogs(prev => [...prev, {
        type: currentStep.type,
        message: currentStep.message,
        time: new Date().toLocaleTimeString()
      }]);
      setStep(step + 1);
    }, currentStep.delay);

    return () => clearTimeout(timer);
  }, [step, running, scenario]);

  const reset = () => {
    setScenario(null);
    setStep(0);
    setLogs([]);
    setRunning(false);
    setPayout(0);
  };

  return (
    <main className="min-h-screen bg-black text-white p-6">
      <div className="max-w-6xl mx-auto py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <a href="/" className="text-purple-400 hover:text-purple-300 mb-4 inline-block">← Back to Home</a>
          <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-blue-200">
            Live Demo
          </h1>
          <p className="text-xl text-gray-400">Watch AgentInsurance in action with real-time scenarios</p>
        </motion.div>

        {!scenario ? (
          /* Scenario selection */
          <div className="grid md:grid-cols-3 gap-6">
            {Object.entries(scenarios).map(([id, s], index) => (
              <motion.button
                key={id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => startSimulation(id)}
                className="bg-white/5 border border-white/10 rounded-2xl p-8 text-left hover:bg-white/10 hover:border-purple-500/50 transition-all"
              >
                <div className="text-6xl mb-4">{s.icon}</div>
                <h3 className="text-2xl font-bold mb-2">{s.name}</h3>
                <p className="text-gray-400 mb-6">{s.description}</p>
                <div className="space-y-2 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Coverage</span>
                    <span className="font-semibold">${s.coverage.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Expected Payout</span>
                    <span className="font-semibold text-green-400">${s.payout.toLocaleString()}</span>
                  </div>
                </div>
                <div className="px-4 py-2 bg-purple-500/20 border border-purple-500/50 rounded-lg text-center font-semibold">
                  ▶ Start Simulation
                </div>
              </motion.button>
            ))}
          </div>
        ) : (
          /* Simulation running */
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left: Status */}
            <div>
              <div className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-white/10 rounded-2xl p-6 mb-6">
                <div className="text-6xl mb-4">{scenarios[scenario as keyof typeof scenarios].icon}</div>
                <h2 className="text-2xl font-bold mb-2">{scenarios[scenario as keyof typeof scenarios].name}</h2>
                <p className="text-gray-400 mb-4">{scenarios[scenario as keyof typeof scenarios].description}</p>
                
                <div className="space-y-3 pt-4 border-t border-white/10">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Status</span>
                    <span className={`font-semibold ${running ? 'text-yellow-400' : payout > 0 ? 'text-green-400' : 'text-gray-400'}`}>
                      {running ? '⏳ Processing...' : payout > 0 ? '✅ Resolved' : '⏸️ Idle'}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Steps</span>
                    <span className="font-semibold">{step}/{scenarios[scenario as keyof typeof scenarios].steps.length}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Coverage</span>
                    <span className="font-semibold">${scenarios[scenario as keyof typeof scenarios].coverage.toLocaleString()}</span>
                  </div>
                </div>
              </div>

              {/* Payout result */}
              <AnimatePresence>
                {payout > 0 && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/50 rounded-2xl p-6 mb-6"
                  >
                    <div className="text-5xl mb-2">💰</div>
                    <div className="text-sm text-green-400 mb-1">Payout Received</div>
                    <div className="text-4xl font-bold mb-2">${payout.toLocaleString()} USDC</div>
                    <div className="text-sm text-gray-400">Settlement time: 47 seconds</div>
                  </motion.div>
                )}
              </AnimatePresence>

              <button
                onClick={reset}
                className="w-full px-6 py-3 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
              >
                ← Try Another Scenario
              </button>
            </div>

            {/* Right: Live logs */}
            <div className="bg-black/50 border border-white/10 rounded-2xl p-6 font-mono">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <div className="text-xs text-gray-500 ml-2">agent-insurance-demo</div>
              </div>

              <div className="space-y-2 h-[500px] overflow-y-auto">
                <AnimatePresence>
                  {logs.map((log, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className={`text-sm ${
                        log.type === 'error' ? 'text-red-400' :
                        log.type === 'warning' ? 'text-yellow-400' :
                        log.type === 'success' ? 'text-green-400' :
                        'text-gray-300'
                      }`}
                    >
                      <span className="text-gray-600">[{log.time}]</span> {log.message}
                    </motion.div>
                  ))}
                </AnimatePresence>
                {running && (
                  <div className="flex items-center gap-2 text-gray-500">
                    <span className="animate-pulse">▋</span>
                    <span className="text-xs">Processing...</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
