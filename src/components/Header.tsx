import React, { useEffect, useState } from 'react';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const updateState = () => {
      setIsScrolled(window.scrollY > 12);
    };

    updateState();
    window.addEventListener('scroll', updateState, { passive: true });
    window.addEventListener('resize', updateState);

    return () => {
      window.removeEventListener('scroll', updateState);
      window.removeEventListener('resize', updateState);
    };
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? 'border-b border-white/[0.08] bg-[#080c14]/80 backdrop-blur-xl shadow-[0_4px_20px_rgba(0,0,0,0.4)]'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand badge */}
        <a
          href="#top"
          aria-label="VK. — back to top"
          className="group relative inline-flex items-center justify-center rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 px-3 py-1.5 text-[14px] font-bold tracking-tight text-white shadow-[0_0_15px_rgba(255,255,255,0.05)] ring-1 ring-white/15 transition-all duration-300 hover:ring-emerald-500/50 hover:shadow-[0_0_20px_rgba(16,185,129,0.2)] active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
        >
          <span className="bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent group-hover:from-emerald-300 group-hover:to-white transition-all duration-300">
            VK.
          </span>
        </a>

        {/* Navigation / Status Actions */}
        <nav aria-label="Primary" className="flex items-center gap-3">
          <a
            href="#top"
            aria-label="Online — back to top"
            className="group inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-950/30 px-3 py-1 text-[12px] font-medium tracking-wide text-emerald-300/90 shadow-[0_0_12px_rgba(16,185,129,0.1)] backdrop-blur-sm transition-all duration-300 hover:border-emerald-500/40 hover:bg-emerald-900/40 hover:text-emerald-200"
          >
            <span className="relative flex h-2 w-2 items-center justify-center">
              <span
                aria-hidden="true"
                className="animate-status-ring absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"
              />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
            </span>
            <span>Online</span>
          </a>
        </nav>
      </div>
    </header>
  );
};

