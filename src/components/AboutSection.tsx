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
      className="relative w-full max-w-6xl scroll-mt-24 mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 lg:py-28"
    >
      {/* Subtle ambient lighting behind hero */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute left-1/2 top-10 -translate-x-1/2 h-[450px] w-full max-w-4xl bg-gradient-to-tr from-emerald-500/10 via-sky-500/5 to-indigo-500/10 blur-3xl -z-10"
      />

      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-12 sm:gap-16 lg:gap-20">
        {/* Left Column: Glassmorphic Identity Card */}
        <div className="animate-rise w-full flex justify-center lg:w-auto lg:sticky lg:top-24">
          <ProfileCard profile={profile} />
        </div>

        {/* Right Column: Bio Narrative & Skills */}
        <div className="animate-rise [animation-delay:180ms] w-full flex-1 flex justify-center lg:justify-start">
          <AboutBio heading={profile.heading} bio={profile.bio} tags={profile.tags} />
        </div>
      </div>
    </section>
  );
};

