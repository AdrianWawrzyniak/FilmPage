import type { Movie } from "../types/movie";
import { Link } from "react-router";

interface MovieCardProps {
  movie: Movie;
}

function MovieCard({ movie }: MovieCardProps) {
  const year = movie.releaseDate.slice(0, 4);

  return (
    <Link
      to={`/movie/${movie.id}`}
      className="block overflow-hidden rounded-lg bg-card transition hover:scale-105 focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none"
    >
      <article>
        {movie.posterUrl ? (
          <img
            className="w-full"
            src={movie.posterUrl}
            alt={`poster of ${movie.title}`}
          />
        ) : (
          <div className="flex aspect-2/3 items-center justify-center bg-muted/20 text-sm text-muted">
            No poster
          </div>
        )}
        <h3 className="mx-3 mt-2 mb-1 text-base font-bold">{movie.title}</h3>
        <p className="mx-3 mb-3 text-sm text-muted">
          {year} · ⭐ {movie.rating.toFixed(1)}
        </p>
      </article>
    </Link>
  );
}

export default MovieCard;
