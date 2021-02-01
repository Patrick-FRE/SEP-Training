import React from "react";
import { addTodo, removeTodo, updateTodo } from "../apis/TodoAPI";

export const withTodos = (WrappedComponent) =>
  class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        todos: [],
      };
      this.handleAddTodo = this.handleAddTodo.bind(this);
      this.handleRemoveTodo = this.handleRemoveTodo.bind(this);
      this.handleUpdateTodo = this.handleUpdateTodo.bind(this);
    }

    handleRemoveTodo(id) {
      TodoAPI.removeTodo(id).then(() => {
        this.setState((preState) => ({
          todos: preState.todos.filter((todo) => todo.id !== id),
        }));
      });
    }

    handleUpdateTodo(id, completed) {
      TodoAPI.updateTodo(id, completed).then((data) => {
        console.log(data);
        this.setState((preState) => ({
          todos: preState.todos.map((todo) =>
            todo.id === data.id ? data : todo
          ),
        }));
      });
    }

    componentDidMount() {
      TodoAPI.getAllTodos().then((data) => {
        console.log(data);
        this.setState({
          todos: data,
        });
      });
    }

    render() {
      console.log(this.props);
      return (
        <WrappedComponent
          count={this.state.todos.length}
          todos={this.state.todos}
          addTodo={this.handleAddTodo}
          removeTodo={this.handleRemoveTodo}
          updateTodo={this.handleUpdateTodo}
          {...this.props}
        ></WrappedComponent>
      );
    }
  };
