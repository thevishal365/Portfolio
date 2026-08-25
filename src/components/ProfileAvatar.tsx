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
    <div
      className={`relative overflow-hidden rounded-[14px] bg-[#26241f] ring-1 ring-[rgba(25,24,23,0.08)] ${className}`}
    >
      {!imageError ? (
        <img
          src={src}
          alt={alt}
          onError={() => setImageError(true)}
          className="w-full h-full object-cover object-top grayscale contrast-[1.06] brightness-[0.99] transition-all duration-500 hover:grayscale-[82%]"
          loading="eager"
        />
      ) : (
        <div className="aspect-square w-full flex flex-col items-center justify-center bg-[#26241f] text-white p-4 text-center">
          <span className="text-3xl font-semibold tracking-[0.08em]">VK</span>
          <span className="text-xs text-white/50 mt-1">Vishal Kumar</span>
        </div>
      )}
    </div>
  );
};