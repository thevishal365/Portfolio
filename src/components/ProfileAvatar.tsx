import React, { useState } from 'react';

interface ProfileAvatarProps {
  src: string;
  alt: string;
  className?: string;
}

export const ProfileAvatar: React.FC<ProfileAvatarProps> = ({
  src,
  alt,
  className = ''
}) => {
  const [imageError, setImageError] = useState(false);

  return (
    <div className={`group relative ${className}`}>
      {/* Ambient background glow */}
      <div 
        aria-hidden="true" 
        className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-emerald-500/20 via-sky-500/20 to-indigo-500/20 opacity-40 blur-lg transition-opacity duration-500 group-hover:opacity-75"
      />

      {/* Outer frame */}
      <div className="relative h-full w-full overflow-hidden rounded-2xl bg-slate-900 ring-1 ring-white/15 shadow-[0_8px_30px_rgba(0,0,0,0.6)]">
        {!imageError ? (
          <img
            src={src}
            alt={alt}
            onError={() => setImageError(true)}
            className="h-full w-full object-cover object-top grayscale contrast-[1.05] brightness-[0.98] transition-all duration-700 ease-out group-hover:scale-[1.02] group-hover:grayscale-[40%] group-hover:brightness-105"
            loading="eager"
          />
        ) : (
          <div className="flex aspect-square w-full flex-col items-center justify-center bg-slate-900 p-4 text-center text-white">
            <span className="text-3xl font-bold tracking-wider text-slate-100">VK</span>
            <span className="mt-1 text-xs text-slate-400">Vishal Kumar</span>
          </div>
        )}

        {/* Subtle glass reflection overlay */}
        <div 
          aria-hidden="true" 
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-white/[0.04]"
        />
      </div>
    </div>
  );
};