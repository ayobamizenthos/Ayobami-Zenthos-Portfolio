export function SectionDivider() {
  return (
    <div className="relative py-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative flex items-center justify-center gap-4">
          <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent w-full"></div>
          <div className="w-2 h-2 rounded-full bg-primary/40 animate-pulse flex-shrink-0"></div>
          <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent w-full"></div>
        </div>
      </div>
    </div>
  );
}
