const fetchAPI = ((controller) => {
  const baseURL = `https://itunes.apple.com/search?term=${controller.getInput.value}&media=music&entity=album&attribute=artistTerm&limit=50`;
  //artistName will from Controller

  const getAllAlbums = () => fetch(baseURL).then((response) => response.json());

  return {
    getAllAlbums,
  };
})(Controller);

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
      template += `<a href="${album.collectionViewUrl}"><div class="card-container">
            <img class="album-cover" id="${album.collectionId}"
                src="${album.artworkUrl100}">
            <p>${album.collectionName}</p>
        </div></a>`;
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
