import DashboardHeader from "../../components/dashboardHeader";
import BottomNav from "../../components/bottomnav";

export default function AnalyticsPage() {
  return (
    <div className="min-h-screen bg-background-dark text-white flex flex-col">
      <DashboardHeader />

      <main className="flex-1 px-4 pt-4 pb-24 space-y-8">
        <section className="bg-surface-dark border border-border-dark rounded-2xl p-5">
          <div className="flex items-start justify-between mb-6">
            <div>
              <p className="text-[10px] font-semibold tracking-[0.25em] text-slate-400 uppercase">
                Intelligence Efficiency
              </p>
              <div className="flex items-baseline gap-3 mt-4">
                <span className="text-4xl font-extrabold tracking-tight">94.2%</span>
                <span className="text-xs text-slate-400">This week</span>
              </div>
            </div>
            <div className="flex flex-col items-end gap-2">
              <span className="inline-flex items-center gap-1 text-emerald-400 text-xs font-semibold bg-emerald-500/10 px-3 py-1 rounded-full">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                </svg>
                <span>+12.5%</span>
              </span>
              <p className="text-[10px] text-slate-500 uppercase tracking-[0.18em]">
                Vs last cycle
              </p>
            </div>
          </div>

          <div className="relative h-32 w-full rounded-xl bg-gradient-to-r from-primary/10 via-primary/40 to-primary/10 overflow-hidden">
            <div className="absolute inset-x-6 bottom-10 h-10 bg-gradient-to-t from-primary/60 to-transparent opacity-70" />
            <div className="absolute inset-x-8 bottom-10 h-1.5 rounded-full bg-primary shadow-[0_0_40px_rgba(0,168,255,0.6)]" />
            <div className="absolute inset-x-6 bottom-4 flex justify-between text-[10px] uppercase tracking-[0.22em] text-slate-400">
              <span>Mon</span>
              <span>Wed</span>
              <span>Fri</span>
              <span>Sun</span>
            </div>
          </div>
        </section>

        <section className="space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="text-[10px] font-semibold tracking-[0.25em] uppercase text-slate-400">
              Recent Insights
            </h2>
            <button className="text-xs font-semibold text-primary">
              View All
            </button>
          </div>

          <div className="space-y-3">
            <div className="bg-surface-dark border border-border-dark rounded-xl px-4 py-3 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center text-primary">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l2 2" />
                    <circle cx="12" cy="12" r="9" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">
                    Anomalous Latency
                  </p>
                  <p className="text-xs text-slate-400">
                    Detecting node shift in EU-West.
                  </p>
                </div>
              </div>
              <span className="text-[10px] font-semibold px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 uppercase tracking-[0.18em]">
                Review needed
              </span>
            </div>

            <div className="bg-surface-dark border border-border-dark rounded-xl px-4 py-3 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-400/40 flex items-center justify-center text-emerald-400">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">
                    Pattern Optimization
                  </p>
                  <p className="text-xs text-slate-400">
                    Automated query tuning complete.
                  </p>
                </div>
              </div>
              <span className="text-[10px] font-semibold px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 uppercase tracking-[0.18em]">
                Automated
              </span>
            </div>

            <div className="bg-surface-dark border border-border-dark rounded-xl px-4 py-3 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-slate-500/10 border border-slate-500/40 flex items-center justify-center text-slate-200">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4h16v12H5l-1 4z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">
                    Resource Projection
                  </p>
                  <p className="text-xs text-slate-400">
                    Next cycle scaling prediction.
                  </p>
                </div>
              </div>
              <span className="text-[10px] font-semibold px-3 py-1 rounded-full bg-sky-500/10 text-sky-400 uppercase tracking-[0.18em]">
                Processing
              </span>
            </div>
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="text-[10px] font-semibold tracking-[0.25em] uppercase text-slate-400">
            Intelligence Feed
          </h2>

          <div className="bg-surface-dark border border-border-dark rounded-2xl px-4 py-4 space-y-4">
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-start gap-3">
                <span className="mt-1 w-1.5 h-1.5 rounded-full bg-sky-400" />
                <div>
                  <p className="text-[10px] uppercase tracking-[0.22em] text-sky-400 font-semibold mb-1">
                    System Alert
                  </p>
                  <p className="text-sm text-slate-100">
                    Neural weight adjustment triggered for{" "}
                    <span className="px-1.5 py-0.5 rounded bg-slate-800 text-xs font-mono">
                      alpha-v3
                    </span>{" "}
                    deployment.
                  </p>
                </div>
              </div>
              <span className="text-[11px] text-slate-500 whitespace-nowrap">
                2m ago
              </span>
            </div>

            <div className="flex items-start justify-between gap-4">
              <div className="flex items-start gap-3">
                <span className="mt-1 w-1.5 h-1.5 rounded-full bg-primary" />
                <div>
                  <p className="text-[10px] uppercase tracking-[0.22em] text-slate-400 font-semibold mb-1">
                    Data Stream
                  </p>
                  <p className="text-sm text-slate-100">
                    New telemetry batch ingested from Global Edge clusters
                    (3.4GB processed).
                  </p>
                </div>
              </div>
              <span className="text-[11px] text-slate-500 whitespace-nowrap">
                14m ago
              </span>
            </div>

            <div className="flex items-start justify-between gap-4">
              <div className="flex items-start gap-3">
                <span className="mt-1 w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <div>
                  <p className="text-[10px] uppercase tracking-[0.22em] text-emerald-400 font-semibold mb-1">
                    Optimization
                  </p>
                  <p className="text-sm text-slate-100">
                    Autonomous balancing protocol reduced egress costs by
                    4.2%.
                  </p>
                </div>
              </div>
              <span className="text-[11px] text-slate-500 whitespace-nowrap">
                1h ago
              </span>
            </div>
          </div>
        </section>
      </main>

      <BottomNav />
    </div>
  );
}

