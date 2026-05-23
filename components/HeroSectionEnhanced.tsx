'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useMemo, useRef, useState } from 'react';

const particles = Array.from({ length: 22 }, (_, i) => ({
  left: (i * 37) % 100,
  top: (i * 53) % 100,
  delay: (i % 7) * 0.22,
  duration: 3 + (i % 5) * 0.35,
}));

export function HeroSectionEnhanced({ onGetCoverage, onViewDemo }: { onGetCoverage: () => void; onViewDemo: () => void }) {
  const ref = useRef<HTMLElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '42%']);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 14,
        y: (e.clientY / window.innerHeight - 0.5) * 14,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <motion.div style={{ y, opacity }} className="absolute inset-0 bg-gradient-to-br from-purple-950/30 via-black to-blue-950/30" />
      <motion.div style={{ y }} className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />

      <div className="absolute inset-0 overflow-hidden">
        {particles.map((p, i) => (
          <motion.div
            key={i}
            className="absolute h-1 w-1 rounded-full bg-purple-300/40"
            style={{ left: `${p.left}%`, top: `${p.top}%` }}
            animate={{ y: [0, -34, 0], opacity: [0.18, 0.85, 0.18], scale: [1, 1.8, 1] }}
            transition={{ duration: p.duration, repeat: Infinity, delay: p.delay, ease: 'easeInOut' }}
          />
        ))}
      </div>

      <motion.div style={{ scale }} className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <motion.div
          animate={{ x: mousePosition.x, y: mousePosition.y }}
          transition={{ type: 'spring', stiffness: 120, damping: 28 }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0, x: mousePosition.x }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ delay: 0.15, duration: 0.55 }}
            className="relative mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-sm"
          >
            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 blur-xl" />
            <span className="relative h-2 w-2 rounded-full bg-green-500 animate-pulse" />
            <span className="relative text-sm text-gray-300">Interactive testnet prototype live</span>
          </motion.div>

          <motion.h1
            className="mb-6 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-[length:200%_200%] bg-clip-text text-6xl font-bold text-transparent md:text-8xl"
            animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
          >
            AgentInsurance
          </motion.h1>

          <p className="mb-4 text-2xl font-light text-gray-400 md:text-3xl">Parametric Insurance for AI Agent Failures</p>
          <p className="mx-auto mb-12 max-w-2xl text-lg text-gray-500">
            Quote policies, simulate claims, and see instant USDC payouts for autonomous AI agent failures.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <MagneticButton>
              <motion.button
                onClick={onGetCoverage}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 px-8 py-4 text-lg font-semibold shadow-lg shadow-purple-500/30"
              >
                <span className="relative z-10">Get Coverage</span>
                <motion.span className="absolute inset-0 bg-white/20" initial={{ x: '-120%' }} whileHover={{ x: '120%' }} transition={{ duration: 0.55 }} />
              </motion.button>
            </MagneticButton>
            <MagneticButton>
              <motion.button
                onClick={onViewDemo}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="rounded-xl border border-white/10 bg-white/5 px-8 py-4 text-lg font-semibold backdrop-blur-sm transition hover:bg-white/10"
              >
                View Demo
              </motion.button>
            </MagneticButton>
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.55 }} className="mx-auto mt-20 grid max-w-3xl grid-cols-3 gap-4 md:gap-8">
            <StatCard value="$2.5M" label="Coverage Issued" />
            <StatCard value="150+" label="Agents Insured" />
            <StatCard value="47s" label="Avg Payout" />
          </motion.div>
        </motion.div>
      </motion.div>

      <FloatingOrb className="left-1/4 top-1/4 h-64 w-64 bg-purple-500/20" duration={4} />
      <FloatingOrb className="bottom-1/4 right-1/4 h-96 w-96 bg-blue-500/20" duration={5} reverse />
    </section>
  );
}

function MagneticButton({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  return (
    <motion.div
      ref={ref}
      onMouseMove={(e) => {
        const rect = ref.current?.getBoundingClientRect();
        if (!rect) return;
        setPos({ x: (e.clientX - rect.left - rect.width / 2) * 0.18, y: (e.clientY - rect.top - rect.height / 2) * 0.18 });
      }}
      onMouseLeave={() => setPos({ x: 0, y: 0 })}
      animate={pos}
      transition={{ type: 'spring', stiffness: 180, damping: 18 }}
    >
      {children}
    </motion.div>
  );
}

function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <motion.div whileHover={{ y: -6, scale: 1.04 }} className="group relative cursor-default">
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/10 to-blue-500/10 blur-xl transition group-hover:blur-2xl" />
      <div className="relative rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm md:p-6">
        <div className="mb-2 text-3xl font-bold text-white md:text-4xl">{value}</div>
        <div className="text-xs text-gray-500 md:text-sm">{label}</div>
      </div>
    </motion.div>
  );
}

function FloatingOrb({ className, duration, reverse = false }: { className: string; duration: number; reverse?: boolean }) {
  return (
    <motion.div
      animate={{ y: reverse ? [0, 20, 0] : [0, -20, 0], x: reverse ? [0, -10, 0] : [0, 10, 0], opacity: [0.25, 0.6, 0.25], scale: [1, 1.18, 1] }}
      transition={{ duration, repeat: Infinity, ease: 'easeInOut' }}
      className={`absolute rounded-full blur-3xl ${className}`}
    />
  );
}
