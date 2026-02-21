interface FlowStageProps {
  stage: string;
  title: string;
  description: string;
  icon: "snowflake" | "analyze" | "insight";
  active?: boolean;
  subElements?: React.ReactNode;
}

export default function FlowStage({
  stage,
  title,
  description,
  icon,
  active,
  subElements,
}: FlowStageProps) {
  const getIcon = () => {
    switch (icon) {
      case "snowflake":
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth={1.5} fill="none" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 2v4M12 18v4M2 12h4M18 12h4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
          </svg>
        );
      case "analyze":
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <circle cx="11" cy="11" r="8" strokeWidth={2} />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M11 8v6m3-3H8" />
            <circle cx="11" cy="11" r="2" fill="currentColor" />
            <circle cx="16" cy="7" r="1.5" fill="currentColor" />
          </svg>
        );
      case "insight":
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
          </svg>
        );
    }
  };

  return (
    <div
      className={`flex gap-6 items-start rounded-2xl px-4 py-3 transition-colors ${
        active ? "bg-white/5 border border-primary/40" : "border border-white/5 bg-white/[0.02]"
      }`}
    >
      <div className="relative z-10 flex-shrink-0">
        <div className="flex size-14 items-center justify-center rounded-full bg-primary text-white shadow-lg shadow-primary/50">
          {getIcon()}
        </div>
      </div>

      <div className="flex-1 pt-1">
        <div className="mb-2">
          <span className="text-[10px] font-bold uppercase tracking-widest text-white/70">
            {stage}
          </span>
        </div>

        <h3 className="text-white text-xl font-bold mb-3">{title}</h3>

        <p className="text-white/80 text-sm leading-relaxed mb-4">
          {description}
        </p>

        {subElements && (
          <div className="mt-4">
            {subElements}
          </div>
        )}
      </div>
    </div>
  );
}
