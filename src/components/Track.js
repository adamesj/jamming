import React from 'react';

function Track({ title, artists, album }) {
  return (
    <>
      <div className='w-11/12 m-auto flex justify-between'>
        <div>
          <h3 className='text-white'>{title}</h3>
          <p className='text-white'>{artists} | {album}</p>
        </div>
        <div>
          <button 
            className='text-white hover:text-slate-500' 
            data-testid='add-song-to-playlist-btn'>
            +
          </button>
        </div>
      </div>
      <hr className='w-11/12 m-auto my-4' />
    </>
  );
};

export default Track;
