import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { HashRouter as Router, Route } from 'react-router-dom';

import './App.css';



import Landing from './components/landing/Landing';


import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
           
            <Route exact path="/" component={Landing} />
            
           
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
