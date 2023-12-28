import React, { useState } from 'react';

function Playlist() {
  const [name, setName] = useState('My Playlist');

  return <div>{name}</div>;
};

export default Playlist;
