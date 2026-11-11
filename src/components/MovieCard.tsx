import type { Movie } from "../types/movie";

interface MovieCardProps {
  movie: Movie;
}

function MovieCard({ movie }: MovieCardProps) {
  const year = movie.releaseDate.slice(0, 4);

  return (
    <article className="overflow-hidden rounded-lg bg-card">
      <img
        className="w-full"
        src={movie.posterUrl}
        alt={`poster off ${movie.title}`}
      />
      <h3 className="mx-3 mt-2 mb-1 text-base font-bold">{movie.title}</h3>
      <p className="mx-3 mb-3 text-sm text-muted">
        {year} · ⭐ {movie.rating.toFixed(1)}
      </p>
    </article>
  );
}

export default MovieCard;
