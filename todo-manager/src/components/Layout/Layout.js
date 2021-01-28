import React from "react";
import Header from "../Header/Header";
import "./Layout.css";

class Layout extends React.Component {
  render() {
    return (
      <div className="app-container">
        <div className="app-header">
          <Header></Header>
        </div>
      </div>
    );
  }
}

export default Layout;
