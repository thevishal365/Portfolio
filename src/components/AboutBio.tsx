import React from 'react';

interface AboutBioProps {
  heading: string;
  bio: string[];
  tags?: string[];
  className?: string;
}

/** Exact phrases rendered in semibold ink inside the narrative paragraphs.
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
      <strong key={index} className="font-semibold text-[#191817]">
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
    <div className={`flex flex-col justify-start text-left max-w-[520px] pt-1 ${className}`}>
      {/* Section Heading */}
      <h1 className="text-[36px] md:text-[44px] lg:text-[56px] font-semibold text-[#191817] tracking-[-0.035em] mb-7 leading-[1.05]">
        {heading}
      </h1>

      {/* Editorial hairline rule */}
      <span aria-hidden="true" className="mb-7 block h-px w-16 bg-[rgba(25,24,23,0.18)]"></span>

      {/* Narrative Paragraphs — constrained measure: full width on mobile,
          flexible on tablet, refined on desktop. Left edge stays flush with
          the heading and divider; right edge stays naturally ragged.
          `text-pretty` on each paragraph balances short final lines. */}
      <div className="space-y-5 max-w-none md:max-w-[500px] lg:max-w-[460px] text-[16px] md:text-[17px] text-[#45423d] leading-[1.75] font-normal">
        {bio.map((paragraph, index) => (
          <p key={index} className="text-pretty">
            {emphasize(paragraph)}
          </p>
        ))}
      </div>

      {/* Keyword tags — compact outlined chips, aligned with the text's left edge */}
      {tags.length > 0 && (
        <ul className="mt-8 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <li
              key={tag}
              className="cursor-default rounded-[7px] border border-[rgba(25,24,23,0.12)] bg-white/60 px-3 py-1.5 text-[12px] font-medium tracking-[0.02em] text-[#4a4741] transition-colors duration-200 hover:border-[rgba(25,24,23,0.30)] hover:text-[#191817]"
            >
              {tag}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};