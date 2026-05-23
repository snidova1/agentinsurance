'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

export function StatsSection() {
  const ref = useRef(null);
  const [counts, setCounts] = useState({
    coverage: 0,
    agents: 0,
    accuracy: 0
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCounts(prev => ({
        coverage: Math.min(prev.coverage + Math.random() * 500000, 2500000),
        agents: Math.min(prev.agents + Math.random() * 5, 150),
        accuracy: Math.min(prev.accuracy + Math.random() * 0.5, 99.2)
      }));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section ref={ref} className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#08090a] via-[#0f1011] to-[#08090a]" />
      
      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="display-sm text-[#f7f8f8] mb-4" style={{ fontFeatureSettings: '"cv01", "ss03"' }}>
            Trusted by Builders
          </h2>
          <p className="body-lg text-[#8a8f98]">
            Real coverage, real payouts, real protection for the agentic economy.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { label: 'Coverage Issued', value: counts.coverage, suffix: '$' },
            { label: 'Agents Insured', value: counts.agents, suffix: '+' },
            { label: 'Claim Accuracy', value: counts.accuracy, suffix: '%' }
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="p-8 rounded-lg bg-white/[0.02] border border-white/[0.08] backdrop-blur-linear text-center hover:bg-white/[0.04] transition-all duration-300"
            >
              <div className="text-5xl font-medium text-[#7170ff] mb-2 tracking-[-1.056px]" style={{ fontFeatureSettings: '"cv01", "ss03"' }}>
                {stat.suffix === '$' ? '$' : ''}{Math.floor(stat.value).toLocaleString()}{stat.suffix}
              </div>
              <p className="text-[#8a8f98] body-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
