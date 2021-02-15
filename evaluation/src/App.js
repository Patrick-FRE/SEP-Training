import React from "react";
import { Provider } from "react-redux";
import "./App.css";
import store from "./redux/store";
import AlbumContainer from "./components/AlbumContainer";
import Container from "react-bootstrap/Container";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <Provider store={store}>
      <Container>
        <Layout className="App">
          <AlbumContainer />
        </Layout>
      </Container>
    </Provider>
  );
}

export default App;
