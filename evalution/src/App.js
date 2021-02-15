import getAlbumsByArtistName from "./APIs/iTunesAPI";
import AlbumList from "./components/AlbumList";
import { useState } from "react";
//  artworkUrl100 collectionName
function App() {
  let searchName = 1;

  const searchHandler = (event) => {
    if (event.code === "Enter") {
      getAlbumsByArtistName(searchName).then((data) => {
        setAlbums([...data.results]);
      });
    }
  };
  const inputHandler = (event) => {
    searchName = event.target.value;
  };
  const [albums, setAlbums] = useState([]);
  return (
    <div className="App">
      <header>
        <input
          placeholder={`Search...`}
          onKeyPress={searchHandler}
          onChange={inputHandler}
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
