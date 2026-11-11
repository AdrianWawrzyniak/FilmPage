# FilmPage

A movie browsing app built with React and TypeScript. You can browse a grid of movies and search them by title.

## Features

- Movie grid that adapts to screen size (2 to 5 columns)
- Search by title as you type
- Message when nothing matches the search

## Built with

- React 19
- TypeScript
- Vite
- Tailwind CSS v4

## Running locally

You need Node.js 22.12 or newer.

```bash
git clone git@github.com:AdrianWawrzyniak/FilmPage.git
cd FilmPage
npm install
npm run dev
```

Then open http://localhost:5173.

Other scripts:

- `npm run build` builds the app for production
- `npm run preview` serves the production build locally

## Roadmap

- [x] Movie grid
- [x] Search by title
- [x] Styling with Tailwind, responsive layout
- [ ] Movies from the TMDB API
- [ ] Movie details page (React Router)
- [ ] Watchlist saved in `localStorage`
- [ ] Rating and review form
- [ ] Tests
- [ ] Deployment
