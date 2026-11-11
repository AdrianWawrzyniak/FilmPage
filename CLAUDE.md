# FilmPage

A movie browsing app built with React 19, TypeScript, Vite and Tailwind CSS v4. Movies currently come from mock data (`src/data/movies.ts`); the TMDB API is next.

## Commands

- `npm run dev`: dev server at http://localhost:5173
- `npm run build`: type-check and production build
- `npm run lint`: ESLint
- `npx tsc -b --noEmit`: type-check only
- `npx prettier --write .`: format

Before finishing any change, `npx tsc -b --noEmit`, `npm run lint` and `npx prettier --check .` must pass.

## Project structure

- `src/components/`: UI components, one per file, default export
- `src/types/`: shared TypeScript types
- `src/data/`: mock data
- `src/index.css`: Tailwind import, design tokens in `@theme`, base `body` styles
- `docs/architecture-decisions.md`: why the stack looks the way it does

## Conventions

- **TypeScript:** `strict`, no `any` (use `unknown` and narrow). `interface` for object shapes, `type` for unions. Type-only imports use `import type` (`verbatimModuleSyntax` is on).
- **Components:** function components; props typed with a `<ComponentName>Props` interface and destructured in the signature. Event props are named `onX`, handlers `handleX`.
- **State:** keep state in the closest common parent; compute derived values during render instead of storing them in state.
- **Styling:** Tailwind utility classes only, no new CSS files. Use theme tokens (`bg-background`, `bg-card`, `text-foreground`, `text-muted`, `text-accent`) instead of raw colors. Class names must be complete strings (no string concatenation). Prettier sorts classes.
- **Accessibility:** meaningful `alt` text, headings only for real document structure (use `<p>` for messages).
- **UI text:** English.

## Git

- GitHub Flow: branch `feature/<name>` from `main`, open a PR, squash merge.
- Conventional Commits: `type: imperative description`, lowercase (`feat`, `fix`, `refactor`, `docs`, `chore`, `style` = formatting only, `test`).
- One commit per logical change. Never commit secrets (`.env.local`).
