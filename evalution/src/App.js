import getAlbumsByArtistName from "./iTunesAPI";
function App() {
  let searchName = 1;
  let albums = [];
  const searchHandler = (event) => {
    if (event.code === "Enter") {
      getAlbumsByArtistName(searchName).then((data) => (albums = data.result));
    }
  };
  const inputHandler = (event) => {
    searchName = event.target.value;
    console.log(searchName);
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
        <section>
          {albums.length > 0
            ? albums.map((album) => {
                <div>albums.name</div>;
              })
            : null}
        </section>
      </main>
    </div>
  );
}

export default App;
