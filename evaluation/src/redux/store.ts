import { createStore } from "redux";
import albumReducer from "./reducers/album";

export default createStore(albumReducer);