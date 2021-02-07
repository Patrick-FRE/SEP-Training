import React from "react";
import "./Content.css";
import { connect } from "react-redux";
import { myConnect } from "../../react-redux/React-Redux";

class Content extends React.Component {
  render() {
    return (
      <div className="content-container">
        <p>You are the {this.props.counter} visitor coming to this site!!</p>
      </div>
    );
  }
}

const mapStateToProps = (state /*ownProps*/) => {
  return {
    counter: state.value,
  };
};

export default myConnect(mapStateToProps)(Content);
