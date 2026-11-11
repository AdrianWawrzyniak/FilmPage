interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <input
      className="mb-6 w-full rounded-xl bg-card p-2 placeholder:text-muted focus:ring-2 focus:ring-accent focus:outline-none"
      value={value}
      placeholder="Search on FilmPage"
      type="search"
      onChange={(e) => onChange(e.target.value)}
    />
  );
}

export default SearchBar;
