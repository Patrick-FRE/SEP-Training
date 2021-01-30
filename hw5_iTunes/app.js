const fetchAPI = (() => {
  const getAllAlbums = (name) => {
    const artistName = name;
    const baseURL = `https://itunes.apple.com/search?term=${artistName}&media=music&entity=album&attribute=artistTerm&limit=50`;
    // console.log(baseURL);
    return fetch(baseURL).then((response) => response.json());
    // .then((repsonseJSON) => {
    //   return repsonseJSON;
    // });
  };

  return {
    getAllAlbums,
  };
})();

const View = (() => {
  const domString = {
    //get the album gallery container
    albumGallery: "album-gallery",
    searchResult: "search-result",
    searchInput: "search-input",
    // resultRow: "result-row"
  };
  const render = (element, htmlTemplate) => {
    element.innerHTML = htmlTemplate;
  };

  const setGalleryTemplate = (albumArray) => {
    let template = "";
    albumArray.forEach((album) => {
      template += `<a href="${album.collectionViewUrl}"><div class="card-container">
            <img class="album-cover" id="${album.collectionId}"
                src="${album.artworkUrl100}">
            <p>${album.collectionName}</p>
        </div></a>`;
    });
    return template;
  };

  return {
    domString,
    render,
    setGalleryTemplate,
  };
})();

const Model = ((view, api) => {
  const fetchAlbums = api.getAllAlbums;

  class State {
    #allalbums = [];
    #results = "";
    // #artistname = "";

    get results() {
      return this.#results;
    }
    // get artistname() {
    //   return this.#artistname;
    // }

    get allalbums() {
      return this.#allalbums;
    }
    // set artistName(name) {
    //   this.#artistname = name;
    // }
    set results(results) {
      this.#results = results;
      // const searchResult = document.getElementById(view.domString.searchResult);
      // searchResult.innerHTML = `Find ${this.#results} albums of ${
      //   this.#artistname
      // }`;
    }

    set allalbums(albumlist) {
      this.#allalbums = albumlist;
      const albumGallery = document.getElementById(view.domString.albumGallery);
      const template = view.setGalleryTemplate(this.#allalbums);
      view.render(albumGallery, template);
    }
  }

  return {
    fetchAlbums,
    State,
  };
})(View, fetchAPI);

const Controller = ((model, view) => {
  const state = new model.State();

  const inputListener = () => {
    const searchInputEle = document.getElementById(view.domString.searchInput);
    searchInputEle.addEventListener("change", (event) => {
      // console.log("event listener works");
      let name = event.target.value;
      if (name !== 0) {
        const searchTerm = name.toLowerCase().split(" ").join("+");
        // console.log(state.artistname);
        model.fetchAlbums(searchTerm).then((data) => {
          state.allalbums = data.results;
          state.results = data.resultCount;

          const searchResult = document.getElementById(
            view.domString.searchResult
          );
          searchResult.innerHTML = `Find ${state.results} albums of ${name}`;
        });
      }
      searchInputEle.value = "";
    });
  };

  const init = () => {
    console.log("init");
    inputListener();
  };

  return {
    init,
  };
})(Model, View);

Controller.init();
