# Phase 1 Data Model

## Entities

### Episode
- `id`: string (unique)
- `number`: number (1..20)
- `slug`: string (URL-safe)
- `title`: string
- `summary`: string (short description)
- `publishDate`: string (ISO 8601)
- `duration`: string (e.g., "42:15")
- `heroImage`: string (path under `public/images/`)
- `audioSrc`: string (path under `public/media/`)
- `tags`: string[]

### FAQItem
- `id`: string (unique)
- `question`: string
- `answer`: string
- `category`: string (optional)

### Page
- `path`: string ("/", "/episodes", "/episodes/[slug]", "/faq")
- `title`: string
- `description`: string
- `navLabel`: string

## Relationships
- `Episode` is listed on `/episodes` and detailed on `/episodes/[slug]`.
- `FAQItem` is listed on `/faq` with expandable answers.
- `Page` represents routing entries and metadata.

## Validation Rules
- `Episode.number` is unique across 20 episodes.
- `Episode.slug` must be unique and kebab-case.
- `publishDate` must parse as valid ISO date.
- `audioSrc` points to existing static file; if missing, UI uses placeholder and disables playback.
- `title` and `summary` are non-empty.

## State Transitions
- Static site: no runtime state beyond UI interaction (expand/collapse FAQ, play/pause audio). No persisted state.
