import type { ProfileData } from '../types/profile';

export const defaultProfileData: ProfileData = {
  name: 'Vishal Kumar',
  avatarUrl: '/profile.png',
  bio: [
    'I’m a Lab Technologist with a background in Medical Laboratory Technology and a strong curiosity about technology.',
    'Although my professional background is in healthcare, I spend a lot of time exploring GenAI, digital tools, automation, and vibe coding. I enjoy taking an idea, experimenting with modern tools, and turning it into something useful.'
  ],
  tags: [
    'Health Tech',
    'GenAI',
    'Vibe Coding',
    'Automation',
    'Emerging Technologies'
  ],
  skills: [
    'VS Code',
    'Cursor',
    'Antigravity',
    'Git',
    'GitHub',
    'Supabase',
    'Netlify'
  ],
  projects: [
    {
      id: 1,
      name: 'Paperlytic',
      description: 'An academic paper aggregation system.',
      liveUrl: 'https://paperlytic.netlify.app/',
      codeUrl: 'https://github.com/thevishal365/Paperlytic'
    },
    {
      id: 2,
      name: 'Scanora',
      description: 'An AI-powered medical report understanding tool.',
      liveUrl: 'https://scanora-ai.netlify.app/',
      codeUrl: 'https://github.com/thevishal365/Scanora'
    }
  ],
  contactEndpoint: 'https://formspree.io/f/xjyvvglr',
  socialLinks: [
    {
      platform: 'email',
      url: 'mailto:vishaltent@gmail.com',
      label: 'Send an email'
    },
    {
      platform: 'instagram',
      url: 'https://instagram.com/thevishal365',
      label: 'Instagram profile'
    },
    {
      platform: 'x',
      url: 'https://x.com/thevishal365',
      label: 'X (Twitter) profile'
    },
    {
      platform: 'github',
      url: 'https://github.com/thevishal365',
      label: 'GitHub profile'
    }
  ]
};
