import React from "react";
import {
  addTodo,
  removeTodo,
  updateTodo,
  getAllTodos,
} from "../../apis/TodoAPI";

class WithTodosData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    };
    this.handleAddTodo = this.handleAddTodo.bind(this);
    this.handleRemoveTodo = this.handleRemoveTodo.bind(this);
    this.handleUpdateTodo = this.handleUpdateTodo.bind(this);
  }

  handleAddTodo(newTodo) {
    addTodo(newTodo).then((data) => {
      this.setState((preState) => ({
        todos: [data, ...preState.todos],
      }));
      console.log(this.state.todos);
    });
  }

  handleRemoveTodo(id) {
    removeTodo(id).then(() => {
      this.setState((preState) => ({
        todos: preState.todos.filter((todo) => todo.id !== id),
      }));
    });
  }

  handleUpdateTodo(id, compBoolean) {
    console.log(compBoolean);
    updateTodo(id, compBoolean).then((data) => {
      console.log("test");
      console.log(data);
      this.setState((preState) => ({
        todos: preState.todos.map((todo) =>
          todo.id === data.id ? data : todo
        ),
      }));
    });
  }

  componentDidMount() {
    getAllTodos().then((data) => {
      //   console.log(data);
      this.setState({
        todos: data,
      });
    });
  }

  render() {
    // console.log(this.props.children);
    if (typeof this.props.render === "function") {
      return this.props.render(
        this.state.todos,
        this.handleAddTodo,
        this.handleRemoveTodo,
        this.handleUpdateTodo
      );
    }
    if (typeof this.props.children === "function") {
      return this.props.children(
        this.state.todos,
        this.handleAddTodo,
        this.handleRemoveTodo,
        this.handleUpdateTodo
      );
    }
    return null;
  }
}

export default WithTodosData;
