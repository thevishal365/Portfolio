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
      className={`relative w-full max-w-[372px] bg-white rounded-[20px] p-7 pb-7 shadow-[0_2px_6px_rgba(25,24,23,0.04),0_16px_40px_-16px_rgba(25,24,23,0.10)] ring-1 ring-[rgba(25,24,23,0.08)] flex flex-col items-center text-center transition-shadow duration-300 hover:shadow-[0_2px_6px_rgba(25,24,23,0.05),0_20px_48px_-16px_rgba(25,24,23,0.14)] ${className}`}
    >
      {/* Grayscale Portrait Avatar - fluid framed image */}
      <div className="w-full mb-6">
        <ProfileAvatar
          src={profile.avatarUrl}
          alt={profile.name}
          className="w-full aspect-square"
        />
      </div>

      {/* Name */}
      <h2 className="text-[21px] font-semibold text-[#191817] tracking-[-0.015em] leading-tight mb-1">
        {profile.name}
      </h2>

      {/* Social Handle */}
      <p className="text-[13px] font-normal text-[#8f8b83] mb-3 tracking-normal">
        {profile.handle}
      </p>

      {/* Tagline / Specialties */}
      <p className="text-[13.5px] font-medium text-[#4a4741] leading-relaxed mb-6">
        {profile.tagline}
      </p>

      {/* Social row, separated by a full-width editorial hairline */}
      <div className="mt-auto w-full border-t border-[rgba(25,24,23,0.08)] pt-5">
        <SocialIconGroup links={profile.socialLinks} iconSize={38} gapClassName="gap-2.5" />
      </div>
    </div>
  );
};