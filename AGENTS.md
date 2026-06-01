# Portfolio Project Guide

This repository is a Vite + React + TypeScript personal portfolio deployed as a static GitHub Pages site.

## Stack

- React 18 with Vite.
- TypeScript for app code.
- Styled Components for most component styling.
- Material UI icons/components where already used.
- Framer Motion for animations.
- Three.js via `@react-three/fiber` and `@react-three/drei` for canvas sections.
- EmailJS and `react-hook-form` for the contact flow.

## Project Layout

- `src/main.tsx` mounts the app.
- `src/App.tsx` applies the `styled-components` theme and renders `src/Pages`.
- `src/Pages/index.tsx` composes the portfolio sections in page order.
- `src/Components/Sections/` contains top-level page sections.
- `src/Components/Cards/` contains repeated display cards.
- `src/Components/Canvas/` contains Three.js scenes.
- `src/Data/Constant.ts` is the main content source for bio, skills, experience, education, projects, papers, and timeline data.
- `src/Utils/Themes.ts` owns theme tokens.
- `src/Utils/Motion.ts` owns shared animation variants.
- `src/assets/` contains imported images and SVGs.

## Commands

Use the project scripts from `package.json`:

```bash
pnpm dev
pnpm build
pnpm lint
pnpm preview
```

Use pnpm for dependency installs, scripts, and lockfile work. Do not switch to npm or yarn unless the user explicitly asks.

## Editing Rules

- Keep changes small and focused.
- Do not add dependencies unless explicitly requested.
- Prefer editing the data in `src/Data/Constant.ts` for content changes instead of hardcoding copy in components.
- Reuse existing section/card/theme/motion patterns before adding new abstractions.
- Keep imported assets in `src/assets/`; avoid remote image dependencies for core portfolio content.
- Keep Vite `base: "/Portfolio/"` unless the deployment target changes.
- Preserve static-site compatibility; do not introduce server-only APIs or runtime filesystem access.
- Avoid touching generated-looking `.d.ts` files unless the corresponding TypeScript surface actually needs declaration updates.
- Do not modify user changes in unrelated files. Check `git status --short` before and after edits.

## UI and Styling

- Match the existing dark portfolio aesthetic and token usage from `src/Utils/Themes.ts`.
- Keep layout responsive for mobile and desktop.
- Use stable dimensions for cards, icons, canvases, and buttons to avoid layout shift.
- When changing visual sections, verify text does not overlap and remains readable against gradient/canvas backgrounds.
- Keep animations purposeful and lightweight; avoid adding heavy motion to dense content.

## Verification

For normal code changes, run:

```bash
pnpm lint
pnpm build
```

For visual or layout changes, also run the app locally and inspect the affected viewport sizes before claiming completion.

## Deployment Notes

- Deployment is configured in `.github/workflows/deploy.yml`.
- Production output is `dist/`.
- GitHub Pages expects the `/Portfolio/` base path.
- Keep deployment package-manager behavior aligned with pnpm when editing the workflow.
