import React from 'react';
import type { ProfileData } from '../types/profile';
import { SocialIconGroup } from './SocialIconGroup';

interface ProfileCardProps {
  profile: ProfileData;
  className?: string;
}

const LocationIcon: React.FC = () => (
  <svg
    viewBox="0 0 24 24"
    aria-hidden="true"
    className="h-3.5 w-3.5 text-slate-500"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 21s6-5.686 6-11a6 6 0 1 0-12 0c0 5.314 6 11 6 11Z" />
    <circle cx="12" cy="10" r="2.5" />
  </svg>
);

const ClockIcon: React.FC = () => (
  <svg
    viewBox="0 0 24 24"
    aria-hidden="true"
    className="h-3.5 w-3.5 text-slate-500"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="8" />
    <path d="M12 7v5l3 2" />
  </svg>
);

const formatLocationTime = () => {
  const time = new Intl.DateTimeFormat('en-US', {
    timeZone: 'Asia/Kolkata',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true
  })
    .format(new Date())
    .replace(/\u202f/g, ' ');

  return `${time} IST`;
};

export const ProfileCard: React.FC<ProfileCardProps> = ({
  profile,
  className = ''
}) => {
  const [currentTime, setCurrentTime] = React.useState(formatLocationTime);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(formatLocationTime());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className={`w-full max-w-[760px] ${className}`}>
      <div className="min-w-0">
        {profile.avatarUrl ? (
          <div className="mb-5 sm:mb-6">
            <img
              src={profile.avatarUrl}
              alt={profile.name}
              className="h-30 w-30 rounded-2xl border border-white/10 object-cover sm:h-35 sm:w-35"
              loading="eager"
            />
          </div>
        ) : null}

        <h1 className="text-[1.5rem] font-semibold leading-none tracking-[-0.06em] text-white sm:text-[1.6rem]">
          Hi, I'm {profile.name}
        </h1>

        <div className="mt-2.5 text-[12px] text-slate-400 sm:text-[13px]">
          <div>Tech Enthusiast</div>
        </div>

        <div className="mt-2.5 flex flex-wrap items-center gap-2 text-[11px] text-slate-400 sm:text-[12px]">
          <LocationIcon />
          <span>India</span>

          <span aria-hidden="true" className="text-slate-500">
            ·
          </span>

          <ClockIcon />
          <span>{currentTime}</span>
        </div>

        <div className="mt-4">
          <SocialIconGroup
            links={profile.socialLinks}
            iconSize={34}
            gapClassName="justify-start gap-2.5"
          />
        </div>
      </div>
    </div>
  );
};