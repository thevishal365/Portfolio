export type SocialPlatform = 'instagram' | 'x' | 'email' | 'github';

export interface SocialLink {
  platform: SocialPlatform;
  url: string;
  label: string;
}

export interface ProfileData {
  name: string;
  handle: string;
  tagline: string;
  avatarUrl: string;
  heading: string;
  bio: string[];
  tags: string[];
  socialLinks: SocialLink[];
}