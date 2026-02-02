# Modern Podcast Website

A sleek, standout podcast website built with Next.js static export. Features dark theme with neon accents, responsive design, and 20 mocked episodes.

## Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build and export static site
npm run export
```

Visit `http://localhost:3000` to see the site.

## Features

- **Landing Page**: Brand introduction with featured episodes
- **Episodes**: List and detail pages for 20 mocked episodes with local audio
- **FAQ**: Accessible accordion with common questions
- **Static Export**: Deployable to any static hosting (Vercel, Netlify, GitHub Pages)
- **Responsive**: Mobile-first design with accessibility features
- **Dark Theme**: Bold neon accents on dark background

## Structure

```
├── app/                 # Next.js App Router pages
├── components/          # Reusable UI components  
├── data/               # Mock episodes and FAQ data
├── public/             # Static assets (images, audio)
├── styles/             # Global styles and themes
└── tests/              # Unit and E2E tests
```

## Tech Stack

- Next.js 14 (App Router, static export)
- React 18
- TypeScript 5
- ESLint + Prettier

## Deployment

The `npm run export` command outputs to `out/` directory. Upload this folder to any static hosting service.

## Development

All data is mocked locally. No external APIs or databases required.