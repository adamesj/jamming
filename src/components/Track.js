import React from 'react';

function Track({ title, artists, album }) {
  return (
    <>
      <div>
        <h3 className='text-white'>{title}</h3>
        <p className='text-white'>{artists} | {album}</p>
      </div>
      <div>
        <button data-testid='add-song-to-playlist-btn'>+</button>
      </div>
    </>
  );
};

export default Track;
