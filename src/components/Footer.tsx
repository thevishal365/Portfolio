import React from 'react';
import { useVisitorCount } from '../hooks/useVisitorCount';

export const Footer: React.FC = () => {
  // Formatted visitor count string from GoatCounter's public counter
  // endpoint (e.g. "4" or "1,234"); null while loading/unavailable.
  const visitorCount = useVisitorCount();

  return (
    <footer className="w-full border-t border-white/[0.08] bg-[#080c14]/60 backdrop-blur-md">
      {/* Same container system as the header: max-w-6xl, shared padding */}
      <div className="mx-auto flex h-20 w-full max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <p className="select-none text-[13px] font-medium tracking-wide text-slate-400">
          © Vishal Kumar
        </p>

        {/* Minimal visitor metadata — renders whenever a real numeric count
            exists (including 0); hidden only while unconfigured/unavailable */}
        {typeof visitorCount === 'string' && (
          <div
            aria-label={`${visitorCount} visitors`}
            className="inline-flex shrink-0 select-none items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-950/20 px-3 py-1 text-[12px] font-mono tabular-nums tracking-wide text-emerald-300/90 shadow-[0_0_10px_rgba(16,185,129,0.08)]"
          >
            <svg
              aria-hidden="true"
              className="h-3.5 w-3.5 text-emerald-400"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" />
              <circle cx="12" cy="12" r="3" />
            </svg>
            <span>{visitorCount}</span>
          </div>
        )}
      </div>
    </footer>
  );
};

