'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export function CTASection() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setError('Oops! That email looks funny 🤔');
      return;
    }
    setError('');
    setLoading(true);
    try {
      const waitlist = JSON.parse(localStorage.getItem('agentinsurance_waitlist') || '[]');
      waitlist.push({ email, timestamp: new Date().toISOString() });
      localStorage.setItem('agentinsurance_waitlist', JSON.stringify(waitlist));
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSubmitted(true);
      setLoading(false);
    } catch (err) {
      setError('Something broke 😅 Try again?');
      setLoading(false);
    }
  };

  return (
    <section className="relative py-32 px-6 overflow-hidden">
      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="card-cute p-10 md:p-16 text-center relative overflow-hidden"
          style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.9), rgba(243,232,255,0.9))' }}
        >
          {/* Floating shapes */}
          <motion.div
            animate={{ y: [0, -20, 0], rotate: [0, 360] }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute top-8 right-8 text-5xl opacity-30"
          >
            ✨
          </motion.div>
          <motion.div
            animate={{ y: [0, 15, 0], rotate: [0, -360] }}
            transition={{ duration: 12, repeat: Infinity }}
            className="absolute bottom-8 left-8 text-5xl opacity-30"
          >
            🌟
          </motion.div>

          <div className="relative z-10">
            {/* Badge */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg mb-6"
            >
              <span>🚀</span>
              <span className="text-sm font-bold">Launching Q3 2026</span>
            </motion.div>

            {/* Mascot */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="text-7xl mb-4"
            >
              💖
            </motion.div>

            {/* Heading */}
            <h2 className="display-sm md:display-md gradient-text mb-4">
              Ready to Protect Your Bot?
            </h2>
            <p className="body-lg text-purple-700/70 mb-10 max-w-xl mx-auto font-medium">
              Hop on the waitlist! First 100 friends get 50% off for 6 months 🎁
            </p>

            {/* Form */}
            {!submitted ? (
              <motion.form
                onSubmit={handleSubmit}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="max-w-lg mx-auto mb-8"
              >
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setError('');
                    }}
                    placeholder="your@email.com"
                    disabled={loading}
                    className="flex-1 px-5 py-4 bg-white/80 border-2 border-purple-200 focus:border-purple-500 rounded-full text-purple-900 placeholder-purple-300 focus:outline-none transition-colors font-medium"
                  />
                  <motion.button
                    type="submit"
                    disabled={loading}
                    whileHover={{ scale: loading ? 1 : 1.05 }}
                    whileTap={{ scale: loading ? 1 : 0.95 }}
                    className="btn-primary justify-center disabled:opacity-50"
                  >
                    {loading ? (
                      <>
                        <span>⏳</span>
                        <span>Joining...</span>
                      </>
                    ) : (
                      <>
                        <span>Join Waitlist</span>
                        <span>🎉</span>
                      </>
                    )}
                  </motion.button>
                </div>
                {error && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-pink-600 text-sm mt-3 font-bold"
                  >
                    {error}
                  </motion.p>
                )}
              </motion.form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: 'spring' }}
                className="max-w-lg mx-auto mb-8 bg-gradient-to-br from-green-100 to-blue-100 rounded-3xl p-8 border-2 border-green-300"
              >
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 1 }}
                  className="text-6xl mb-3"
                >
                  🎉
                </motion.div>
                <h3 className="heading-md text-purple-900 mb-2">You're in! Yay! 💖</h3>
                <p className="text-purple-700/70 font-medium">
                  We saved your spot at <span className="font-bold text-purple-900">{email}</span>
                </p>
              </motion.div>
            )}

            {/* Social proof */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap justify-center items-center gap-6 text-sm font-bold text-purple-700/70"
            >
              <div className="flex items-center gap-2">
                <span className="text-lg">👋</span>
                <span>500+ on waitlist</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-lg">💳</span>
                <span>No credit card</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-lg">🎁</span>
                <span>Early access perks</span>
              </div>
            </motion.div>

            {/* Extra CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
              className="mt-10 flex flex-col sm:flex-row gap-3 justify-center"
            >
              <motion.a
                whileHover={{ scale: 1.05 }}
                href="/demo"
                className="btn-secondary justify-center"
              >
                <span>▶️</span>
                Try Demo
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                href="https://github.com/snidova1/agentinsurance"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary justify-center"
              >
                <span>⭐</span>
                Star on GitHub
              </motion.a>
            </motion.div>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 pt-8 border-t-2 border-purple-200/50"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-purple-900">
              <span className="text-2xl">💜</span>
              <span className="font-extrabold text-lg gradient-text">AgentInsurance</span>
            </div>

            <div className="flex gap-6 text-sm font-bold text-purple-700/70">
              <a href="/demo" className="hover:text-purple-900 transition-colors">Demo</a>
              <a href="https://github.com/snidova1/agentinsurance" target="_blank" rel="noopener noreferrer" className="hover:text-purple-900 transition-colors">GitHub</a>
              <a href="#" className="hover:text-purple-900 transition-colors">Docs</a>
              <a href="#" className="hover:text-purple-900 transition-colors">Blog</a>
            </div>

            <div className="text-sm font-bold text-purple-700/50">
              Made with 💖 in 2026
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
