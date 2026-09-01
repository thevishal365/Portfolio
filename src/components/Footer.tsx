import React from 'react';
import { useVisitorCount } from '../hooks/useVisitorCount';

export const Footer: React.FC = () => {
  const visitorCount = useVisitorCount();

  return (
    <footer className="w-full border-t border-white/[0.08] bg-[#000000]">
      <div className="mx-auto flex h-20 w-full max-w-[1100px] items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <p className="select-none text-[12px] tracking-[0.08em] text-slate-500">© 2026 Vishal Kumar</p>

        {typeof visitorCount === 'string' && (
          <div
            aria-label={`${visitorCount} visitors`}
            className="inline-flex shrink-0 select-none items-center gap-2 rounded-full border border-white/10 px-2.5 py-1 text-[11px] uppercase tracking-[0.1em] text-slate-400"
          >
            <svg
              aria-hidden="true"
              className="h-3 w-3 text-slate-400"
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

