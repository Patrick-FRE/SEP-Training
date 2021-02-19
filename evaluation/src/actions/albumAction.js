import { searchAlbum } from "../apis/itunes.api";
export const SEARCH_ALBUMS = "SEARCH_ALBUMS";

export const searchAlbums = (name) => (dispatch) => {
  if (!name) {
    dispatch({
      type: SEARCH_ALBUMS,
      payload: { albums: [], searchedName: null },
    });
  } else {
    const param = name ? name.split(" ").join("+") : null;
    searchAlbum(param).then((data) => {
      const results = data.results;
      dispatch({
        type: SEARCH_ALBUMS,
        payload: { albums: results.length > 1 ? results : [], searchedName: name },
      });
    });
  }
};
