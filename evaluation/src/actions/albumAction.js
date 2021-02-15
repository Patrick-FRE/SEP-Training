import { searchAlbum } from "../apis/itunes.api";
export const SEARCH_ALBUMS = "SEARCH_ALBUMS";

export const searchAlbums = (name) => (dispatch) => {
  const param = name.split(" ").join("+");
  console.log(param);
  searchAlbum(param).then((data) => {
    const results = data.results;
    dispatch({
      type: SEARCH_ALBUMS,
      payload: { albums: results, searchedName: name },
    });
  });
};
