'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { CoinIcon, BotIcon, SmileIcon } from './Icons';

export function StatsSection() {
  const [counts, setCounts] = useState({ coverage: 0, agents: 0, accuracy: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      setCounts((prev) => ({
        coverage: Math.min(prev.coverage + Math.random() * 500000, 2500000),
        agents: Math.min(prev.agents + Math.random() * 5, 150),
        accuracy: Math.min(prev.accuracy + Math.random() * 0.5, 99.2),
      }));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const stats = [
    { label: 'Coverage Issued', value: counts.coverage, suffix: '$', Icon: CoinIcon, color: 'from-yellow-300 to-orange-300', iconColor: 'text-orange-700' },
    { label: 'Bots Protected', value: counts.agents, suffix: '+', Icon: BotIcon, color: 'from-purple-300 to-pink-300', iconColor: 'text-purple-700' },
    { label: 'Happy Customers', value: counts.accuracy, suffix: '%', Icon: SmileIcon, color: 'from-pink-300 to-rose-300', iconColor: 'text-pink-700' },
  ];

  return (
    <section className="relative py-32 px-6 overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="display-sm md:display-md gradient-text mb-4">
            Builders Love Us
          </h2>
          <p className="body-lg text-purple-700/70 font-medium">
            Real bots, real coverage, real results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, type: 'spring' }}
              whileHover={{ y: -8, rotate: i % 2 === 0 ? 1 : -1 }}
              className="card-cute p-8 text-center"
            >
              <motion.div
                animate={{ y: [0, -8, 0], rotate: [0, 10, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: i * 0.3 }}
                className={`w-20 h-20 mx-auto rounded-3xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-4 shadow-md`}
              >
                <stat.Icon className={stat.iconColor} size={40} />
              </motion.div>
              <div className="display-md gradient-text mb-1">
                {stat.suffix === '$' ? '$' : ''}
                {Math.floor(stat.value).toLocaleString()}
                {stat.suffix !== '$' ? stat.suffix : ''}
              </div>
              <p className="text-sm font-bold text-purple-700/70">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
