import React from 'react';
import { getAllTodos, addTodo, removeTodo } from '../apis/todos.api';

export const withTodos = (WrappedComponnet) =>
  class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        todos: [],
      };
      this.hanldeAddTodo = this.hanldeAddTodo.bind(this);
      this.handleRemoveTodo = this.handleRemoveTodo.bind(this);
    }

    handleUserInputChange(e) {
      this.setState({
        userInput: e.target.value,
      });
    }
    hanldeAddTodo(newTodo) {
      addTodo(newTodo).then((data) => {
        this.setState((preState) => ({
          todos: [data, ...preState.todos],
        }));
      });
    }

    handleRemoveTodo(id) {
      removeTodo(id).then((data) => {
        this.setState((preState) => ({
          todos: preState.todos.filter((todo) => todo.id !== id),
        }));
      });
    }

    componentDidMount() {
      getAllTodos().then((data) => {
        console.log(data);
        this.setState({
          todos: data,
        });
      });
    }

    render() {
      console.log(this.props);
      return (
        <WrappedComponnet
          count={this.state.todos.length}
          todos={this.state.todos}
          addTodo={this.hanldeAddTodo}
          removeTodo={this.handleRemoveTodo}
          {...this.props} //
        ></WrappedComponnet>
      );
    }
  };
