import React from 'react';

interface AboutBioProps {
  heading: string;
  bio: string[];
  tags?: string[];
  className?: string;
}

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
      {tags.length > 0 && (
        <div className="mt-9">
          <p className="mb-3.5 font-mono text-[11.5px] uppercase tracking-wider text-slate-400 font-medium">
            Focus &amp; Interests
          </p>
          <ul className="flex flex-wrap gap-2.5">
            {tags.map((tag) => (
              <li
                key={tag}
                className="group cursor-default inline-flex items-center gap-2 rounded-xl border border-white/10 bg-slate-900/60 px-3.5 py-1.5 text-[13px] font-medium tracking-wide text-slate-300 backdrop-blur-md transition-all duration-300 hover:border-emerald-500/40 hover:bg-slate-800/80 hover:text-white hover:shadow-[0_0_16px_rgba(16,185,129,0.15)] hover:-translate-y-0.5"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-slate-500 transition-colors duration-300 group-hover:bg-emerald-400" />
                <span>{tag}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};