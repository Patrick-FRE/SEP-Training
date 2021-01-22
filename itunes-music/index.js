class Model {
  constructor() {
    this.albums = [];
  }

  async getAlbums(artistName) {
    let res = await fetch(
      `https://itunes.apple.com/search?term=${artistName}&media=music&entity=album&attribute=artistTerm&limit=50`
    );
    res = await res.json();
    this.albums = res.results;

    this.displayAlbums(this.albums);
  }

  bindDisplayAlbums(callback) {
    this.displayAlbums = callback;
  }
}

class View {
  constructor() {
    this.header = this.getElement("header");
    this.container = this.getElement(".container");

    this.input = this.createElement("input", "search");
    this.input.type = "search";
    this.input.placeholder = "Search...";
    this.input.name = "search";

    this.title = this.createElement("h1", "title");
    this.title.textContent = "Search Albums by the Artist Name";

    this.albumList = this.createElement("ul", "album-list");

    this.header.append(this.input);
    this.container.append(this.title, this.albumList);
  }

  createElement(tag, className) {
    const element = document.createElement(tag);
    if (className) element.classList.add(className);

    return element;
  }

  getElement(selector) {
    const element = document.querySelector(selector);

    return element;
  }

  displayAlbums(albums, artistName) {
    while (this.albumList.firstChild) {
      this.albumList.removeChild(this.albumList.firstChild);
    }

    if (albums.length === 0) {
      this.title.textContent = `There are no albums under the name of "${artistName}"`;
    } else {
      albums.map((album) => {
        this.title.textContent = `${albums.length} results for "${artistName}"`;

        const li = this.createElement("li", "album");
        li.id = album.collectionId;

        const img = this.createElement("img", "album-image");
        img.src = album.artworkUrl100;

        const h4 = this.createElement("h4", "album-name");
        h4.textContent = album.collectionCensoredName;

        li.append(img, h4);
        this.albumList.appendChild(li);
      });
    }
  }

  get _artistName() {
    return this.input.value;
  }

  bindGetAlbums(handler) {
    this.input.addEventListener("keypress", (event) => {
      if (event.key === "Enter") {
        if (this._artistName === "") alert("Please enter an artist name!");
        else handler(this._artistName);
      }
    });
  }
}

class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    this.view.bindGetAlbums(this.handleGetAlbums);
    this.model.bindDisplayAlbums(this.handleDisplayAlbums);
  }

  handleGetAlbums = (artistName) => {
    this.model.getAlbums(artistName);
  };

  handleDisplayAlbums = (albums) => {
    this.view.displayAlbums(albums, this.view._artistName);
  };
}

const app = new Controller(new Model(), new View());
