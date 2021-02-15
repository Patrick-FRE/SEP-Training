import React from "react";
import Layout from "./components/layout/layout";
import Result from "./components/result/result";
import { Provider } from "react-redux";
import store from "./store";

const App = () => {
  return (
    <Provider store={store}>
      <Layout>
        <Result />
      </Layout>
    </Provider>
  );
};

export default App;
