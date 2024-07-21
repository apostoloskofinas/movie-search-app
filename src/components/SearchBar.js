// src/components/SearchBar.js
import React, { useState } from 'react';

// Το SearchBar component δέχεται ένα prop `onSearch` από το App component.
function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('Batman'); // Χρησιμοποιείς useState για το state τοπικά στο SearchBar

  const handleChange = (event) => {
    setQuery(event.target.value); // Ενημέρωση του state
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(query); // Χρησιμοποιείς το prop onSearch
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search for movies..."
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchBar;
