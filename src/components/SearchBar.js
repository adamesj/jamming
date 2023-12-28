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
        className='bg-gray-50 border border-gray-300 block'
        type="text"
        placeholder="Search for songs..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button className='rounded-full bg-violet-600 text-white px-4' onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
