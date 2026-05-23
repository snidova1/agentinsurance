'use client';

import { motion } from 'framer-motion';

export function ProblemSection() {
  const problems = [
    {
      icon: "⚠️",
      title: "Agent Errors Cost Millions",
      description: "Autonomous AI agents make mistakes—wrong trades, bad decisions, data breaches. Who pays?"
    },
    {
      icon: "🔒",
      title: "No Liability Framework",
      description: "Traditional insurance doesn't cover AI agents. Businesses are exposed to unlimited risk."
    },
    {
      icon: "⏱️",
      title: "Slow Manual Claims",
      description: "Legacy insurance takes weeks to process claims. AI failures need instant resolution."
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
            The <span className="text-red-500">Problem</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            As AI agents become autonomous, the risk of catastrophic failures grows exponentially. 
            Traditional insurance can't keep up.
          </p>
        </motion.div>

        {/* Problem cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-orange-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
              
              <div className="relative bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm hover:bg-white/10 transition-colors">
                <div className="text-6xl mb-6">{problem.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{problem.title}</h3>
                <p className="text-gray-400 leading-relaxed">{problem.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stat highlight */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-20 text-center"
        >
          <div className="inline-block bg-red-500/10 border border-red-500/20 rounded-2xl px-12 py-8">
            <div className="text-5xl font-bold text-red-400 mb-2">$4.2B</div>
            <div className="text-gray-400">Lost to AI agent failures in 2025</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
