import { forwardRef } from "react";

const SearchBar = forwardRef(function SearchBar({ searchText, onSearchChange }, ref) {
  return (
    <input
      ref={ref}
      type="text"
      placeholder="Search notes..."
      value={searchText}
      onChange={(e) => onSearchChange(e.target.value)}
      className="border rounded px-3 py-2 w-full"
    />
  );
});

export default SearchBar;