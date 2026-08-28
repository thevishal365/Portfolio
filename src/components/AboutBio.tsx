import React from 'react';
import type { Project } from '../types/profile';
import { ProjectList } from './ProjectList';
import { ContactForm } from './ContactForm';
import { TAG_PILL_CLASS, TagIcon } from './TagIcon';
import { PROJECT_TITLE_CLASS } from './ProjectList';

interface AboutBioProps {
  heading: string;
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
    <div id={sectionId} className="mt-9 scroll-mt-24">
      <h3 className={`${PROJECT_TITLE_CLASS} mb-3.5`}>
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

/** Exact phrases rendered in highlighted ink inside the narrative paragraphs.
    Matching is case-insensitive; all other text is left untouched. */
const EMPHASIZED_PHRASES = ['not a traditional coder'];

/** Splits a paragraph on emphasized phrases and wraps each match in
    <strong>, preserving the original sentence verbatim. */
function emphasize(paragraph: string): React.ReactNode[] {
  if (EMPHASIZED_PHRASES.length === 0) return [paragraph];

  const pattern = new RegExp(
    `(${EMPHASIZED_PHRASES.map((phrase) => phrase.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})`,
    'gi'
  );

  return paragraph.split(pattern).map((part, index) =>
    EMPHASIZED_PHRASES.some(
      (phrase) => phrase.toLowerCase() === part.toLowerCase()
    ) ? (
      <strong key={index} className="font-semibold text-white bg-white/[0.08] px-1.5 py-0.5 rounded-md border border-white/15">
        {part}
      </strong>
    ) : (
      part
    )
  );
}

export const AboutBio: React.FC<AboutBioProps> = ({
  heading,
  bio,
  tags = [],
  skills = [],
  projects = [],
  contactEndpoint = '',
  className = ''
}) => {
  return (
    <div className={`flex flex-col justify-start text-left max-w-[560px] pt-1 ${className}`}>
      {/* Eyebrow badge */}
      <div className="mb-4 inline-flex items-center gap-2">
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
        <span className="font-mono text-[12px] font-semibold uppercase tracking-widest text-emerald-400/90">
          Overview
        </span>
      </div>

      {/* Section Heading */}
      <h1 className="text-[38px] md:text-[48px] lg:text-[58px] font-extrabold text-white tracking-tight mb-6 leading-[1.05]">
        {heading}
      </h1>

      {/* Editorial glowing hairline rule */}
      <div aria-hidden="true" className="mb-7 h-[1px] w-20 bg-gradient-to-r from-emerald-400 via-sky-400 to-transparent" />

      {/* Narrative Paragraphs */}
      <div className="space-y-5 text-[16px] md:text-[17px] text-slate-300 leading-[1.8] font-normal">
        {bio.map((paragraph, index) => (
          <p key={index} className="text-pretty">
            {emphasize(paragraph)}
          </p>
        ))}
      </div>

      {/* Keyword tags / Interests */}
      <TagGroup heading="Focus & Interests" items={tags} sectionId="focus-interests" />

      {/* Skills */}
      <TagGroup heading="My Skills" items={skills} sectionId="my-skills" />

      <ProjectList projects={projects} />

      {contactEndpoint ? <ContactForm endpoint={contactEndpoint} /> : null}
    </div>
  );
};
