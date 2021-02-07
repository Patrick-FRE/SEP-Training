import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'
import { myStore, myReducer } from './Redux/myRedux'
import { MyProvider } from './React-Redux/react-redux'
// import {}

// const store = createStore(myReducer)

ReactDOM.render(
  <MyProvider store={myStore}>
    <App str="just an abc" />
  </MyProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
