import { useState, useEffect } from "react";
import MovieGrid from "./components/MovieGrid";
import SearchBar from "./components/SearchBar";
import type { Movie } from "./types/movie";
import { getPopularMovies } from "./api/tmdb";
import Footer from "./components/Footer";

type Status = "loading" | "error" | "success";

function App() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState<Status>("loading");

  useEffect(() => {
    let ignore = false;
    getPopularMovies()
      .then((data) => {
        if (!ignore) {
          setMovies(data);
          setStatus("success");
        }
      })
      .catch(() => {
        if (!ignore) {
          setStatus("error");
        }
      });
    return () => {
      ignore = true;
    };
  }, []);

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(query.toLowerCase()),
  );

  let content;
  if (status === "loading") {
    content = <p className="text-muted">Loading movies...</p>;
  } else if (status === "error") {
    content = (
      <p className="text-muted">
        Error loading movies. Please try again later.
      </p>
    );
  } else {
    content =
      filteredMovies.length > 0 ? (
        <MovieGrid movies={filteredMovies} />
      ) : (
        <p className="text-muted">{`No movies matching "${query}"`}</p>
      );
  }

  return (
    <>
      <main className="mx-auto max-w-7xl p-6">
        <h1 className="mb-10 text-6xl font-bold">FilmPage</h1>
        <SearchBar value={query} onChange={setQuery} />
        {content}
      </main>
      <Footer />
    </>
  );
}

export default App;
