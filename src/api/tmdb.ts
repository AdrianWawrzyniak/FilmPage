import type {
  TmdbMovie,
  TmdbMovieListResponse,
  TmdbMovieDetails,
} from "../types/tmdb";
import type { Movie, MovieDetails } from "../types/movie";

const BASE_URL = "https://api.themoviedb.org/3";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";
const BACKDROP_BASE_URL = "https://image.tmdb.org/t/p/w1280";

const token = import.meta.env.VITE_TMDB_TOKEN;
if (!token) {
  throw new Error("Token is missing");
}

const headers = {
  Authorization: `Bearer ${token}`,
  accept: "application/json",
};

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

function toMovieDetails(movie: TmdbMovieDetails): MovieDetails {
  return {
    ...toMovie(movie),
    backdropUrl: movie.backdrop_path
      ? `${BACKDROP_BASE_URL}${movie.backdrop_path}`
      : null,
    runtime: movie.runtime,
    genres: movie.genres.map((genre) => {
      return genre.name;
    }),
  };
}

export async function getPopularMovies(): Promise<Movie[]> {
  const response = await fetch(`${BASE_URL}/movie/popular`, {
    headers,
  });
  if (!response.ok) {
    throw new Error(`TMDB request failed: ${response.status}`);
  }
  const data: TmdbMovieListResponse = await response.json();

  return data.results.map(toMovie);
}

export async function getMovieDetails(
  id: number,
): Promise<MovieDetails | null> {
  const response = await fetch(`${BASE_URL}/movie/${id}`, {
    headers,
  });
  if (response.status === 404) {
    return null;
  } else if (!response.ok) {
    throw new Error(`TMDB request failed: ${response.status}`);
  }
  const data: TmdbMovieDetails = await response.json();

  return toMovieDetails(data);
}
