'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export function StatsSection() {
  const [counts, setCounts] = useState({
    coverage: 0,
    agents: 0,
    claims: 0,
    payout: 0
  });

  useEffect(() => {
    // Animate numbers on mount
    const targets = {
      coverage: 2500000,
      agents: 150,
      claims: 47,
      payout: 98.5
    };

    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      
      setCounts({
        coverage: Math.floor(targets.coverage * progress),
        agents: Math.floor(targets.agents * progress),
        claims: Math.floor(targets.claims * progress),
        payout: Math.floor(targets.payout * progress * 10) / 10
      });

      if (step >= steps) {
        clearInterval(timer);
        setCounts(targets);
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  const stats = [
    {
      value: `$${(counts.coverage / 1000000).toFixed(1)}M`,
      label: "Total Coverage Issued",
      description: "Protecting businesses worldwide"
    },
    {
      value: `${counts.agents}+`,
      label: "Agents Insured",
      description: "Trading bots, autonomous systems, AI workers"
    },
    {
      value: `${counts.claims}`,
      label: "Claims Processed",
      description: "Average payout time: 47 seconds"
    },
    {
      value: `${counts.payout}%`,
      label: "Claim Accuracy",
      description: "Verified by oracle consensus"
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
            Trusted by <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-400">Builders</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Real coverage, real payouts, real protection for the agentic economy.
          </p>
        </motion.div>

        {/* Stats grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="relative group"
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/0 to-emerald-500/0 group-hover:from-green-500/10 group-hover:to-emerald-500/10 rounded-2xl blur-xl transition-all duration-300" />
              
              {/* Card */}
              <div className="relative bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm hover:border-white/20 transition-all text-center">
                <div className="text-5xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-400">
                  {stat.value}
                </div>
                <div className="text-lg font-semibold mb-2">{stat.label}</div>
                <div className="text-sm text-gray-500">{stat.description}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-24 grid md:grid-cols-3 gap-8"
        >
          {[
            {
              quote: "Our trading bot lost $50K in a flash crash. AgentInsurance paid out in 45 seconds. Saved our business.",
              author: "Sarah Chen",
              role: "CEO, QuantumTrade"
            },
            {
              quote: "Finally, insurance that understands AI agents. No paperwork, no waiting. Just instant protection.",
              author: "Marcus Rodriguez",
              role: "CTO, AutomateAI"
            },
            {
              quote: "We insure 20+ agents across our platform. AgentInsurance scales with us. Game changer.",
              author: "Priya Sharma",
              role: "Founder, AgentMarketplace"
            }
          ].map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 + index * 0.1, duration: 0.6 }}
              className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-sm"
            >
              <div className="text-gray-300 mb-6 italic leading-relaxed">
                "{testimonial.quote}"
              </div>
              <div>
                <div className="font-semibold">{testimonial.author}</div>
                <div className="text-sm text-gray-500">{testimonial.role}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
