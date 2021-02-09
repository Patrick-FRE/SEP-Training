import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "./styles/reset.css";
// import { Provider } from "react-redux";
// import { store } from "./Redux/Redux";
// import { MyProvider } from "./react-redux/React-Redux";
import StocksApp from "./StocksApp/StocksApp";

ReactDOM.render(
  <React.StrictMode>
    <StocksApp></StocksApp>
  </React.StrictMode>,
  document.getElementById("root")
);
