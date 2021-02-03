import React from "react";
import "./Header.css";
import { connect } from "react-redux";

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

const mapStateToProps = (state /*ownProps*/) => {
  return {
    counter: state.value,
  };
};

export default connect(mapStateToProps)(Header);
