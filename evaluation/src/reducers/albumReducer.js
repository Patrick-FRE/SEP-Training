import { SEARCH_ALBUMS } from "../actions/albumAction";

export const albumReducer = (
  state = {
    albums: [],
    searchedName: "",
  },
  action
) => {
  switch (action.type) {
    case SEARCH_ALBUMS:
      return { albums: action.payload.albums, searchedName: action.payload.searchedName };
    default:
      return state;
  }
};
