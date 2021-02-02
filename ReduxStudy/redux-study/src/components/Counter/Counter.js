import React from "react";
import "./Counter.css";

class Counter extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div className="counter-container">
        <h2>Counter: {this.props.counter} </h2>
        <button onClick={this.props.handleAddCounter}>Add</button>
        <button onClick={this.props.handleReduceCounter}>Reduce</button>
      </div>
    );
  }
}

export default Counter;
