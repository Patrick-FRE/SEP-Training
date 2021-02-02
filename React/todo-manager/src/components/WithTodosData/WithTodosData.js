import React from 'react';
import { getAllTodos, addTodo, removeTodo } from '../../apis/todos.api';

class WithTodosData extends React.Component {
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
      this.setState({
        todos: data,
      });
    });
  }

  render() {
    if (typeof this.props.render === 'function') {
      return this.props.render(
        this.state.todos,
        this.hanldeAddTodo,
        this.handleRemoveTodo
      );
    }

    if (typeof this.props.children === 'function') {
      return this.props.children(
        this.state.todos,
        this.hanldeAddTodo,
        this.handleRemoveTodo
      );
    }
    return null;
  }
}

export default WithTodosData;
