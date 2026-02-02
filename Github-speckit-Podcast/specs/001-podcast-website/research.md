# Phase 0 Research: Modern Podcast Website

## Decisions

- **Framework**: Next.js 14 (App Router) with static export
- **Language**: TypeScript 5, Node.js 18 LTS
- **Data strategy**: Embed mock data locally (TS/JSON) for episodes and FAQ; no external feeds
- **Playback**: Local mock audio files in `public/media`, HTML5 `<audio>` controls
- **Visual direction**: Dark theme with bold neon accents; high contrast
- **Social sharing**: Static share links for Twitter/X and LinkedIn
- **Ordering**: Episodes default ordered by publish date (newest first); support order by episode number
- **Accessibility**: Visible focus states, sufficient contrast, keyboard operability for primary interactions; content readable with JS disabled
- **Deployment**: Static export deployable to Vercel/Netlify/GitHub Pages

## Rationale

- **Next.js static export**: Mature SSR/SSG framework, robust routing/component model; supports fully static export for simple hosting and CDN delivery.
- **TypeScript**: Strong typing for data models (episodes/FAQ); reduces runtime errors and improves maintainability.
- **Local mock data**: Guarantees reproducibility and avoids external dependency drift; simple build pipeline.
- **Local audio**: Enables realistic playback UX while adhering to no-external-feeds constraint.
- **Dark + neon**: Aligns with "slick/standout" requirement; offers strong visual identity.
- **Minimal dependencies**: Keeps tooling lean and deployment simple, honoring constitution.

## Alternatives Considered

- **Astro**: Excellent static site generator; chose Next.js for React ecosystem familiarity and App Router features.
- **Gatsby**: Powerful data layer; heavier tooling than needed for simple static mocks.
- **UI Libraries (Tailwind/Chakra)**: Considered Tailwind for utility-first styling; optional, can be added later if needed.
- **Playback mock only (no audio)**: Simpler UI, but less engaging; opted for short local audio samples.
- **Broader sharing set (Facebook/Reddit)**: Adds visual clutter; starting minimal with X + LinkedIn.
