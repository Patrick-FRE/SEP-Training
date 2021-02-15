import React, { Component } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Landing from "./components/Landing";
import store from "./store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Route exact path="/albumlist" component={Landing} />
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
