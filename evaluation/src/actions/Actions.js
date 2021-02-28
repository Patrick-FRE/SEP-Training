const USER_INPUT = "input/searchalbums";
const FETCH_ALBUMS = "fetch/getallbums";
const LOADING = "loading";

export const actions = {
  USER_INPUT,
  FETCH_ALBUMS,
  LOADING,
};

export const getInput = (input) => ({
  type: actions.USER_INPUT,
  payload: input,
});

export const setAlbums = (res) => ({
  type: actions.FETCH_ALBUMS,
  payload: res,
});

export const setLoading = (boolean) => ({
  type: actions.LOADING,
  payload: boolean,
});
