import React from 'react';

import './Album.css';

export const Album = ({album}) => (
  <div className='card-container'>
    <img
      alt='Empty Album'
      src={album.artworkUrl100}
    />
    <h2> {album.collectionName} </h2>
    <p> {album.primaryGenreName} </p>
  </div>
);