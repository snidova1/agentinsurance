'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { ShieldIcon, ArrowRightIcon, PlayIcon, GitHubIcon, CheckIcon } from './Icons';

export function CTASection() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      setError('Please enter a valid email');
      return;
    }

    setError('');
    setLoading(true);

    try {
      const waitlist = JSON.parse(localStorage.getItem('agentinsurance_waitlist') || '[]');
      waitlist.push({ email, timestamp: new Date().toISOString() });
      localStorage.setItem('agentinsurance_waitlist', JSON.stringify(waitlist));

      await new Promise(resolve => setTimeout(resolve, 1500));

      setSubmitted(true);
      setLoading(false);
    } catch (err) {
      setError('Something went wrong. Please try again.');
      setLoading(false);
    }
  };

  return (
    <section className="relative py-32 px-6 overflow-hidden">
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.02] border border-white/[0.08] backdrop-blur-linear mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#7170ff]" />
            <span className="text-[13px] font-medium text-[#d0d6e0] tracking-[-0.13px]">
              Launching Q3 2026
            </span>
          </motion.div>

          {/* Heading */}
          <h2 className="display-md text-[#f7f8f8] mb-6" style={{ fontFeatureSettings: '"cv01", "ss03"' }}>
            Ready to <span className="brand-gradient">Protect</span> Your Agents?
          </h2>

          <p className="body-lg text-[#8a8f98] mb-12 max-w-2xl mx-auto">
            Join the waitlist for early access. First 100 users get 50% off premiums for 6 months.
          </p>

          {/* Email signup */}
          {!submitted ? (
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="flex flex-col gap-3 justify-center items-center max-w-2xl mx-auto mb-12"
            >
              <div className="flex flex-col sm:flex-row gap-3 w-full">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setError('');
                  }}
                  placeholder="your@email.com"
                  disabled={loading}
                  className="w-full sm:flex-1 px-4 py-3 bg-white/[0.02] border border-white/[0.08] rounded-lg backdrop-blur-linear focus:outline-none focus:border-[#5e6ad2] focus:bg-white/[0.04] transition-all duration-200 text-[#f7f8f8] placeholder-[#62666d] text-[15px]"
                />
                <motion.button
                  type="submit"
                  disabled={loading}
                  whileHover={{ scale: loading ? 1 : 1.02 }}
                  whileTap={{ scale: loading ? 1 : 0.98 }}
                  className="px-6 py-3 bg-[#5e6ad2] hover:bg-[#7170ff] text-white rounded-lg font-medium text-[15px] transition-all duration-200 glow-brand disabled:opacity-50 inline-flex items-center justify-center gap-2 whitespace-nowrap"
                >
                  {loading ? (
                    <>
                      <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      <span>Joining</span>
                    </>
                  ) : (
                    <>
                      <span>Join Waitlist</span>
                      <ArrowRightIcon size={16} />
                    </>
                  )}
                </motion.button>
              </div>
              {error && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-[#ef4444] text-[13px]"
                >
                  {error}
                </motion.p>
              )}
            </motion.form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: 'spring', stiffness: 200 }}
              className="max-w-2xl mx-auto mb-12 bg-gradient-to-br from-[#10b981]/10 to-[#5e6ad2]/10 border border-[#10b981]/30 rounded-lg p-8 backdrop-blur-linear"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
                className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#10b981] to-[#5e6ad2] flex items-center justify-center text-white"
              >
                <CheckIcon size={24} />
              </motion.div>
              <h3 className="heading-md text-[#f7f8f8] mb-2">You're on the waitlist</h3>
              <p className="body-sm text-[#d0d6e0] mb-1">
                We've added <span className="font-medium text-[#f7f8f8]">{email}</span>
              </p>
              <p className="caption text-[#8a8f98]">
                You'll be among the first to get access.
              </p>
            </motion.div>
          )}

          {/* Social proof */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-wrap justify-center items-center gap-8 caption text-[#62666d]"
          >
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#10b981] animate-pulse" />
              <span>500+ on waitlist</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#5e6ad2]" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#7170ff]" />
              <span>Early access perks</span>
            </div>
          </motion.div>

          {/* Additional CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="mt-16 flex flex-col sm:flex-row gap-3 justify-center"
          >
            <a
              href="/demo"
              className="px-5 py-2.5 bg-white/[0.02] border border-white/[0.08] hover:bg-white/[0.05] hover:border-white/[0.12] rounded-lg backdrop-blur-linear transition-all duration-200 inline-flex items-center justify-center gap-2 text-[#d0d6e0] text-[14px]"
            >
              <PlayIcon size={14} />
              <span>Try Demo</span>
            </a>
            <a
              href="https://github.com/snidova1/agentinsurance"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-white/[0.02] border border-white/[0.08] hover:bg-white/[0.05] hover:border-white/[0.12] rounded-lg backdrop-blur-linear transition-all duration-200 inline-flex items-center justify-center gap-2 text-[#d0d6e0] text-[14px]"
            >
              <GitHubIcon size={14} />
              <span>View Source</span>
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="relative z-10 mt-32 pt-12 border-t border-white/[0.05]"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2 text-[#f7f8f8]">
              <ShieldIcon size={20} className="text-[#7170ff]" />
              <span className="font-medium tracking-[-0.165px]">AgentInsurance</span>
            </div>
            
            <div className="flex gap-8 caption text-[#8a8f98]">
              <a href="/demo" className="hover:text-[#f7f8f8] transition-colors">Demo</a>
              <a href="https://github.com/snidova1/agentinsurance" target="_blank" rel="noopener noreferrer" className="hover:text-[#f7f8f8] transition-colors">GitHub</a>
              <a href="#" className="hover:text-[#f7f8f8] transition-colors">Docs</a>
              <a href="#" className="hover:text-[#f7f8f8] transition-colors">Blog</a>
            </div>
            
            <div className="caption text-[#62666d]">
              © 2026 AgentInsurance
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
