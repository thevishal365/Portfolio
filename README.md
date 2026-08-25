# Portfolio

A clean, responsive single-page portfolio that presents a personal profile, professional background, technology interests, social links, and real visitor statistics in a simple editorial-style interface.

## Features

- Minimal single-page portfolio
- Responsive design for desktop, tablet, and mobile
- Profile card with social links
- About Me section with focused profile information
- Highlighted areas of interest and expertise
- Online status indicator with subtle pulse animation
- Real visitor tracking with GoatCounter
- Live visitor count displayed in the footer
- Smooth scrolling and lightweight interactions
- Accessible, keyboard-friendly interface

## How It Works

```text
Portfolio Content
        ↓
React Components
        ↓
Responsive UI
        ↓
GoatCounter Tracking
        ↓
Live Visitor Statistics
```

## Tech Stack

### Frontend

- React
- TypeScript
- Vite
- Tailwind CSS

### Analytics

- GoatCounter

## Project Structure

```text
Portfolio/
├── public/
│   ├── favicon.svg
│   ├── icons.svg
│   └── profile.png
│
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── AboutBio.tsx
│   │   ├── AboutSection.tsx
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   ├── ProfileAvatar.tsx
│   │   ├── ProfileCard.tsx
│   │   ├── SocialIcon.tsx
│   │   └── SocialIconGroup.tsx
│   ├── data/
│   │   └── profileData.ts
│   ├── hooks/
│   │   └── useVisitorCount.ts
│   ├── lib/
│   │   └── analytics.ts
│   ├── types/
│   │   └── profile.ts
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
│
├── .env.example
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
├── vite.config.ts
└── README.md
```

## Configuration

The portfolio uses environment variables for GoatCounter configuration.

Create a local environment file:

```text
.env.local
```

Add the required values:

```env
VITE_GOATCOUNTER_SITE=
VITE_GOATCOUNTER_API_TOKEN=
```

Never commit `.env.local` or expose the API token in source control.

## Development

### Requirements

- Node.js
- npm

### Install Dependencies

```bash
npm install
```

### Start the Development Server

```bash
npm run dev
```

The local development server is provided by Vite.

### Run Lint

```bash
npm run lint
```

### Build for Production

```bash
npm run build
```

## Visitor Tracking

The portfolio uses GoatCounter to collect visitor statistics and display the live total in the footer.

Visitor tracking and visitor-count display are handled separately so the interface remains lightweight while statistics are retrieved from GoatCounter.

## Design

The portfolio follows a minimal editorial approach:

- Warm neutral background
- Strong monochrome typography
- Generous spacing
- Subtle borders and shadows
- Rounded profile surfaces
- Small, restrained UI interactions
- Responsive layouts across screen sizes

## Live Application

Add the deployed website URL here:

```text
https://thevishal365.netlify.app/
```

## Project Status

This portfolio is actively maintained and updated as the design, content, and technology interests evolve.

## Author

**Vishal Kumar**

- GitHub: [@thevishal365](https://github.com/thevishal365)

## License

License information will be added later.
