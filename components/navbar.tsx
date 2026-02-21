export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-5 sticky top-0 z-50 bg-background-dark/80 backdrop-blur-md border-b border-primary/10">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 flex items-center justify-center">
          <span className="text-white text-xl">❄</span>
        </div>
        <span className="text-xl font-bold tracking-tight text-white">
          XAI
        </span>
      </div>

      <div className="flex items-center gap-4 text-white">
        <button className="w-6 h-6 flex items-center justify-center">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>
        <button className="w-6 h-6 flex items-center justify-center">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>
  );
}