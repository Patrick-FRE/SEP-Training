import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import React from "react";
// import "./resultCard.css";

export default function AlbumCard(props) {
  const { collectionName, artworkUrl100 } = props.item;
  return (
    <div className="card">
      <img src={artworkUrl100} className="card__img" alt="album_cover" />
      <div className="card__content">{collectionName}</div>
    </div>
  );
}
