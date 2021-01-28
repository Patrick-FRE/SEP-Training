import React from "react";
import Date from "../Date/Date";
import "./Header.css";

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <h1>My Todos</h1>
        <Date></Date>
      </div>
    );
  }
}

export default Header;
