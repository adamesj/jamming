import React from 'react';

function Track({ title, artist, album }) {
  return (
    <div className="track">
      <h3>{title}</h3>
      <p>Artist: {artist}</p>
      <p>Album: {album}</p>
    </div>
  );
};

export default Track;
