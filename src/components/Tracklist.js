import React from 'react';
import Track from './Track';

function Tracklist({ tracks }) {
  const trackListing = tracks.map((track, index) => (
    <Track 
      key={index}
      title={track.name}
      album={track.album.name}
      artists={track.artists.map(artist => artist.name).join(', ')}
    />
  ));

  return (
    <div>
      <h1 className='w-11/12 m-auto text-white my-4 text-4xl font-semibold'>Results</h1>
      {trackListing}
    </div>
  );
};

export default Tracklist;
