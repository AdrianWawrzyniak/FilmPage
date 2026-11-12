import type { TmdbMovie, TmdbMovieListResponse } from "../types/tmdb";

const BASE_URL = "https://api.themoviedb.org/3";

const token = import.meta.env.VITE_TMDB_TOKEN;
if (!token) {
  throw new Error("Token is missing");
}

export async function getPopularMovies(): Promise<TmdbMovie[]> {
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

  return data.results;
}
