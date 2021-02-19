import { combineReducers } from "redux";
import { albumListReducer } from "./albumList/albumListReducer";
import { searchInputReducer } from "./searchInput/searchInputReducer";

const rootReducer = combineReducers({
  albums: albumListReducer,
  search: searchInputReducer,
});

export default rootReducer;
