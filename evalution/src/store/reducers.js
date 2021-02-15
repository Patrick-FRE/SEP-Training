import states from "./states";

const reducers = (state = states, action) => {
  let newState = state;
  switch (action.type) {
    case "setAlbums":
      console.log(action);
      newState.albums = [...action.payload];
      return newState;
    case "updateSearchName":
      newState.searchName = action.payload;
      return newState;
    default:
      return newState;
  }
};
export default reducers;
