'use client';

import { motion } from 'framer-motion';
import { AlertTriangleIcon, LockIcon, ClockIcon } from './Icons';

export function ProblemSection() {
  const problems = [
    {
      Icon: AlertTriangleIcon,
      title: 'Agent Errors Cost Millions',
      description: 'A single miscalculation or logic error can result in catastrophic financial losses'
    },
    {
      Icon: LockIcon,
      title: 'No Liability Framework',
      description: 'Traditional insurance doesn\'t cover autonomous AI agent failures'
    },
    {
      Icon: ClockIcon,
      title: 'Slow Manual Claims',
      description: 'Traditional claims take weeks. Businesses need instant payouts'
    }
  ];

  return (
    <section className="relative py-32 px-6 overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="display-sm text-[#f7f8f8] mb-4" style={{ fontFeatureSettings: '"cv01", "ss03"' }}>
            The Problem
          </h2>
          <p className="body-lg text-[#8a8f98] max-w-2xl mx-auto">
            As AI agents become autonomous, the risk of catastrophic failures grows exponentially. 
            Traditional insurance can't keep up.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {problems.map(({ Icon, title, description }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              whileHover={{ y: -4 }}
              className="group p-6 rounded-lg bg-white/[0.02] border border-white/[0.08] backdrop-blur-linear hover:bg-white/[0.04] hover:border-white/[0.12] transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#5e6ad2]/20 to-[#7170ff]/10 border border-white/[0.08] flex items-center justify-center mb-4 text-[#7170ff] group-hover:scale-110 transition-transform">
                <Icon size={22} />
              </div>
              <h3 className="heading-md text-[#f7f8f8] mb-3">
                {title}
              </h3>
              <p className="body-sm text-[#8a8f98]">
                {description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-center p-8 rounded-lg bg-gradient-to-r from-[#5e6ad2]/10 to-[#7170ff]/10 border border-white/[0.08] backdrop-blur-linear"
        >
          <div className="text-5xl font-medium text-[#f7f8f8] mb-2 tracking-[-1.056px]" style={{ fontFeatureSettings: '"cv01", "ss03"' }}>
            $4.2B
          </div>
          <p className="text-[#8a8f98]">
            Lost to AI agent failures in 2025
          </p>
        </motion.div>
      </div>
    </section>
  );
}
