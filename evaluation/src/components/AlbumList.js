import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import useQuery from "../hooks/useQuery";
import { fetchAlbums } from "../redux/albumList/albumListActions";
import Fallback from "./Fallback";

export default function AlbumList() {
  const isLoading = useSelector((state) => state.albums.isLoading);
  const albums = useSelector((state) => state.albums.data.results);
  const resultCount = useSelector((state) => state.albums.data.resultCount);
  const error = useSelector((state) => state.albums.error);

  const dispatch = useDispatch();

  const query_param = useQuery();

  useEffect(() => {
    if (query_param) dispatch(fetchAlbums(query_param));
  }, [dispatch, query_param]);

  return (
    <section className="search-result">
      {!query_param ? (
        <div className="title">Search Albums by ArtistName:</div>
      ) : (
        <>
          <Fallback />
          {!isLoading && albums && error === "" ? (
            <>
              <div className="title">
                {resultCount} results for "{query_param}"
              </div>
              <ul className="album-list">
                {albums.map((album) => (
                  <li className="album" key={album.collectionId}>
                    <img
                      className="album-image"
                      src={album.artworkUrl100}
                      alt="album"
                    />
                    <h4 className="album-name">
                      {album.collectionCensoredName}
                    </h4>
                  </li>
                ))}
              </ul>
            </>
          ) : null}
        </>
      )}
    </section>
  );
}
