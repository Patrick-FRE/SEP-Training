import states from "./states";

const reducers = (state = states, action) => {
  let newState = state;
  switch (action.type) {
    case "setAlbums":
      newState.albums = [...action.payload];
      return newState;
    case "updateSearchName":
      newState.searchName = action.searchName;
      return newState;
    default:
      return newState;
  }
};
export default reducers;
