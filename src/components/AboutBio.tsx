import React from 'react';
import type { Project } from '../types/profile';
import { ProjectList } from './ProjectList';
import { ContactForm } from './ContactForm';
import { TAG_PILL_CLASS, TagIcon } from './TagIcon';

interface AboutBioProps {
  bio: string[];
  tags?: string[];
  skills?: string[];
  projects?: Project[];
  contactEndpoint?: string;
  className?: string;
}

const TagGroup: React.FC<{ heading: string; items: string[]; sectionId: string }> = ({
  heading,
  items,
  sectionId
}) => {
  if (items.length === 0) return null;

  return (
    <div id={sectionId} className="mt-8 scroll-mt-24">
      <h3 className="mb-3 text-[16px] font-normal tracking-[-0.02em] text-slate-200 sm:text-[17px]">
        {heading}
      </h3>
      <ul className="flex flex-wrap gap-2.5">
        {items.map((tag) => (
          <li key={tag} className={TAG_PILL_CLASS}>
            <TagIcon name={tag} />
            <span>{tag}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export const AboutBio: React.FC<AboutBioProps> = ({
  bio,
  tags = [],
  skills = [],
  projects = [],
  contactEndpoint = '',
  className = ''
}) => {
  return (
    <div className={`flex max-w-[760px] flex-col justify-start text-left ${className}`}>
      <ul className="list-none space-y-2 text-[15px] leading-7 text-slate-300 sm:text-[16px]">
        {bio.map((paragraph, index) => (
          <li key={index} className="flex items-start gap-3 pl-0">
            <span aria-hidden="true" className="mt-[0.55em] leading-none text-slate-500">•</span>
            <span className="block">{paragraph}</span>
          </li>
        ))}
      </ul>

      <TagGroup heading="Current Focus" items={tags} sectionId="focus-interests" />
      <TagGroup heading="Tools I use" items={skills} sectionId="my-skills" />

      <ProjectList projects={projects} />

      {contactEndpoint ? <ContactForm endpoint={contactEndpoint} /> : null}
    </div>
  );
};
