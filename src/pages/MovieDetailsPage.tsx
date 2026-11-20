import { useParams } from "react-router";

function MovieDetailsPage() {
  const { id } = useParams();
  const movieId = Number(id);

  return <h1 className="text-4xl font-bold">Movie {movieId}</h1>;
}

export default MovieDetailsPage;
