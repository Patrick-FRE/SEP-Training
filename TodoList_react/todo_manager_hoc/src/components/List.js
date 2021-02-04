import React, { Component } from "react";
import {withTodos} from '../hoc/withTodos'

class ToDoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      inputValue: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.inputValue) return;
    this.addTodo(this.state.inputValue);
    this.setState({
      inputValue: "",
    });
  }

  render() {
    return (
      <div>
        <h1>ToDo List with HOC </h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.inputValue}
            onChange={this.handleChange}
            placeholder="Add new Todo!"
          />
        </form>
        <ul>
          {this.props.todos.map(({ text, isComplete }, index) => (
            <li
              key={index}
              className={isComplete ? "complete" : null}
              data-index={index}
              onClick={this.props.handleComplete}
              tabIndex="0"
            >
              <div>{text}</div>
              <button
                className="remove"
                data-index={index}
                onClick={this.props.handleRemove}
              >
                X
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default withTodos(ToDoList);
