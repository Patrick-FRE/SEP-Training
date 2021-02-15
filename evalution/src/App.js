function App() {
  const searchName = 1;
  const albums = [];
  return (
    <div className="App">
      <header>
        <input placeholder={`Search...`}></input>
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
