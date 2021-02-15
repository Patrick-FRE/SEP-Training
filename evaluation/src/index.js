// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// // import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//     <App />,
//   document.getElementById('root')
// );

import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux';
import {rootReducer} from './reducer/reducer';

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import App from './App';

const store = createStore(rootReducer, applyMiddleware(thunk));

const rootElement = document.getElementById('root')
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
)