import { combineReducers } from "redux";
import { albumListReducer } from "./albumList/albumListReducer";
import { artistNameReducer } from "./artistName/artistNameReducer";

const rootReducer = combineReducers({
  albums: albumListReducer,
  artist: artistNameReducer,
});

export default rootReducer;
