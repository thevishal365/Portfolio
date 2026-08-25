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

No environment configuration is required: pageview tracking uses the
GoatCounter tracker script with a hardcoded site URL, and the footer
visitor count is read from GoatCounter's public counter endpoint
(available once "Allow adding visitor counts on your website" is
enabled in the GoatCounter site settings).

Optionally, a `.env.local` file can override the site code:

```env
VITE_GOATCOUNTER_SITE=
```

When unset, the app falls back to its built-in default site code.

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

Pageview tracking is handled by the official count.js tracker script, while the visitor count in the footer is read from GoatCounter's public counter endpoint (`https://<site-code>.goatcounter.com/counter/TOTAL.json`). The counter requires no API token and fails gracefully — if GoatCounter is unavailable, the count is simply hidden rather than showing fake data. Note that GoatCounter caches counter responses for up to four hours.

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
