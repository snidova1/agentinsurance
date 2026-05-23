'use client';

import { motion } from 'framer-motion';

export function SolutionSection() {
  const features = [
    {
      icon: "🤖",
      title: "Agent-Native Coverage",
      description: "Insurance designed specifically for AI agents—trading bots, autonomous systems, and decision-making algorithms."
    },
    {
      icon: "⚡",
      title: "Instant Payouts",
      description: "Smart contracts verify failures and trigger payouts automatically. No paperwork, no waiting."
    },
    {
      icon: "🔐",
      title: "Parametric Triggers",
      description: "Pre-defined conditions trigger claims automatically. If agent fails, coverage pays out instantly."
    },
    {
      icon: "📊",
      title: "Risk Scoring",
      description: "On-chain reputation system tracks agent performance. Better agents get lower premiums."
    },
    {
      icon: "🌐",
      title: "Cross-Chain",
      description: "Coverage works across Ethereum, Solana, Base, and all major chains where agents operate."
    },
    {
      icon: "💎",
      title: "Stablecoin Native",
      description: "Premiums and payouts in USDC/USDT. No fiat friction, instant global settlement."
    }
  ];

  return (
    <section className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            The <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">Solution</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            AgentInsurance provides parametric, smart contract-based coverage that protects businesses 
            from AI agent failures with instant, verifiable payouts.
          </p>
        </motion.div>

        {/* Feature grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative"
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-blue-500/0 group-hover:from-purple-500/10 group-hover:to-blue-500/10 rounded-xl transition-all duration-300" />
              
              {/* Card */}
              <div className="relative bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-sm hover:border-white/20 transition-all">
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* How it works preview */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-24 bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-white/10 rounded-3xl p-12 backdrop-blur-sm"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">Simple, Transparent Coverage</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-green-400">1</span>
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Register Your Agent</div>
                    <div className="text-sm text-gray-400">Connect your AI agent and define coverage parameters</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-blue-400">2</span>
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Pay Premium in USDC</div>
                    <div className="text-sm text-gray-400">Instant coverage activation, no paperwork</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-purple-400">3</span>
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Automatic Payouts</div>
                    <div className="text-sm text-gray-400">Smart contract verifies failure and pays instantly</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              {/* Code snippet mockup */}
              <div className="bg-black/50 border border-white/10 rounded-xl p-6 font-mono text-sm">
                <div className="text-gray-500 mb-2">// Register agent for coverage</div>
                <div className="text-purple-400">const</div> <div className="text-blue-300 inline">policy</div> = <div className="text-yellow-300 inline">await</div> <div className="text-green-300 inline">agentInsurance</div>.<div className="text-blue-300 inline">createPolicy</div>({'{'}
                <div className="ml-4 text-gray-300">
                  agentId: <span className="text-orange-300">"agent_trading_bot_001"</span>,<br/>
                  coverage: <span className="text-orange-300">"$100,000"</span>,<br/>
                  premium: <span className="text-orange-300">"$500/month"</span>,<br/>
                  triggers: [<span className="text-orange-300">"loss_exceeds_10k"</span>]
                </div>
                {'}'});
                <div className="mt-4 text-green-400">// ✅ Coverage active in 2 seconds</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
