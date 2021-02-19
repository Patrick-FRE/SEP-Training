import React from "react";
import Layout from "./components/layout/layout";
import Result from "./components/result/result";
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/">
              <Redirect to="/albumlist" render={(props) => <Result {...props} />} />
            </Route>

            {/* <Route to="/albumlist" render={(props) => <Result {...props} />} /> */}
            <Result />
          </Switch>
        </Layout>
      </Router>
    </Provider>
  );
};

export default App;
