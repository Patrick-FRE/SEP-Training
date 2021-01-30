import React from "react";
import Todo from "../Todo/Todo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import "./TodoList.css";
import * as TodoAPI from "../../apis/TodoAPI";

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: "",
      todos: [],
      isCollapsed: false,
    };
    this.hadleInputCollapsed = this.hadleInputCollapsed.bind(this);
    this.handleUserInput = this.handleUserInput.bind(this);
    this.handleUserSubmit = this.handleUserSubmit.bind(this);
    this.handleAddTodo = this.handleAddTodo.bind(this);
    this.handleRemoveTodo = this.handleRemoveTodo.bind(this);
    this.handleUpdateTodo = this.handleUpdateTodo.bind(this);
  }

  hadleInputCollapsed() {
    // console.log("input button is clicked!", e);
    this.setState({ isCollapsed: !this.state.isCollapsed });
  }

  //add todo
  handleUserInput(e) {
    this.setState({ userInput: e.target.value });
  }
  handleUserSubmit(e) {
    e.preventDefault();
    this.setState({
      userInput: "",
    });
    const newTodo = {
      userId: 1,
      title: this.state.userInput,
      completed: false,
    };
    this.handleAddTodo(newTodo);
  }

  handleAddTodo(newTodo) {
    TodoAPI.addTodo(newTodo).then((data) => {
      this.setState((preState) => ({
        todos: [data, ...preState.todos],
      }));
      console.log(this.state.todos);
    });
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
    return (
      <section className="section-todolist">
        <ul className="todolist-container">
          {this.state.todos
            ? this.state.todos.map((todo) => (
                <Todo
                  key={todo.id}
                  todo={todo}
                  handleRemoveTodo={this.handleRemoveTodo}
                  handleUpdateTodo={this.handleUpdateTodo}
                ></Todo>
              ))
            : null}
        </ul>
        <form onSubmit={this.handleUserSubmit} className="input-container">
          <label
            className={
              this.state.isCollapsed
                ? "input-label__collapsed"
                : "input-label__hidden"
            }
          >
            <input
              onChange={this.handleUserInput}
              value={this.state.userInput}
              className="todo-input"
              type="text"
              placeholder="Type your todo"
            ></input>
          </label>
          <button
            onClick={this.hadleInputCollapsed}
            type="button"
            className="todo__add-btn"
          >
            <FontAwesomeIcon icon={faPlus} />
          </button>
        </form>
      </section>
    );
  }
}

export default TodoList;
