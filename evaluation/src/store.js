import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import { albumReducer } from "./reducers/albumReducer";

// import { orderReducer } from "./reducers/orderReducers";

const initialState = {};
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  combineReducers({
    album: albumReducer,
  }),
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);
export default store;
