import { useState, useEffect } from "react";
import MovieGrid from "./components/MovieGrid";
import SearchBar from "./components/SearchBar";
import type { Movie } from "./types/movie";
import { getPopularMovies } from "./api/tmdb";

function App() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    let ignore = false;
    getPopularMovies().then((data) => {
      if (!ignore) {
        setMovies(data);
      }
    });
    return () => {
      ignore = true;
    };
  }, []);

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <main className="mx-auto max-w-7xl p-6">
      <h1 className="mb-10 text-6xl font-bold">FilmPage</h1>
      <SearchBar value={query} onChange={setQuery} />
      {filteredMovies.length > 0 ? (
        <MovieGrid movies={filteredMovies} />
      ) : (
        <p className="text-muted">{`No movies matching "${query}"`}</p>
      )}
    </main>
  );
}

export default App;
