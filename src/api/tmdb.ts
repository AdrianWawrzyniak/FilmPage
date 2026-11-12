import type { TmdbMovie, TmdbMovieListResponse } from "../types/tmdb";
import type { Movie } from "../types/movie";

const BASE_URL = "https://api.themoviedb.org/3";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

const token = import.meta.env.VITE_TMDB_TOKEN;
if (!token) {
  throw new Error("Token is missing");
}

function toMovie(movie: TmdbMovie): Movie {
  return {
    id: movie.id,
    title: movie.title,
    overview: movie.overview,
    releaseDate: movie.release_date,
    rating: movie.vote_average,
    posterUrl: movie.poster_path
      ? `${IMAGE_BASE_URL}${movie.poster_path}`
      : null,
  };
}

export async function getPopularMovies(): Promise<Movie[]> {
  const response = await fetch(`${BASE_URL}/movie/popular`, {
    headers: {
      Authorization: `Bearer ${token}`,
      accept: "application/json",
    },
  });
  if (!response.ok) {
    throw new Error(`TMDB request failed: ${response.status}`);
  }
  const data: TmdbMovieListResponse = await response.json();

  return data.results.map(toMovie);
}
