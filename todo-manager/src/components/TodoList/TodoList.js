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
  }

  hadleInputCollapsed(e) {
    // console.log("input button is clicked!", e);
    this.setState({ isCollapsed: !this.state.isCollapsed });
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
                <Todo key={todo.id} todo={todo}></Todo>
              ))
            : null}
        </ul>
        <div className="input-container">
          <label
            className={
              this.state.isCollapsed
                ? "input-label__collapsed"
                : "input-label__hidden"
            }
          >
            <input
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
        </div>
      </section>
    );
  }
}

export default TodoList;
