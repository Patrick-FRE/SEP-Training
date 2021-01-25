const fetchAPI = ((model) => {
  const baseURL = `https://itunes.apple.com/search?term=${model.artistName}&media=music&entity=album&attribute=artistTerm&limit=50`;
  //artistName will from model

  const getAllAlbums = () => fetch(baseURL).then((response) => response.json());

  return {
    getAllAlbums,
  };
})();

const View = () => {
  const domString = {
    //get the album gallery container
    albumGallery: "album-gallery",
  };
  const render = (element, htmlTemplate) => {
    element.innerHTML = htmlTemplate;
  };

  const setGalleryTemplate = (albumArray) => {
    let template = "";
    albumArray.forEach((album) => {
      template += `<div class="card-container">
            <img class="album-cover" id="${album.collectionId}"
                src="${album.artworkUrl100}">
            <p>${album.collectionName}</p>
        </div>`;
    });

    return {
      domString,
      render,
      setGalleryTemplate,
    };
  };
};

const Model = () => {};

const Controller = () => {};
