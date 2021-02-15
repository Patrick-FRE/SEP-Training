import React from "react";
import "./resultCard.css";
import { connect } from "react-redux";
export default function ResultCard(props) {
  const { collectionName, artworkUrl100 } = props.item;
  return (
    <div className="card">
      <img src={artworkUrl100} className="card__img" alt="album_cover" />
      <div className="card__content">{collectionName}</div>
    </div>
  );
}
