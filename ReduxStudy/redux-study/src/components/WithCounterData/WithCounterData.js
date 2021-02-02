import React from "react";

class WithCounterData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
    this.handleAddCounter = this.handleAddCounter.bind(this);
    this.handleReduceCounter = this.handleReduceCounter.bind(this);
  }

  handleAddCounter() {
    this.setState({ counter: this.state.counter + 1 });
  }

  handleReduceCounter() {
    this.setState({ counter: this.state.counter - 1 });
  }

  render() {
    if (typeof this.props.render === "function") {
      return this.props.render(
        this.state.counter,
        this.handleAddCounter,
        this.handleReduceCounter
      );
    }

    if (typeof this.props.children === "function") {
      return this.props.render(
        this.state.counter,
        this.handleAddCounter,
        this.handleReduceCounter
      );
    }
    return null;
  }
}

export default WithCounterData;
