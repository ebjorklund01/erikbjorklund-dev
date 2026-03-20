# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Commands

```bash
npm run dev      # start dev server
npm run build    # production build (also runs TypeScript type check)
npm run lint     # ESLint
```

Always run `npm run build` to verify no type errors before committing.

## Architecture

Single-page portfolio site. All sections are imported into `app/page.tsx`. The **Projects section** (`components/Projects.tsx`) is fully built but intentionally commented out in `page.tsx` — leave it that way until real projects are ready.

### Tailwind v4

This project uses Tailwind CSS v4, which differs significantly from v3:
- No `tailwind.config.js` — all theme customization lives in `app/globals.css` under `@theme inline {}`
- Import is `@import 'tailwindcss'` not `@tailwind base/components/utilities`
- PostCSS plugin is `@tailwindcss/postcss`, not `tailwindcss`
- Custom tokens (e.g. `--color-accent`, `--font-serif`) are defined in `@theme inline` and used as Tailwind utilities like `text-accent`, `font-serif`

### Animations

`components/AnimateIn.tsx` is a client component wrapper around Framer Motion's `useInView`. Use it to add scroll-triggered fade-in to any section content. Pass a `delay` prop (in seconds) to stagger children.

Hero section (`components/Hero.tsx`) uses Framer Motion directly with `"use client"` since it animates on mount rather than scroll.

### Fonts

Two fonts loaded via `next/font/google` in `app/layout.tsx`:
- `Playfair_Display` → CSS var `--font-playfair` → Tailwind class `font-serif`
- `DM_Sans` → CSS var `--font-dm-sans` → Tailwind class `font-sans`

### Skills component

`components/Skills.tsx` supports per-skill `exploring` flags (not just per-group). The `Skill` interface has `{ name: string; exploring?: boolean }`. Skills marked `exploring: true` render with accent-colored styling. There's a legend in the section header explaining the distinction.

### Path alias

`@/` maps to the project root (e.g. `@/components/Navbar`).
