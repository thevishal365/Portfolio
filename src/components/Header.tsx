import React, { useEffect, useState } from 'react';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const updateState = () => {
      setIsScrolled(window.scrollY > 8);
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
          ? 'border-b border-[rgba(25,24,23,0.08)] bg-[#f4f2ee]/85 backdrop-blur-md'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand badge */}
        <a
          href="#top"
          aria-label="VK. — back to top"
          className="inline-flex items-center justify-center rounded-[10px] bg-[#191817] px-2.5 py-1.5 text-[15px] font-semibold leading-none tracking-[-0.01em] text-white transition-all duration-200 hover:bg-[#2e2b27] active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#191817]/40 focus-visible:ring-offset-2"
        >
          VK.
        </a>

        {/* Online status — links back to top */}
        <nav aria-label="Primary">
          <a
            href="#top"
            aria-label="Online — back to top"
            className="group inline-flex items-center gap-2 py-1 text-[13px] font-medium tracking-[0.04em] text-[#8f8b83] transition-colors duration-200 hover:text-[#191817]"
          >
            <span
              aria-hidden="true"
              className="animate-status-breathe h-[7px] w-[7px] rounded-full bg-[#3ba55d] transition-colors duration-200 group-hover:bg-[#339353]"
            />
            <span>Online</span>
          </a>
        </nav>
      </div>
    </header>
  );
};
