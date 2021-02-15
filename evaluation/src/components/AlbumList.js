import React from "react";
import { connect } from "react-redux";
import { useLocation } from "react-router-dom";

function AlbumList({ albums, resultCount }) {
  const param = useLocation().search;
  const query = new URLSearchParams(param);
  console.log(albums);
  return (
    <section className="search-result">
      {param === "" ? (
        <div className="title">Search Albums by ArtistName:</div>
      ) : (
        <>
          <div className="title">
            {resultCount} results for "{query.get("query")}"
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
  // updateName: (e) => dispatch(updateName(e)),
  // fetchAlbums: (artistName) => dispatch(fetchAlbums(artistName)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AlbumList);
