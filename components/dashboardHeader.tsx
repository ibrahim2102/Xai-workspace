export default function DashboardHeader() {
  return (
    <header className="sticky top-0 z-30 bg-background-dark/80 backdrop-blur-md border-b border-border-dark px-4 py-3 flex items-center justify-between">
      
      <div className="flex items-center gap-3">
        <div className="size-9 bg-primary rounded-lg flex items-center justify-center text-white shadow-lg shadow-primary/20">
          ⌨
        </div>

        <div>
          <h1 className="text-sm font-bold text-white">
            Xai Workspace
          </h1>
          <p className="text-[10px] uppercase tracking-widest text-slate-400 font-semibold">
            Intelligence Hub
          </p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        🔍
        <div className="size-8 rounded-full bg-slate-700"></div>
      </div>
    </header>
  );
}    