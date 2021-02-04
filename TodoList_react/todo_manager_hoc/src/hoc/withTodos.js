import React from "react";
import { getTodos } from "../apis/todos.api";

export const withTodos = (WrappedComponent) =>
  class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        todos: [],
      };
      this.addTodo = this.addTodo.bind(this);
      this.handleComplete = this.handleComplete.bind(this);
      this.handleRemove = this.handleRemove.bind(this);
    }

    componentDidMount() {
      getTodos().then((data) => {
        console.log(data);
        this.setState({
          todos: data,
        });
      });
    }

    addTodo = (title) => {
      let newTodos = [
        {
          completed: false,
          id: 101,
          title: title,
          userId: 6,
        },
        ...this.state.todos,
      ];
      this.setState({
        todos: newTodos,
      });
    };

    handleComplete = (e) => {
      const index = e.target.getAttribute("data-index");
      const newTodos = [...this.state.todos];
      newTodos[index].isComplete = !newTodos[index].isComplete;
      this.setState({
        todos: newTodos,
      });
    };

    handleRemove = (e) => {
      e.stopPropagation();
      const index = e.target.getAttribute("data-index");
      const newTodos = [...this.state.todos];
      newTodos.splice(index, 1);
      this.setState({
        todos: newTodos,
      });
    };

    render() {
      return (
        <WrappedComponent
          todos={this.state.todos}
          count={this.state.todos.length}
          addTodo={this.addTodo}
          handleComplete={this.handleComplete}
          handleRemove={this.handleRemove}
        >
          {" "}
        </WrappedComponent>
      );
    }
  };
