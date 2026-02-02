---

description: "Task list for Modern Podcast Website (Next.js static)"
---

# Tasks: Modern Podcast Website

**Input**: Design documents from `/specs/001-podcast-website/`
**Prerequisites**: plan.md (required), spec.md (required), research.md, data-model.md, contracts/

**Tests**: Tests are OPTIONAL. This plan focuses on implementation tasks with independent test criteria per story.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (US1, US2, US3)
- Include exact file paths in descriptions

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Initialize Next.js static site and base structure

- [x] T001 Initialize Next.js app with TypeScript in `podsite/package.json`
- [x] T002 [P] Add static export config `podsite/next.config.js` (set `output: 'export'`)
- [x] T003 [P] Create base directories `podsite/app`, `podsite/components`, `podsite/styles`, `podsite/data`, `podsite/public/images`, `podsite/public/media`, `podsite/tests`
- [x] T004 [P] Add README with quickstart in `podsite/README.md`
- [x] T005 Configure ESLint/Prettier in `podsite/.eslintrc.json` and `podsite/.prettierrc`
- [x] T006 [P] Add global stylesheet `podsite/styles/globals.css` and base theme tokens

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core files and mock data required before stories

- [x] T007 Create site layout and metadata in `podsite/app/layout.tsx` (sets dark+neon theme, global nav)
- [x] T008 [P] Add mock episodes data (20 items) in `podsite/data/episodes.ts`
- [x] T009 [P] Add FAQ items data in `podsite/data/faq.ts`
- [x] T010 [P] Place placeholder hero images in `podsite/public/images/` (at least 5)
- [x] T011 [P] Place short mock audio files in `podsite/public/media/` (at least 3)
- [x] T012 Implement shared nav/header component in `podsite/components/Header.tsx`
- [x] T013 Implement footer component in `podsite/components/Footer.tsx`
- [x] T014 Add SEO helpers in `podsite/components/SEO.tsx` (static title/description per page)

**Checkpoint**: Foundation ready — User stories can start independently.

---

## Phase 3: User Story 1 — Discover the Show (Priority: P1) 🎯 MVP

**Goal**: A visitor understands the podcast and can reach episodes/FAQ quickly.
**Independent Test**: Open `/` and verify brand, tagline, CTA to episodes, and FAQ link (no other pages required).

### Implementation for User Story 1

- [x] T015 [P] [US1] Create landing page hero in `podsite/app/page.tsx` (title, tagline, CTA to `/episodes`)
- [x] T016 [P] [US1] Add highlight/featured section in `podsite/app/page.tsx` (uses 1–2 items from `data/episodes.ts`)
- [x] T017 [US1] Add navigation links to Episodes and FAQ in `podsite/components/Header.tsx`
- [x] T018 [US1] Add page-level metadata in `podsite/app/page.tsx` (static `metadata` export)
- [x] T019 [US1] Style landing sections in `podsite/styles/globals.css` (responsive hero, contrast, focus states)

**Checkpoint**: Landing page independently delivers value (MVP).

---

## Phase 4: User Story 2 — Browse and View Episodes (Priority: P2)

**Goal**: Visitors can browse 20 mocked episodes, open details, and play local mock audio.
**Independent Test**: Navigate to `/episodes`, open any item, and play audio (no landing/FAQ required).

### Implementation for User Story 2

- [x] T020 [P] [US2] Create episodes list page in `podsite/app/episodes/page.tsx` (default order newest by `publishDate`)
- [x] T021 [P] [US2] Implement simple ordering control in `podsite/app/episodes/page.tsx` (publish date vs episode number)
- [x] T022 [P] [US2] Implement episode card component in `podsite/components/EpisodeCard.tsx`
- [x] T023 [US2] Create episode detail route in `podsite/app/episodes/[slug]/page.tsx` (title, summary, date, duration)
- [x] T024 [US2] Add HTML5 audio player using local file in `podsite/app/episodes/[slug]/page.tsx`
- [x] T025 [US2] Add social share links (X, LinkedIn) in `podsite/app/episodes/[slug]/page.tsx`
- [x] T026 [US2] Style episodes list and detail in `podsite/styles/globals.css` (responsive grid, readable text)

**Checkpoint**: Episodes list + detail fully functional with local audio.

---

## Phase 5: User Story 3 — Find Answers (FAQ) (Priority: P3)

**Goal**: Visitors can read concise answers via accessible expand/collapse.
**Independent Test**: Navigate to `/faq`; expand/collapse items via mouse and keyboard.

### Implementation for User Story 3

- [x] T027 [P] [US3] Create FAQ page in `podsite/app/faq/page.tsx` (lists items from `data/faq.ts`)
- [x] T028 [P] [US3] Implement accessible accordion in `podsite/components/Accordion.tsx` (keyboard operable)
- [x] T029 [US3] Style FAQ page/components in `podsite/styles/globals.css` (focus states, spacing, readable contrast)

**Checkpoint**: FAQ page independently delivers value.

---

## Phase N: Polish & Cross-Cutting Concerns

**Purpose**: Enhancements across stories

- [x] T030 [P] Add SEO metadata per page in `podsite/components/SEO.tsx` and page files ✅ **COMPLETED**
- [x] T031 Code cleanup and file-level documentation in `podsite/README.md` ✅ **COMPLETED**
- [x] T032 [P] Performance pass: optimize images/media in `podsite/public/` ✅ **COMPLETED**
- [x] T033 Accessibility pass: verify keyboard/focus/contrast in `podsite/styles/globals.css` ✅ **COMPLETED**
- [x] T034 [P] Responsive verification across breakpoints (mobile-first) in `podsite/styles/globals.css` ✅ **COMPLETED**
- [x] T035 Validate static export: build & export (outputs `podsite/out/`) ✅ **COMPLETED**

---

## Dependencies & Execution Order

### Phase Dependencies

- Setup (Phase 1): No dependencies
- Foundational (Phase 2): Depends on Setup completion — BLOCKS all user stories
- User Stories (Phase 3+): Depend on Foundational completion; proceed in priority order (P1 → P2 → P3)
- Polish: Depends on desired stories being complete

### User Story Dependencies

- US1 (P1): No dependency on other stories; starts after Foundational
- US2 (P2): Independent; may reference shared components but not blocked by US1
- US3 (P3): Independent; uses shared components

### Within Each User Story

- Models/data before components
- Components before pages/routes
- Pages before polish

### Parallel Opportunities

- Setup: T002–T006 can run in parallel
- Foundational: T008–T014 can run in parallel
- US1: T015–T019 — hero, featured, metadata, and styling in parallel
- US2: T020–T026 — list, card, detail, audio, sharing in parallel
- US3: T027–T029 — page, accordion, styling in parallel
- Polish: T030–T035 — SEO, performance, accessibility, responsive checks in parallel

---

## Implementation Strategy

### MVP First (US1 only)

1. Complete Setup
2. Complete Foundational
3. Implement US1
4. Stop & validate landing page independently

### Incremental Delivery

1. Setup + Foundational
2. Add US1 → validate → demo
3. Add US2 → validate → demo
4. Add US3 → validate → demo

