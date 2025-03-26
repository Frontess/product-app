import React from "react";

type SearchFilterProps = {
  query: string;
  onChange: (value: string) => void;
};

const SearchFilter: React.FC<SearchFilterProps> = ({ query, onChange }) => {
  return (
    <input
      type="text"
      placeholder="Search products..."
      value={query}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

export default SearchFilter;
