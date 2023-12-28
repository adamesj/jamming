import { useState } from "react";
import Tracklist from "./components/Tracklist";
import SearchBar from "./components/SearchBar";

function App() {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (results) => {
    setSearchResults(results.tracks.items);
  };

  return (
    <div className="App">
      <header className="App-header">
        <SearchBar onSearch={handleSearch} />
        <Tracklist tracks={searchResults} />
      </header>
    </div>
  );
}

export default App;
