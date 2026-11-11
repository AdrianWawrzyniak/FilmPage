# Architecture decisions

Notes on the main technical choices in this project and the reasons behind them.

## TypeScript (strict mode)

The project uses TypeScript with `strict` enabled. Most mistakes, like a typo in a prop name or a missing field, show up in the editor instead of in the browser.

## React 19 + Vite

Function components and hooks only. Vite is what the React docs recommend for a client-side app without a framework. It starts fast and does not hide much.

## ESLint and Prettier

ESLint comes with the Vite template, including `eslint-plugin-react-hooks`, which catches incorrect hook usage.

Prettier is installed in the project (not only as an editor extension) with a shared `.prettierrc`, so formatting is the same on any machine. `prettier-plugin-tailwindcss` keeps Tailwind classes in a consistent order.

## Tailwind CSS v4

Styling is done with Tailwind utility classes. The reasons:

- styles sit next to the markup, so changing one component does not break another,
- spacing, colors and font sizes come from one scale, which keeps the UI consistent,
- only the classes that are actually used end up in the final CSS file.

Colors are defined once in `@theme` in `src/index.css` with names based on their role (`background`, `card`, `foreground`, `muted`, `accent`)

## Project structure

```
src/
  components/   UI components
  types/        shared TypeScript types
  data/         mock data
```

Grouping by file type is enough for now. If the app grows, I will switch to grouping by feature (`features/search/`, `features/watchlist/`).

For types, I use `interface` for object shapes and `type` for unions and aliases.

## Git workflow

- `main` should always work; every change goes through a branch and a pull request.
- Pull requests are squash-merged, so each PR becomes a single commit on `main` titled after the PR.

A `.gitattributes` file forces LF line endings. Git on Windows converts to CRLF by default, which made Prettier flag every file.

## Planned

- React Router for the movie details page
- TanStack Query for data fetching (after doing it manually with `fetch` and `useEffect` first)
- React Hook Form + Zod for the review form
- Vitest + React Testing Library for tests
- Deployment on Vercel
