import React from 'react';
import Track from './Track';

function Tracklist({ tracks }) {
  const trackListing = tracks.map((track, index) => (
    <Track 
      key={index}
      title={track.name}
      album={track.album.name}
    />
  ));

  return (
    <div>
      <h1>Tracklist</h1>
      {trackListing}
    </div>
  );
};

export default Tracklist;
