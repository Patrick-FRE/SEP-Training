import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import ReactDOM from "react-dom";
import App from "./App";
import reducers from "./store/reducers";

const store = createStore(reducers);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
