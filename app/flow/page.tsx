 "use client";

import Header from "../../components/header";
import FlowStage from "../../components/flowStage";
import BottomNav from "../../components/bottomnav";
import { motion } from "framer-motion";

export default function FlowPage() {
  return (
    <div className="min-h-screen bg-background-dark text-white flex flex-col" style={{ backgroundColor: '#050505' }}>
      <Header />

      <main className="flex-1 px-6 py-8 relative overflow-y-auto">
        <section className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold mb-4 text-white"
          >
            The Intelligence Flow
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="text-white/70 text-base max-w-sm mx-auto"
          >
            Experience the power of AI-driven data transformation through our seamless vertical
            pipeline.
          </motion.p>
        </section>

        <section className="relative pb-8">
          <div className="absolute left-[28px] top-14 bottom-20 w-[2px] bg-primary rounded-full"></div>

          <div className="space-y-16 relative">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6 }}
              whileHover={{ x: 4, scale: 1.01 }}
            >
              <FlowStage
                stage="STAGE 01"
                title="Ingest Data"
                description="Seamlessly connect and aggregate diverse data streams from cloud platforms and local infrastructure."
                icon="snowflake"
                active
                subElements={
                  <div className="flex gap-3 items-center">
                    <div className="w-8 h-8 rounded bg-white/5 border border-white/10 flex items-center justify-center">
                      <svg className="w-4 h-4 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                      </svg>
                    </div>
                    <div className="w-8 h-8 rounded bg-white/5 border border-white/10 flex items-center justify-center">
                      <svg className="w-4 h-4 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                      </svg>
                    </div>
                    <div className="w-8 h-8 rounded bg-white/5 border border-white/10 flex items-center justify-center">
                      <svg className="w-4 h-4 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                      </svg>
                    </div>
                  </div>
                }
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ x: 4, scale: 1.01 }}
            >
              <FlowStage
                stage="STAGE 02"
                title="Analyze with AI"
                description="Our proprietary neural models transform raw noise into structured, queryable intelligence in real-time."
                icon="analyze"
                subElements={
                  <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-primary rounded-full" style={{ width: "66%" }}></div>
                  </div>
                }
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ x: 4, scale: 1.01 }}
            >
              <FlowStage
                stage="STAGE 03"
                title="Generate Insight"
                description="Receive high-fidelity actionable insights and predictive outcomes delivered instantly to your dashboard."
                icon="insight"
                subElements={
                  <button className="flex items-center gap-2 text-primary font-semibold text-sm">
                    VIEW REPORTS
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                }
              />
            </motion.div>
          </div>
        </section>

        <section className="py-8 pb-20">
          <motion.button
            whileHover={{ scale: 1.02, boxShadow: "0 20px 45px rgba(0,168,255,0.4)" }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 px-6 rounded-lg shadow-lg shadow-primary/30 transition-all"
          >
            Start the Flow
          </motion.button>
        </section>
      </main>

      <BottomNav />
    </div>
  );
}
