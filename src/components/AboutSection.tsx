import React from 'react';
import type { ProfileData } from '../types/profile';
import { ProfileCard } from './ProfileCard';
import { AboutBio } from './AboutBio';

interface AboutSectionProps {
  profile: ProfileData;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ profile }) => {
  return (
    <section
      id="about"
      className="w-full max-w-6xl scroll-mt-24 mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16 lg:py-28"
    >
      <div className="flex flex-col md:flex-row md:items-start justify-center gap-12 md:gap-16 lg:gap-24">
        {/* Left Column: White Profile Card */}
        <div className="animate-rise flex-shrink-0 w-full flex justify-center md:w-auto">
          <ProfileCard profile={profile} />
        </div>

        {/* Right Column: Bio Narrative */}
        <div className="animate-rise [animation-delay:150ms] flex-1 w-full flex justify-center md:justify-start">
          <AboutBio heading={profile.heading} bio={profile.bio} tags={profile.tags} />
        </div>
      </div>
    </section>
  );
};
