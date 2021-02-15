import React from "react";
import "./result.css";
import { connect } from "react-redux";
import ResultCard from "../resultCard/resultCard";

function Result(props) {
  const { count, artistName, albums } = props;
  return (
    <div className="result__wrapper">
      <h1 className="result__title">
        {count} results for {artistName}
      </h1>
      {albums.map((item) => (
        <ResultCard item={item} />
      ))}
    </div>
  );
}

export default connect((state) => ({ count: state.album.albums.length, artistName: state.album.searchedName, albums: state.album.albums }), {})(Result);
