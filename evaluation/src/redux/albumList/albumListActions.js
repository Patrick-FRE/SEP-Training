import { FETCH_ALBUMS_SUCCESS } from "./albumListTypes";

export const fetchAlbums = (artistName) => async (dispatch) => {
  //   const cors_url = "https://cors-anywhere.herokuapp.com/";
  const url = `https://itunes.apple.com/search?term=${artistName}&media=music&entity=album&attribute=artistTerm&limit=50`;
  const res = await fetch(url);
  const data = await res.json();
  console.log(data);
  dispatch({
    type: FETCH_ALBUMS_SUCCESS,
    payload: data,
  });
};
