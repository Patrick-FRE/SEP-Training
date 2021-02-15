import getAlbumsByArtistName from "./APIs/iTunesAPI";
import AlbumList from "./components/AlbumList";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import actions from "./store/actions";
//  artworkUrl100 collectionName
function App() {
  const dispatch = useDispatch();

  const [albums, setAlbums] = useState([]);
  const [searchName, setSearchName] = useState("");
  const searchHandler = (event) => {
    if (event.code === "Enter") {
      getAlbumsByArtistName(searchName).then((data) => {
        setAlbums([...data.results]);
      });
    }
  };
  const inputHandler = (event) => {
    setSearchName(event.target.value);
  };

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
