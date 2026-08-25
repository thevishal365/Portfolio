import React from 'react';
import { useVisitorCount } from '../hooks/useVisitorCount';

export const Footer: React.FC = () => {
  // Formatted visitor count string from GoatCounter's public counter
  // endpoint (e.g. "4" or "1,234"); null while loading/unavailable.
  const visitorCount = useVisitorCount();

  return (
    <footer className="w-full border-t border-[rgba(25,24,23,0.08)]">
      {/* Same container system as the header: max-w-6xl, shared padding */}
      <div className="mx-auto flex h-[72px] w-full max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <p className="select-none text-[12.5px] font-normal tracking-[0.06em] text-[#8f8b83]">
          © Vishal Kumar
        </p>

        {/* Minimal visitor metadata — renders whenever a real numeric count
            exists (including 0); hidden only while unconfigured/unavailable */}
        {typeof visitorCount === 'string' && (
          <p
            aria-label={`${visitorCount} visitors`}
            className="inline-flex shrink-0 select-none items-center gap-1.5 text-[12.5px] font-normal tabular-nums tracking-[0.06em] text-[#8f8b83]"
          >
            <svg
              aria-hidden="true"
              className="h-[13px] w-[13px]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" />
              <circle cx="12" cy="12" r="3" />
            </svg>
            <span>{visitorCount}</span>
          </p>
        )}
      </div>
    </footer>
  );
};
