import { searchAlbum } from "../apis/itunes.api";
export const SEARCH_ALBUMS = "SEARCH_ALBUMS";

export const searchAlbums = (name) => (dispatch) => {
  console.log("Fetch");
  const param = name.split(" ").join("+");
  searchAlbum(param).then((data) => {
    const results = data.results;
    dispatch({
      type: SEARCH_ALBUMS,
      payload: { albums: results, searchedName: name },
    });
  });
};
