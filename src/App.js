import { useState } from 'react';
import Tracklist from './components/Tracklist';
import SearchBar from './components/SearchBar';

function App() {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (results) => {    
    setSearchResults(results);
  };

  return (
    <div className='background'>
      <div className='app-header w-full mx-auto my-0'>
        <SearchBar onSearch={handleSearch} />
      </div>
      <div className='grid grid-cols-2 gap-2'>
        <div className='col-container'>
          <Tracklist tracks={searchResults} />
        </div>
        <div className='col-container'>
          <h1 className='text-white'>User Playlist</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
