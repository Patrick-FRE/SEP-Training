import React from "react";
import "./Counter.css";
import { actionCreator } from "../../Redux/Redux";
import { connect } from "react-redux";

class Counter extends React.Component {
  render() {
    // console.log(this.props.counter);
    //Why the value is stored in counter, not the value???
    return (
      <div className="counter-container">
        <h2>Counter: {this.props.counter} </h2>
        <button onClick={this.props.add}>Add</button>
        <button onClick={this.props.reduce}>Reduce</button>
      </div>
    );
  }
}

const mapStateToProps = (state /*ownProps*/) => {
  return {
    counter: state.value,
  };
};

const mapDispatchToProps = (dispatch /*ownProps*/) => {
  return {
    add: () => dispatch(actionCreator.incremented()),
    reduce: () => dispatch(actionCreator.decremented()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
