function Footer() {
  return (
    <footer className="mt-12 border-t border-muted/20 py-6 text-center text-sm text-muted">
      This product uses the{" "}
      <a
        className="underline hover:text-foreground"
        href="https://www.themoviedb.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        TMDB
      </a>{" "}
      API but is not endorsed or certified by TMDB.
    </footer>
  );
}

export default Footer;
