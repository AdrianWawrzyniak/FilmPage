export interface Movie {
  id: number;
  title: string;
  overview: string;
  posterUrl: string | null;
  releaseDate: string;
  rating: number;
}

export interface MovieDetails extends Movie {
  backdropUrl: string | null;
  genres: string[];
  runtime: number | null;
}
