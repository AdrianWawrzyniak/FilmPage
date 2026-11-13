# FilmPage

A movie browsing app built with React and TypeScript. You can browse popular movies from TMDB and search them by title.

## Features

- Popular movies loaded from the TMDB API
- Movie grid that adapts to screen size (2 to 5 columns)
- Search by title as you type
- Loading and error states, and a message when nothing matches the search

## Built with

- React 19
- TypeScript
- Vite
- Tailwind CSS v4

## Running locally

You need Node.js 22.12 or newer.

You also need a free TMDB account to get an API token (Settings → API → API Read Access Token).

```bash
git clone git@github.com:AdrianWawrzyniak/FilmPage.git
cd FilmPage
npm install
cp .env.example .env.local
```

Open `.env.local`, paste your token after `VITE_TMDB_TOKEN=`, then start the app:

```bash
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
- [x] Movies from the TMDB API
- [ ] Movie details page (React Router)
- [ ] Watchlist saved in `localStorage`
- [ ] Rating and review form
- [ ] Tests
- [ ] Deployment

## Credits

This product uses the [TMDB](https://www.themoviedb.org) API but is not endorsed or certified by TMDB.
