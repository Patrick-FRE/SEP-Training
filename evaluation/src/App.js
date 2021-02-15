import React from 'react';
import{BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import  Nav  from './components/nav/nav.component';

import './App.css';


function app(){
  return(
    <Router>
    <div className = "App">
    <Nav/>
    {/* <Switch>
    <Route path="/" exact component={HomePage}/>
    <Route path="/:name"exact component = {userDetail}/>
    <Route path="/:name/followers" component={Followers}/>
    </Switch> */}
    </div>
    </Router>
  )
}
export default app;