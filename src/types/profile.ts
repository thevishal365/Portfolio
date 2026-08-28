export type SocialPlatform = 'instagram' | 'x' | 'email' | 'github';

export interface SocialLink {
  platform: SocialPlatform;
  url: string;
  label: string;
}

export interface Project {
  id: number;
  name: string;
  description: string;
  liveUrl: string;
  codeUrl: string;
}

export interface ProfileData {
  name: string;
  handle: string;
  tagline: string;
  avatarUrl: string;
  heading: string;
  bio: string[];
  tags: string[];
  skills: string[];
  projects: Project[];
  contactEndpoint: string;
  socialLinks: SocialLink[];
}