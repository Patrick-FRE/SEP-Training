import React from 'react';
import Header from './components/header/header';
import Content from "./components/content/content";
import { Provider } from "react-redux";
import store from "./redux/store";
import { BrowserRouter as Router, Redirect, Route} from "react-router-dom";

import './App.css';

function App() {
  return (
    <Router>
      <Provider store={store}>
        <Header></Header>
        <Route path="/albumlist"><Content></Content></Route>
        <Route exact path="/">
          <Redirect to="/albumlist" />
        </Route>
      </Provider>
    </Router>
  );
}

export default App;
