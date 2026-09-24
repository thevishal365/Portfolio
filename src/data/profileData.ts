import type { ProfileData } from '../types/profile';

export const defaultProfileData: ProfileData = {
  name: 'Vishal Kumar',
  avatarUrl: '/profile.png',
  bio: [
    'I’m a Lab Technologist with a background in Medical Laboratory Technology and a strong curiosity about technology.',
    'Although my professional background is in healthcare, I spend a lot of time exploring GenAI, digital tools, automation, and vibe coding. I enjoy taking an idea, experimenting with modern tools, and turning it into something useful.'
  ],
  tags: [
    'Generative AI and AI powered tools',
    'Health technology and healthcare applications',
    'Automation and digital workflows',
    'Vibe coding and rapid prototyping',
    'Building practical software projects'
  ],
  skills: [
    'VS Code',
    'Cursor',
    'Git',
    'GitHub',
    'Supabase',
    'Netlify'
  ],
  projects: [
    {
      id: 1,
      name: 'Paperlytic',
      description:
        'An academic research indexing platform that automatically collects and organizes newly published papers from Crossref. Search by title or journal, explore filtered results, and access papers directly via DOI links.',
      liveUrl: 'https://paperlytic.netlify.app/',
      codeUrl: 'https://github.com/thevishal365/Paperlytic',
      imageSrc: '/paperlytic-homepage.png',
      imageAlt:
        'Paperlytic homepage showing the latest academic research papers feed with title and journal search',
      techStack: ['React', 'TypeScript', 'TanStack Start', 'Supabase', 'Crossref']
    },
    {
      id: 2,
      name: 'Scanora',
      description:
        'An AI-powered medical report understanding tool that analyzes uploaded reports and highlights attention-worthy findings. Users can explore explanations and ask questions about their reports using Google Gemini.',
      liveUrl: 'https://scanora-ai.netlify.app/',
      codeUrl: 'https://github.com/thevishal365/Scanora',
      imageSrc: '/scanora-homepage.png',
      imageAlt:
        'Scanora homepage showing the clinical document assistant upload interface',
      techStack: ['React', 'Vite', 'Tailwind CSS', 'FastAPI', 'Gemini']
    },
    {
      id: 3,
      name: 'GPTase Detector',
      description:
        'An AI-powered text detector that analyzes writing with a ModernBERT classifier and estimates whether it shows signals associated with AI-generated writing. Results are presented as probabilistic estimates, not proof of authorship.',
      liveUrl: 'https://gptase-detector.vercel.app',
      codeUrl: 'https://github.com/thevishal365/GPTase-Detector',
      imageSrc: '/gptase-detector-homepage.png',
      imageAlt:
        'GPTase Detector homepage showing the AI text analysis workspace',
      imagePositionClass: 'object-left-top',
      techStack: ['Next.js', 'TypeScript', 'FastAPI', 'Python', 'ModernBERT']
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
