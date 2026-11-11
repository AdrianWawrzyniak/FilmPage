import { useState } from "react";
import MovieGrid from "./components/MovieGrid";
import { movies } from "./data/movies";
import SearchBar from "./components/SearchBar";

function App() {
  const [query, setQuery] = useState("");
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
