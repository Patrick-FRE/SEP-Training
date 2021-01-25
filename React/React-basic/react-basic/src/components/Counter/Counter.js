import React from 'react';

// var myVar = setInterval(myTimer, 1000);

// var a = { state: { name: 'Patrick' } };
// console.log(a.state);

// let _intervalId = null;

// function myStopFunction() {
//   clearInterval(myVar);
// }

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
    this.setState((preState) => {
      return {
        counter: preState.counter + 1,
      };
    });
    this.setState((preState) => {
      return {
        counter: preState.counter + 1,
      };
    });
  }
  // handleAdd = () => {
  //   console.log(this);
  // };
  componentDidMount() {
    // this._intervalId = setInterval(() => {
    //   this.setState({
    //     counter: this.state.counter + 1,
    //   });
    //   console.log('interval');
    // }, 1000);
  }

  componentWillUnmount() {
    //console.log('id' + this._intervalID);
    //console.log(intervalId);
    clearInterval(this._intervalId);
  }

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

// function foo() {}

// const foo3 = foo.bind(this);

// const foo2 = () => {};

let state = {
  counter: 0,
};

function setState(newState) {
  state = newState;
}

setState({ counter: state + 1 });
console.log(state); //
setState({ counter: state + 1 });
console.log(state);
