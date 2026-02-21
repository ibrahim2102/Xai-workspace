 "use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import DataToIntelligenceScene from "./dataToIntelligenceScene";

export default function Hero() {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  const morphProgress = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const glowOpacity = useTransform(scrollYProgress, [0, 1], [0.2, 0.6]);

  return (
    <main
      ref={ref}
      className="grow flex flex-col items-center px-6 pt-10 pb-20 relative overflow-hidden"
    >
      <motion.div
        style={{ opacity: glowOpacity }}
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full h-full max-w-3xl bg-primary/40 blur-[140px] rounded-full -z-10 pointer-events-none"
      />

      <section className="w-full max-w-6xl flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
        <div className="flex-1 text-center lg:text-left space-y-6">
          <motion.span
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 text-primary/90 text-[11px] tracking-[0.25em] uppercase"
          >
            <span className="inline-block size-1.5 rounded-full bg-primary/80" />
            Data → Intelligence
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-white"
          >
            Turn live data flows into calm, structured intelligence.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-xl"
          >
            Stream raw telemetry in, watch it resolve into explainable patterns, and ship decisions
            that feel effortless.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-3 mt-4"
          >
            <button className="bg-primary hover:bg-primary/90 text-white font-semibold py-3.5 px-7 rounded-xl text-sm sm:text-base transition-all shadow-lg shadow-primary/40 flex items-center gap-2">
              Start the Intelligence Flow
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            <button className="text-xs sm:text-sm text-slate-300 hover:text-white flex items-center gap-2">
              Preview the dashboard
              <span className="size-1.5 rounded-full bg-emerald-400" />
            </button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, type: "spring", stiffness: 120 }}
          className="flex-1 flex justify-center"
        >
          <DataToIntelligenceScene scrollProgress={morphProgress.get()} />
        </motion.div>
      </section>

      <section className="mt-10 w-full max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4"
        >
          <div className="rounded-2xl border border-border-dark bg-surface-dark/80 px-4 py-3">
            <p className="text-[10px] font-semibold tracking-[0.22em] uppercase text-slate-400 mb-1.5">
              Active Pipelines
            </p>
            <p className="text-2xl font-bold text-white">32</p>
            <p className="text-[11px] text-emerald-400 mt-1.5">+4 this week</p>
          </div>

          <div className="rounded-2xl border border-border-dark bg-surface-dark/80 px-4 py-3">
            <p className="text-[10px] font-semibold tracking-[0.22em] uppercase text-slate-400 mb-1.5">
              Signals / Minute
            </p>
            <p className="text-2xl font-bold text-white">12.4k</p>
            <p className="text-[11px] text-slate-400 mt-1.5">Synthetic demo stream</p>
          </div>

          <div className="rounded-2xl border border-border-dark bg-surface-dark/80 px-4 py-3">
            <p className="text-[10px] font-semibold tracking-[0.22em] uppercase text-slate-400 mb-1.5">
              Median Latency
            </p>
            <p className="text-2xl font-bold text-white">142 ms</p>
            <p className="text-[11px] text-emerald-400 mt-1.5">Within target envelope</p>
          </div>
        </motion.div>
      </section>

      <section className="mt-8 w-full max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl border border-border-dark/80 bg-surface-dark/80 backdrop-blur-md px-5 py-4 flex items-center justify-between gap-4"
        >
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/40 flex items-center justify-center text-primary">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h10M4 18h6" />
              </svg>
            </div>
            <div>
              <p className="text-xs font-semibold tracking-[0.22em] uppercase text-slate-400">
                Intelligence dashboard preview
              </p>
              <p className="text-sm text-slate-200">
                See how insights, flows, and signals align in one calm surface.
              </p>
            </div>
          </div>
          <div className="hidden sm:flex items-center gap-1 text-[11px] text-slate-400">
            Live data
            <span className="size-1.5 rounded-full bg-emerald-400" />
          </div>
        </motion.div>
      </section>
    </main>
  );
}
