# Nori — Creator Merch & Resources Landing Page

A bold, editorial-style landing page for a creator brand selling merch, LUTs, sound packs, and templates. Built with TanStack Start, React 19, and Tailwind CSS v4.

## Overview

This project is a single-page marketing site organized into focused sections, each living in its own component under `src/components/`. The design leans into a high-contrast, brutalist-meets-editorial aesthetic with a warm primary accent, large display typography, and rounded card geometry.

## Sections

- **Nav** — Top navigation bar with brand mark and links.
- **Hero** — Headline, intro copy, and primary CTA.
- **Marquee** — Scrolling text band used as a visual divider.
- **NotAverageSection** — Brand value / positioning block.
- **TemplatesSection** — Showcase of website / design templates.
- **SoundpacksSection** — Audio/sound pack offerings.
- **LutsSection** — LUT product cards with a notched corner + circular arrow button treatment.
- **FashionSection** — Editorial fashion grid with a rotating circular text play button, plus a dark hero CTA card ("01 — Setup your fashion with the latest trend").
- **Footer** — Closing links and brand sign-off.

## Tech Stack

- **Framework**: [TanStack Start](https://tanstack.com/start) v1 (React 19, file-based routing)
- **Build**: Vite 7
- **Styling**: Tailwind CSS v4 via `src/styles.css` with semantic design tokens (`--ink`, `--paper`, `--primary`, etc.) defined in `oklch`
- **UI primitives**: shadcn/ui (Radix-based components in `src/components/ui/`)
- **Icons**: lucide-react
- **Deployment target**: Cloudflare Workers (edge) — see `wrangler.jsonc`

## Project Structure

```
src/
├── components/         # Page sections + shadcn UI primitives
│   └── ui/             # Reusable shadcn components
├── routes/
│   ├── __root.tsx      # Root layout (html/head/body shell)
│   └── index.tsx       # Home page — composes all sections
├── styles.css          # Tailwind v4 + design tokens
├── router.tsx          # TanStack Router setup
└── lib/utils.ts        # cn() helper
```

## Design System

Colors, gradients, and shadows are defined as CSS custom properties in `src/styles.css` and consumed via Tailwind utility classes (e.g. `bg-ink`, `text-paper`, `bg-primary`). Always extend tokens there rather than hardcoding colors in components.

Typography pairs a heavy display font (`font-display`) for headlines with a clean sans body font, plus `font-mono` accents for prices and metadata.

## Getting Started

```bash
# Install dependencies
bun install

# Start the dev server
bun run dev

# Build for production
bun run build
```

The dev server runs on Vite with hot module reload. Routes are auto-discovered from `src/routes/` — `routeTree.gen.ts` is regenerated automatically (do not edit it manually).

## Editing the Site

- **Add a new section**: create a component in `src/components/`, then import and place it inside `src/routes/index.tsx`.
- **Add a new page**: create `src/routes/your-page.tsx` using `createFileRoute("/your-page")`.
- **Tweak colors / spacing**: edit tokens in `src/styles.css`.
- **Quick visual tweaks**: use Lovable's Visual Edits to change text, colors, and fonts on static elements without spending credits.

## Deployment

The project is configured for Cloudflare Workers via `wrangler.jsonc`. In Lovable, click **Publish** (top right) to deploy. Frontend changes require clicking **Update** in the publish dialog to go live; backend changes deploy automatically.
