import "./App.css";
import React from "react";
import Layout from "./components/Layout/Layout";

// fontAwsome
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

class App extends React.Component {
  render() {
    return (
      <div>
        <Layout></Layout>
      </div>
    );
  }
}

export default App;
