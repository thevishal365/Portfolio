import React from 'react';
import type { ProfileData } from '../types/profile';
import { ProfileAvatar } from './ProfileAvatar';
import { SocialIconGroup } from './SocialIconGroup';

interface ProfileCardProps {
  profile: ProfileData;
  className?: string;
}

export const ProfileCard: React.FC<ProfileCardProps> = ({
  profile,
  className = ''
}) => {
  return (
    <div
      className={`relative w-full max-w-[380px] overflow-hidden rounded-3xl bg-slate-900/60 p-6 sm:p-8 backdrop-blur-xl ring-1 ring-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-300 hover:ring-white/20 hover:shadow-[0_25px_60px_rgba(0,0,0,0.6)] flex flex-col items-center text-center ${className}`}
    >
      {/* Top specular highlight line */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-emerald-400/40 to-transparent" 
      />

      {/* Portrait Avatar Showcase */}
      <div className="w-full mb-6 max-w-[280px]">
        <ProfileAvatar
          src={profile.avatarUrl}
          alt={profile.name}
          className="w-full aspect-square"
        />
      </div>

      {/* Name */}
      <h2 className="text-[24px] font-bold text-white tracking-tight leading-tight mb-2">
        {profile.name}
      </h2>

      {/* Social Handle Pill */}
      <div className="mb-3.5 inline-flex items-center rounded-full border border-emerald-500/20 bg-emerald-950/30 px-3 py-0.5 text-[12.5px] font-mono tracking-tight text-emerald-300/90 shadow-[0_0_10px_rgba(16,185,129,0.1)]">
        {profile.handle}
      </div>

      {/* Tagline / Specialties */}
      <p className="text-[14px] font-medium text-slate-300 leading-relaxed mb-6">
        {profile.tagline}
      </p>

      {/* Social links row */}
      <div className="mt-auto w-full border-t border-white/[0.08] pt-5">
        <SocialIconGroup links={profile.socialLinks} iconSize={42} gapClassName="gap-3" />
      </div>
    </div>
  );
};