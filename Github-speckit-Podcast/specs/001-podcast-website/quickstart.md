# Quickstart: Modern Podcast Website (Next.js Static)

## Prerequisites
- Node.js 18+
- npm or pnpm

## Setup
```bash
# Create Next.js app (TypeScript)
npx create-next-app@latest podsite --ts --eslint --app --no-src-dir
cd podsite

# Add optional testing deps
npm i -D jest @testing-library/react @testing-library/jest-dom ts-jest playwright

# Create data and pages
mkdir -p app/episodes/[slug] app/faq components data public/images public/media styles tests/unit tests/e2e
```

## Data
- Place mocked data in `data/episodes.ts` (20 items) and `data/faq.ts`.
- Validate against [contracts/episodes.schema.json](contracts/episodes.schema.json) and [contracts/faq.schema.json](contracts/faq.schema.json) if desired.

## Pages (App Router)
- `app/page.tsx`: Landing (brand, CTA to episodes, highlights)
- `app/episodes/page.tsx`: Episodes list (uses mocked data)
- `app/episodes/[slug]/page.tsx`: Episode detail (HTML5 `<audio>` using `public/media/...`)
- `app/faq/page.tsx`: FAQ list with expandable items

## Static Export
- In `next.config.js`, enable `output: 'export'`.
- Use static data imports to avoid runtime data fetching.

```js
// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = { output: 'export' };
module.exports = nextConfig;
```

## Run & Build
```bash
npm run dev
npm run build && npm run export
```
Export outputs to `out/` for static hosting.

## Deploy
- Upload `out/` to GitHub Pages, Netlify, or Vercel static hosting.

## Testing (optional)
- Unit tests in `tests/unit` with Jest/RTL.
- E2E tests with Playwright in `tests/e2e`.
