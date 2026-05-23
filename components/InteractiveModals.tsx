'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useMemo, useState } from 'react';

type ModalType = 'coverage' | 'demo' | null;

export function InteractiveModals({ active, onClose }: { active: ModalType; onClose: () => void }) {
  return (
    <AnimatePresence>
      {active === 'coverage' && <CoverageModal onClose={onClose} />}
      {active === 'demo' && <DemoModal onClose={onClose} />}
    </AnimatePresence>
  );
}

function ModalShell({ title, eyebrow, onClose, children }: { title: string; eyebrow: string; onClose: () => void; children: React.ReactNode }) {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.button
        aria-label="Close modal backdrop"
        className="absolute inset-0 bg-black/80 backdrop-blur-xl"
        onClick={onClose}
      />
      <motion.div
        initial={{ opacity: 0, y: 28, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 24, scale: 0.96 }}
        transition={{ type: 'spring', stiffness: 180, damping: 22 }}
        className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-3xl border border-white/10 bg-[#05050a]/95 shadow-2xl shadow-purple-500/20"
      >
        <div className="pointer-events-none absolute inset-0 rounded-3xl bg-[radial-gradient(circle_at_top_left,rgba(168,85,247,0.18),transparent_36%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.15),transparent_34%)]" />
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-white/10 bg-[#05050a]/80 px-6 py-5 backdrop-blur-xl">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.3em] text-purple-300">{eyebrow}</div>
            <h2 className="mt-1 text-2xl font-bold text-white md:text-3xl">{title}</h2>
          </div>
          <button
            onClick={onClose}
            className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300 transition hover:bg-white/10 hover:text-white"
          >
            Close
          </button>
        </div>
        <div className="relative p-6 md:p-8">{children}</div>
      </motion.div>
    </motion.div>
  );
}

function CoverageModal({ onClose }: { onClose: () => void }) {
  const [agentType, setAgentType] = useState('Trading Agent');
  const [coverage, setCoverage] = useState(100000);
  const [risk, setRisk] = useState(42);
  const [created, setCreated] = useState(false);

  const quote = useMemo(() => {
    const typeMultiplier: Record<string, number> = {
      'Trading Agent': 1.35,
      'Customer Support Agent': 0.72,
      'Treasury Agent': 1.15,
      'Research Agent': 0.58,
    };
    const monthlyPremium = Math.round((coverage * (0.004 + risk / 28000) * typeMultiplier[agentType]) / 12);
    const deductible = Math.round(coverage * (risk > 70 ? 0.08 : risk > 45 ? 0.05 : 0.025));
    const payoutTime = risk > 70 ? '90 sec' : risk > 45 ? '60 sec' : '30 sec';
    return { monthlyPremium, deductible, payoutTime };
  }, [agentType, coverage, risk]);

  return (
    <ModalShell eyebrow="Get Coverage" title="Build a live AI-agent policy quote" onClose={onClose}>
      <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="space-y-5 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
          <Field label="Agent type">
            <div className="grid grid-cols-2 gap-3">
              {['Trading Agent', 'Customer Support Agent', 'Treasury Agent', 'Research Agent'].map((type) => (
                <button
                  key={type}
                  onClick={() => setAgentType(type)}
                  className={`rounded-xl border px-4 py-3 text-left text-sm transition ${agentType === type ? 'border-purple-400 bg-purple-500/20 text-white' : 'border-white/10 bg-white/5 text-gray-300 hover:bg-white/10'}`}
                >
                  {type}
                </button>
              ))}
            </div>
          </Field>

          <Field label={`Coverage amount: $${coverage.toLocaleString()}`}>
            <input
              type="range"
              min={25000}
              max={1000000}
              step={25000}
              value={coverage}
              onChange={(e) => setCoverage(Number(e.target.value))}
              className="w-full accent-purple-500"
            />
            <div className="mt-2 flex justify-between text-xs text-gray-500"><span>$25K</span><span>$1M</span></div>
          </Field>

          <Field label={`Agent risk score: ${risk}/100`}>
            <input
              type="range"
              min={5}
              max={95}
              value={risk}
              onChange={(e) => setRisk(Number(e.target.value))}
              className="w-full accent-blue-500"
            />
            <div className="mt-2 flex justify-between text-xs text-gray-500"><span>Conservative</span><span>High-risk</span></div>
          </Field>

          <div className="grid gap-3 md:grid-cols-3">
            <Metric label="Premium" value={`$${quote.monthlyPremium.toLocaleString()}/mo`} />
            <Metric label="Deductible" value={`$${quote.deductible.toLocaleString()}`} />
            <Metric label="Payout SLA" value={quote.payoutTime} />
          </div>
        </div>

        <div className="rounded-2xl border border-purple-400/20 bg-gradient-to-br from-purple-500/10 to-blue-500/10 p-5">
          <div className="mb-5 flex items-center justify-between">
            <div>
              <div className="text-sm text-gray-400">Generated policy</div>
              <div className="text-xl font-bold text-white">AGI-{Math.abs(agentType.length * coverage + risk).toString().slice(0, 6)}</div>
            </div>
            <div className={`rounded-full px-3 py-1 text-xs ${created ? 'bg-green-500/20 text-green-300' : 'bg-yellow-500/20 text-yellow-300'}`}>
              {created ? 'Active' : 'Draft'}
            </div>
          </div>

          <div className="space-y-3 text-sm">
            <PolicyRow k="Covered event" v="Loss exceeds predefined trigger threshold" />
            <PolicyRow k="Settlement asset" v="USDC" />
            <PolicyRow k="Oracle quorum" v="3 of 5 validators" />
            <PolicyRow k="Max payout" v={`$${coverage.toLocaleString()}`} />
          </div>

          <div className="mt-6 rounded-2xl bg-black/40 p-4 font-mono text-xs text-gray-300">
            <div className="text-purple-300">policy.create(&#123;</div>
            <div className="ml-4">agent: &quot;{agentType.toLowerCase().replaceAll(' ', '_')}&quot;,</div>
            <div className="ml-4">coverage: &quot;{coverage} USDC&quot;,</div>
            <div className="ml-4">premium: &quot;{quote.monthlyPremium} USDC/mo&quot;,</div>
            <div className="ml-4">trigger: &quot;parametric_failure&quot;</div>
            <div className="text-purple-300">&#125;)</div>
          </div>

          <button
            onClick={() => setCreated(true)}
            className="mt-6 w-full rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 px-5 py-4 font-semibold text-white shadow-lg shadow-purple-500/25 transition hover:scale-[1.01]"
          >
            {created ? '✅ Policy activated on testnet' : 'Create testnet policy'}
          </button>
        </div>
      </div>
    </ModalShell>
  );
}

function DemoModal({ onClose }: { onClose: () => void }) {
  const steps = [
    'Agent executes treasury transfer',
    'Anomaly detector flags unauthorized route',
    'Oracle quorum verifies policy trigger',
    'Smart contract releases USDC payout',
  ];
  const [running, setRunning] = useState(false);
  const [activeStep, setActiveStep] = useState(-1);

  function runDemo() {
    setRunning(true);
    setActiveStep(-1);
    steps.forEach((_, index) => {
      setTimeout(() => setActiveStep(index), 650 * (index + 1));
    });
    setTimeout(() => setRunning(false), 650 * (steps.length + 1));
  }

  return (
    <ModalShell eyebrow="Live Demo" title="Watch an agent failure claim settle in seconds" onClose={onClose}>
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
          <div className="mb-4 text-sm text-gray-400">Scenario</div>
          <div className="rounded-2xl border border-red-400/20 bg-red-500/10 p-4">
            <div className="text-2xl">🤖 → ⚠️ → 💰</div>
            <h3 className="mt-3 text-xl font-bold">Treasury Agent misroutes $42,000</h3>
            <p className="mt-2 text-sm text-gray-400">Policy trigger: unauthorized destination + loss exceeds $10,000 threshold.</p>
          </div>

          <button
            onClick={runDemo}
            disabled={running}
            className="mt-5 w-full rounded-xl bg-gradient-to-r from-emerald-500 to-blue-600 px-5 py-4 font-semibold text-white shadow-lg shadow-blue-500/25 transition hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {running ? 'Running simulation...' : 'Run claim simulation'}
          </button>

          <div className="mt-5 grid grid-cols-2 gap-3">
            <Metric label="Claim amount" value="$42,000" />
            <Metric label="Payout" value="$39,900" />
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-black/40 p-5">
          <div className="mb-5 flex items-center justify-between">
            <div className="text-sm text-gray-400">Execution timeline</div>
            <div className="rounded-full bg-white/5 px-3 py-1 text-xs text-gray-300">testnet simulation</div>
          </div>

          <div className="space-y-4">
            {steps.map((step, index) => {
              const done = activeStep >= index;
              return (
                <motion.div
                  key={step}
                  animate={{ opacity: done ? 1 : 0.45, x: done ? 0 : -8 }}
                  className="flex gap-4 rounded-xl border border-white/10 bg-white/[0.03] p-4"
                >
                  <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm ${done ? 'bg-green-500 text-black' : 'bg-white/10 text-gray-400'}`}>
                    {done ? '✓' : index + 1}
                  </div>
                  <div>
                    <div className="font-semibold text-white">{step}</div>
                    <div className="mt-1 font-mono text-xs text-gray-500">
                      {done ? `0${index + 1}.${Math.floor(17 + index * 11)}s // confirmed` : 'waiting for event...'}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {activeStep >= steps.length - 1 && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-5 rounded-2xl border border-green-400/30 bg-green-500/10 p-4"
            >
              <div className="text-sm text-green-300">Claim settled</div>
              <div className="mt-1 text-2xl font-bold text-white">$39,900 USDC paid to insured wallet</div>
              <div className="mt-2 text-xs text-gray-400">tx: 0x7e4...agentinsurance.demo</div>
            </motion.div>
          )}
        </div>
      </div>
    </ModalShell>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <div className="mb-3 text-sm font-semibold text-gray-300">{label}</div>
      {children}
    </label>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-white/10 bg-black/30 p-4">
      <div className="text-xs uppercase tracking-wider text-gray-500">{label}</div>
      <div className="mt-1 text-lg font-bold text-white">{value}</div>
    </div>
  );
}

function PolicyRow({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex items-center justify-between gap-4 rounded-xl bg-white/[0.03] px-4 py-3">
      <span className="text-gray-500">{k}</span>
      <span className="text-right font-medium text-gray-200">{v}</span>
    </div>
  );
}
