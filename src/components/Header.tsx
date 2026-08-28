import React, { useEffect, useState } from 'react';

const NAV_ITEMS = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' }
] as const;

const NAV_LINK_CLASS =
  'inline-flex h-11 items-center whitespace-nowrap rounded-sm py-1 font-mono text-[11px] font-medium uppercase tracking-wider text-slate-400 transition-colors duration-300 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 sm:text-[12px]';

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
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-3 px-4 sm:gap-6 sm:px-6 lg:px-8">
        {/* Brand badge */}
        <a
          href="#home"
          aria-label="VK. — Home"
          className="group relative inline-flex shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 px-3 py-1.5 text-[14px] font-bold tracking-tight text-white shadow-[0_0_15px_rgba(255,255,255,0.05)] ring-1 ring-white/15 transition-all duration-300 hover:ring-emerald-500/50 hover:shadow-[0_0_20px_rgba(16,185,129,0.2)] active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
        >
          <span className="bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent group-hover:from-emerald-300 group-hover:to-white transition-all duration-300">
            VK.
          </span>
        </a>

        <nav aria-label="Primary" className="flex min-w-0 items-center justify-end gap-2.5 sm:gap-5">
          {NAV_ITEMS.map((item) => (
            <a key={item.href} href={item.href} className={NAV_LINK_CLASS}>
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};
