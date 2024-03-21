  import React, { useState } from 'react';

  interface SearchBarProps {
    value: string;
    onSearch: (value: string) => void;
  }

  const SearchBar: React.FC<SearchBarProps> = ({ value, onSearch }) => {
    const [searchTerm, setSearchTerm] = useState(value);

    const handleSearch = (event: React.FormEvent) => {
      event.preventDefault();
      onSearch(searchTerm);
    };

    return (
      <form onSubmit={handleSearch} className="mb-4 bg-brown-900 p-4 rounded-lg border-2 border-brown-900 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex items-center justify-center">
        <input
          type="text"
          value={searchTerm}
          onChange={e => {
            setSearchTerm(e.target.value);
            onSearch(e.target.value);
          }}
          placeholder="Search..."
          className="border-2 border-brown-900 rounded-l-lg p-2 flex-grow"
        />
        <button type="submit" className="border-2 border-brown-900 bg-brown-900 text-yellow-100 rounded-r-lg p-2">
          Search
        </button>
      </form>
    );
  };

  export default SearchBar;