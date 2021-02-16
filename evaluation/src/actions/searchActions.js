import { SEARCH_ALBUM} from './types';



const searchAlbum = (ARTIST_NAME) =>
  fetch(`https://itunes.apple.com/search?term=${ARTIST_NAME}&media=music&entity=album&attribute=artistTerm&limit=50`).then((res) => res.json());

export const searchAlbums = (text) => (dispatch) => {
  const param = text.split(" ").join("+");
  searchAlbum(param).then((data) => {
    const results = data.results;
    dispatch({
      type: SEARCH_ALBUM,
      payload: { albums: results, text: text },
    });
  });
};

