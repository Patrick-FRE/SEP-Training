import {
  FETCH_ALBUMS_FAILURE,
  FETCH_ALBUMS_REQUEST,
  FETCH_ALBUMS_SUCCESS,
} from "./albumListTypes";

const fetchAlbumsRequest = () => {
  return {
    type: FETCH_ALBUMS_REQUEST,
  };
};
const fetchAlbumsSuccess = (data) => {
  return {
    type: FETCH_ALBUMS_SUCCESS,
    payload: data,
  };
};
const fetchAlbumsFailure = (error) => {
  return {
    type: FETCH_ALBUMS_FAILURE,
    payload: error,
  };
};

export const fetchAlbums = (artistName) => async (dispatch) => {
  dispatch(fetchAlbumsRequest());

  try {
    const url = `https://itunes.apple.com/search?term=${artistName}&media=music&entity=album&attribute=artistTerm&limit=50`;
    const res = await fetch(url);
    const data = await res.json();

    dispatch(fetchAlbumsSuccess(data));
  } catch (error) {
    dispatch(fetchAlbumsFailure(error.message));
  }
};
