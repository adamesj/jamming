import React, { useState } from 'react';
import { searchTracks } from '../utils/spotifyAPI';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = async () => {
    const results = await searchTracks(query);
    onSearch(results);
  };

  return (
    <div className='w-full my-5 h-3/6'>
      <div className='relative top-1/4'>
        <input
          className='bg-gray-50 border border-gray-300 block mx-auto my-0 rounded form-input'
          type="text"
          placeholder="Search for songs..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <div className='button-container text-center my-2'>
          <button className='w-40 h-10 rounded-full bg-violet-600 text-white px-4 mx-auto my-0' onClick={handleSearch}>Search</button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
