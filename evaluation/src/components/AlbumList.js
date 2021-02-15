import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useLocation } from "react-router-dom";
import { fetchAlbums } from "../redux/albumList/albumListActions";

function AlbumList({ albums, resultCount, fetchAlbums }) {
  const param = useLocation().search;
  const query = new URLSearchParams(param);
  const query_param = query.get("query");

  useEffect(() => {
    if (!albums && query_param) fetchAlbums(query_param);
  }, []);

  return (
    <section className="search-result">
      {param === "" ? (
        <div className="title">Search Albums by ArtistName:</div>
      ) : (
        <>
          <div className="title">
            {resultCount} results for "{query_param}"
          </div>
          <ul className="album-list">
            {albums &&
              albums.map((album) => (
                <li className="album" key={album.collectionId}>
                  <img
                    className="album-image"
                    src={album.artworkUrl100}
                    alt="album"
                  />
                  <h4 className="album-name">{album.collectionCensoredName}</h4>
                </li>
              ))}
          </ul>
        </>
      )}
    </section>
  );
}

const mapStateToProps = (state) => {
  return {
    artistName: state.artist.artistName,
    albums: state.albums.data.results,
    resultCount: state.albums.data.resultCount,
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchAlbums: (artistName) => dispatch(fetchAlbums(artistName)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AlbumList);
