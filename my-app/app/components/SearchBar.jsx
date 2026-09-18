import { forwardRef } from "react";

const SearchBar = forwardRef(function SearchBar({ searchText, onSearchChange }, ref) {
  return (
    <input
      ref={ref}
      type="text"
      placeholder="Search notes..."
      value={searchText}
      onChange={(e) => onSearchChange(e.target.value)}
      className="border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 rounded-lg px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
    />
  );
});

export default SearchBar;