import React from "react";
import Buy from "./Buy";
import Calc from "./Calc";
import "./StocksApp.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { StocksProvider } from "./StocksStore";

export default function StocksApp() {
  return (
    <Router>
      <StocksProvider>
        <section>
          <h1>Stocks App</h1>
          <ul>
            <li>
              <Link to="/buy">Buy</Link>
            </li>
            <li>
              <Link to="/calc">Calc</Link>
            </li>
          </ul>
        </section>
        <Switch>
          <Route path="/buy">
            <Buy></Buy>
          </Route>
          <Route path="/calc">
            <Calc></Calc>
          </Route>
        </Switch>
      </StocksProvider>
    </Router>
  );
}
