import React, { useState } from 'react';
import { searchTracks } from '../utils/spotifyAPI';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = async () => {
    const results = await searchTracks(query);
    onSearch(results);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search for songs..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
