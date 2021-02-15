import React, { useEffect } from "react";
import "./result.css";
import { connect } from "react-redux";
import { searchAlbums } from "../../actions/albumAction";
import ResultCard from "../resultCard/resultCard";
import { useLocation } from "react-router-dom";

function Result(props) {
  const { count, artistName, albums, searchAlbums } = props;
  function useQuery() {
    return new URLSearchParams(useLocation()?.search);
  }
  let query = useQuery();
  const searchedName = query.get("query");
  useEffect(() => {
    searchAlbums(searchedName);
  }, []);

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

export default connect((state) => ({ count: state.album.albums.length, artistName: state.album.searchedName, albums: state.album.albums }), { searchAlbums })(
  Result
);
