# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

Personal portfolio site (deployed to Netlify: https://andredsouza.netlify.app/). Vue 3 + TypeScript + Vite, single page, no router, state library or UI/animation library. Visual theme is an Iron Man / JARVIS-style HUD (dark navy, cyan accent; Inter headings, Comfortaa body loaded from Google Fonts in `index.html`).

## Commands

- `npm run dev` — Vite dev server
- `npm run build` — type-check (`vue-tsc -b`) then `vite build` to `dist/`
- `npm run preview` — serve the built bundle

There is no linter and no test suite. `dist/` is tracked in git, so rebuild it before committing changes that should ship.

## Architecture

- `src/App.vue` stacks the section components (Hero, Skills, Experience, Projects, Education, Certifications, Contact) under a fixed `HudBackground` canvas and `NavBar`.
- **All site content lives in `src/data/content.ts`** (profile/links, skills, work, projects, education, certifications, and the `sections` list that drives the nav). Edit content there, not in components. Adding a section means adding it to `sections` and giving the component an `id` matching the entry, since `NavBar` observes those ids for the active highlight and side dots.
- **Scroll reveals** use the `v-reveal` directive (`src/reveal.ts`, registered in `main.ts`), a shared IntersectionObserver that adds an `.in` class; optional value is a delay in ms. The `.reveal` styles are in `src/style.css`.
- Global design tokens (colors, fonts, easing) and shared classes (`.panel` with HUD corner brackets, `.chip`, `.btn`, `.title`, `.eyebrow`) are in `src/style.css`; component styles are scoped.
- Animations respect `prefers-reduced-motion` (CSS rule plus JS checks in `HudBackground.vue`, `Hero.vue`, `reveal.ts`).
- The resume PDF is served from `public/Andre_DSouza_Resume.pdf` (path set in `profile.resume`). There is no contact form; Contact is links only.

## Git

Work happens on `develop` and is merged to `master` through PRs.
