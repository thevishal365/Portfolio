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
  imageSrc?: string;
  imageAlt?: string;
  imagePositionClass?: string;
  techStack?: string[];
}

export interface ProfileData {
  name: string;
  avatarUrl: string;
  bio: string[];
  tags: string[];
  skills: string[];
  projects: Project[];
  contactEndpoint: string;
  socialLinks: SocialLink[];
}