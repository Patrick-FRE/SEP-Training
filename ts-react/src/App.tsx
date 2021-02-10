import React from "react";
import logo from "./logo.svg";
import "./App.css";

interface Istate {
  num?: number;
  str?: string;
  value?: string;
}

interface Iprops {
  num?: number;
}

enum NumberSet {
  num1 = 1,
  num2 = 3,
  num4
}

class App extends React.Component<Iprops, Istate> {
  constructor(props: any) {
    super(props);
  }
  public cat: String = "cat";
  private dog: String = "dog";
  state: Istate = { num: 1, str: "str", value: "" };

  getPrivateDog = () => {
    return this.dog;
  };

  useEnumSet = () => {
    return NumberSet.num4;
  };

  handleChange = (e: any) => {
    this.setState({ value: e.target.value });
  };

  render() {
    return (
      <div className="App">
        <h1>I'm header</h1>
        <input
          onChange={(e) => this.handleChange(e)}
          value={this.state.value}
          placeholder="typeScript here"
        ></input>
        <div>value in store: {this.state.value}</div>
        <div>getPrivateDog(): {this.getPrivateDog()} </div>
        <div>useEnumSet(): {this.useEnumSet()}</div>
      </div>
    );
  }
}

export default App;
