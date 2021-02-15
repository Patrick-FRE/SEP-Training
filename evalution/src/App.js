import getAlbumsByArtistName from "./APIs/iTunesAPI";
import AlbumList from "./components/AlbumList";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import actions from "./store/actions";
//  artworkUrl100 collectionName
function App() {
  const dispatch = useDispatch();
  let albums = useSelector((s) => {
    return s.albums;
  });
  const searchName = useSelector((s) => {
    return s.searchName;
  });

  return (
    <div className="App">
      <header>
        <input
          placeholder={`Search...`}
          // onKeyPress={searchHandler}
          onKeyPress={(event) => {
            if (event.code === "Enter") {
              getAlbumsByArtistName(searchName).then((data) => {
                // setAlbums([...data.results]);
                dispatch({ type: "setAlbums", payload: [...data.results] });
              });
            }
          }}
          onChange={(event) => {
            dispatch({ type: "updateSearchName", payload: event.target.value });
          }}
        ></input>
      </header>
      <main>
        <header>{`Search ALbums by ${
          searchName ? searchName : "ArtisName"
        }`}</header>
        <AlbumList albums={albums}></AlbumList>
      </main>
    </div>
  );
}

export default App;
