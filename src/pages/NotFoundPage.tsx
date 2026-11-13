import { Link } from "react-router";

function NotFoundPage() {
  return (
    <div className="text-center">
      <h1 className="my-10 text-4xl font-bold">Page not found</h1>
      <Link to="/" className="text-accent hover:underline">
        Back to home page
      </Link>
    </div>
  );
}

export default NotFoundPage;
