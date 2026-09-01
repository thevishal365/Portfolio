import React, { useEffect, useState } from 'react';

const NAV_ITEMS = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' }
] as const;

const NAV_LINK_CLASS =
  'inline-flex h-11 items-center whitespace-nowrap rounded-sm py-1 font-sans text-[12px] font-medium tracking-[0.02em] text-slate-400 transition-colors duration-200 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-500';

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
          ? 'border-b border-white/[0.06] bg-[#000000]/90 backdrop-blur-md'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-16 w-full max-w-[760px] items-center justify-center px-4 sm:px-6 lg:px-0">
        <nav aria-label="Primary" className="flex min-w-0 items-center justify-center gap-3 sm:gap-6 md:gap-8">
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
