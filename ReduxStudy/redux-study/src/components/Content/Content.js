import React from "react";
import "./Content.css";

class Content extends React.Component {
  render() {
    return (
      <div className="content-container">
        <p>You are the {this.props.counter} visitor coming to this site!!</p>
      </div>
    );
  }
}

export default Content;
