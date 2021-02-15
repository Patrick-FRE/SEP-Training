import React, { useEffect, useState } from "react";
import "./result.css";
import { connect } from "react-redux";
import { searchAlbums } from "../../actions/albumAction";
import ResultCard from "../resultCard/resultCard";
import { useLocation } from "react-router-dom";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function Result(props) {
  const { count, artistName, albums, searchAlbums } = props;

  // //Fetch the query in the URL
  let query = useQuery();
  const searchedName = query.get("query");
  console.log(searchedName);
  const [urlQ, seturlQ] = useState(searchedName);

  useEffect(() => {
    if (searchedName) {
      searchAlbums(searchedName);
    }
  }, [urlQ, albums]);

  return (
    <section className="result__wrapper">
      <div className="result__title">
        <h1>{artistName === "" ? "Search Albums by ArtistName" : `${count} results for ${artistName}`}</h1>
      </div>

      <section className="result__content">
        {albums.map((item) => (
          <ResultCard item={item} />
        ))}
      </section>
    </section>
  );
}

export default connect((state) => ({ count: state.album.albums.length, artistName: state.album.searchedName, albums: state.album.albums }), { searchAlbums })(
  Result
);
