import { useState } from 'react';
import Tracklist from './components/Tracklist';
import SearchBar from './components/SearchBar';

function App() {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (results) => {    
    setSearchResults(results);
  };

  return (
    <div className='background h-screen'>
      <div className='bg-black h-14'>
        <h1 className='text-white text-center text-xl'>Jamming</h1>
      </div>
      <SearchBar onSearch={handleSearch} />
      <div className='grid grid-cols-2 gap-x-6 h-full px-8'>
        <div className='col-container'>
          <Tracklist tracks={searchResults} />
        </div>
        <div className='col-container'>
          <h1 className='w-11/12 m-auto text-white my-4 text-4xl font-semibold'>User Playlist</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
