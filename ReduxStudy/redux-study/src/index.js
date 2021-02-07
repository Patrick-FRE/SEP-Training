import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "./styles/reset.css";
import { Provider } from "react-redux";
import { store } from "./Redux/Redux";
import { MyProvider } from "./react-redux/React-Redux";

ReactDOM.render(
  <React.StrictMode>
    <MyProvider store={store}>
      <App />
    </MyProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
