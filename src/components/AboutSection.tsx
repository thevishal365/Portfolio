import React from 'react';
import type { ProfileData } from '../types/profile';
import { ProfileCard } from './ProfileCard';
import { AboutBio } from './AboutBio';

interface AboutSectionProps {
  profile: ProfileData;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ profile }) => {
  return (
    <section id="about" className="relative mx-auto w-full max-w-[760px] scroll-mt-24 px-4 py-12 sm:px-6 lg:px-0 lg:py-20">
      <div className="mx-auto flex w-full max-w-[760px] flex-col items-start gap-10">
        <div className="w-full">
          <ProfileCard profile={profile} />
        </div>

        <div className="w-full border-t border-white/[0.08] pt-6">
          <div className="inline-block">
            <h2 className="mb-2 text-[16px] font-semibold uppercase tracking-[0.18em] text-[#FFFFFF]">
              About
            </h2>
            <div className="h-px w-full bg-gradient-to-r from-white via-white/50 to-transparent" />
          </div>
          <div className="mt-3" />
          <AboutBio
            bio={profile.bio}
            tags={profile.tags}
            skills={profile.skills}
            projects={profile.projects}
            contactEndpoint={profile.contactEndpoint}
          />
        </div>
      </div>
    </section>
  );
};

