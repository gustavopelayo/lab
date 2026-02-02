# Implementation Plan: [FEATURE]

**Branch**: `[###-feature-name]` | **Date**: [DATE] | **Spec**: [link]
**Input**: Feature specification from `/specs/[###-feature-name]/spec.md`

**Note**: This template is filled in by the `/speckit.plan` command. See `.specify/templates/commands/plan.md` for the execution workflow.

## Summary

Modern podcast website with a slick, standout design. Pages: Landing, Episodes (list + detail for 20 mocked items), FAQ. Fully static: no backend, no databases; data embedded in the site. Technical approach: Next.js static site export, local mock data (JSON/TS), responsive and accessible UI, optional local mock audio playback per episode, dark + neon visual theme, static social share links (Twitter/X, LinkedIn).

## Technical Context

<!--
  ACTION REQUIRED: Replace the content in this section with the technical details
  for the project. The structure here is presented in advisory capacity to guide
  the iteration process.
-->

**Language/Version**: Node.js 18 LTS, TypeScript 5  
**Primary Dependencies**: Next.js 14 (App Router, static export), React 18, ESLint/Prettier  
**Storage**: N/A (mock data embedded as local JSON/TS files)  
**Testing**: Jest + React Testing Library (unit), Playwright (optional e2e)  
**Target Platform**: Static web (deployed to Vercel/Netlify/GitHub Pages)  
**Project Type**: Web  
**Performance Goals**: Lighthouse Performance ≥ 90; p95 first paint ≤ 2s on broadband  
**Constraints**: Fully static (no SSR/ISR at runtime), no external feeds/APIs; core content readable without JS; accessible focus/contrast/keyboard  
**Scale/Scope**: 3 primary pages + episodes list/detail for 20 mocked items

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

Based on [/.specify/memory/constitution.md](../../.specify/memory/constitution.md):

- Gate: Static Only (no backend/server-side code) — PASS (Next.js static export; no runtime SSR).
- Gate: Static Content Only — PASS (all pages pre-built; data embedded).
- Gate: Minimal Tooling — PASS (Next.js + TS only; limited deps).
- Gate: Easy Deployment — PASS (static export deployable to Vercel/Netlify/Pages).
- Gate: Open Access — PASS (public site; no auth).
- Constraint: No server-side languages in production — PASS.
- Constraint: Dependencies open-source, bundled/CDN — PASS.
- Constraint: Works without JS where possible — PASS (core content rendered statically; interactive playback optional).

Re-evaluated after Phase 1 design: All gates remain PASS with chosen Next.js static export, local data, and minimal dependencies.

## Project Structure

### Documentation (this feature)

```text
specs/[###-feature]/
├── plan.md              # This file (/speckit.plan command output)
├── research.md          # Phase 0 output (/speckit.plan command)
├── data-model.md        # Phase 1 output (/speckit.plan command)
├── quickstart.md        # Phase 1 output (/speckit.plan command)
├── contracts/           # Phase 1 output (/speckit.plan command)
└── tasks.md             # Phase 2 output (/speckit.tasks command - NOT created by /speckit.plan)
```

### Source Code (repository root)

```text
podsite/
├── app/                      # Next.js App Router
│   ├── page.tsx              # Landing page
│   ├── episodes/
│   │   ├── page.tsx          # Episodes list
│   │   └── [slug]/page.tsx   # Episode detail
│   └── faq/page.tsx          # FAQ page
├── components/               # UI components
├── styles/                   # Global and module styles
├── data/                     # Mock data (TS/JSON)
│   ├── episodes.ts           # 20 mocked episodes
│   └── faq.ts                # FAQ items
├── public/                   # Static assets
│   ├── images/
│   └── media/                # Local mock audio files
├── scripts/                  # Build/export helper scripts (optional)
├── tests/                    # Unit/E2E tests
│   ├── unit/
│   └── e2e/
├── next.config.js            # Static export config
├── package.json
└── README.md
```

**Structure Decision**: Next.js App Router with static export; mock data embedded in `data/`; episode media in `public/media/`; pages in `app/` for `/`, `/episodes`, `/episodes/[slug]`, and `/faq`.

## Complexity Tracking

> **Fill ONLY if Constitution Check has violations that must be justified**

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|-------------------------------------|
| [e.g., 4th project] | [current need] | [why 3 projects insufficient] |
| [e.g., Repository pattern] | [specific problem] | [why direct DB access insufficient] |
