import React from 'react';

// REACT life cycle methods:
// arrow function;
class Counter extends React.Component {
  //   state = {
  //     counter: 0,
  //   };
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
    this.handleAdd = this.handleAdd.bind(this);
  }

  handleAdd() {
    this.setState({
      counter: this.state.counter + 1,
    });
  }
  //   handleAdd = () => {
  //     console.log(this);
  //   };

  render() {
    return (
      <section className="counter">
        <h1> Counter: {this.state.counter}</h1>
        <button onClick={this.handleAdd}>Add</button>
      </section>
    );
  }
}

export default Counter;
