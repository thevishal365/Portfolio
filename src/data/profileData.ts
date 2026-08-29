import type { ProfileData } from '../types/profile';

export const defaultProfileData: ProfileData = {
  name: 'Vishal Kumar',
  handle: '@thevishal365',
  tagline: 'A lifelong learner passionate about technology, AI, and innovation.',
  avatarUrl: '/profile.png',
  heading: 'About Me',
  bio: [
    "I am a Laboratory professional with a background in Medical Laboratory Technology, currently preparing for opportunities as a Lab Technologist. I am not a traditional coder; I explore AI, digital tools, and emerging technologies to turn ideas into practical solutions. I am particularly interested in how technology can simplify work, improve efficiency, and create meaningful solutions."
  ],
  tags: [
    'Healthcare',
    'Digital Tools',
    'AI',
    'Emerging Technologies',
    'Vibe Coding'
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
      name: 'Portfolio',
      description: 'My personal portfolio showcasing my passion for technology.',
      liveUrl: 'https://thevishal365.netlify.app/',
      codeUrl: 'https://github.com/thevishal365/Portfolio'
    },
    {
      id: 2,
      name: 'Paperlytic',
      description: 'An academic paper aggregation system.',
      liveUrl: 'https://paperlytic.netlify.app/',
      codeUrl: 'https://github.com/thevishal365/Paperlytic'
    },
    {
      id: 3,
      name: 'Scanora',
      description: 'An AI-powered medical report understanding tool.',
      liveUrl: 'https://scanora-ai.netlify.app/',
      codeUrl: 'https://github.com/thevishal365/Scanora'
    }
  ],
  contactEndpoint: 'https://formspree.io/f/xjyvvglr',
  socialLinks: [
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
      platform: 'email',
      url: 'mailto:vishaltent@gmail.com',
      label: 'Send an email'
    },
    {
      platform: 'github',
      url: 'https://github.com/thevishal365',
      label: 'GitHub profile'
    }
  ]
};
