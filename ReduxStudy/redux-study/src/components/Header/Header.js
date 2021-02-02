import React from "react";
import "./Header.css";

class Header extends React.Component {
  //   constructor(props) {
  //     super(props);
  //   }
  render() {
    return (
      <header className="app-header">
        <h1>Header Counter: {this.props.counter}</h1>
      </header>
    );
  }
}

export default Header;
