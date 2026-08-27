import React from 'react';
import type { SocialLink } from '../types/profile';
import { SocialIcon } from './SocialIcon';

interface SocialIconGroupProps {
  links: SocialLink[];
  iconSize?: number;
  gapClassName?: string;
}

export const SocialIconGroup: React.FC<SocialIconGroupProps> = ({
  links,
  iconSize = 42,
  gapClassName = 'gap-3'
}) => {
  return (
    <div className={`flex items-center justify-center ${gapClassName}`}>
      {links.map((link) => (
        <SocialIcon key={link.platform} link={link} size={iconSize} />
      ))}
    </div>
  );
};