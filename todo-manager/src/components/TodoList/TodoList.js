import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
// import { withTodos } from "../../hoc/withTodos";
import "./TodoList.css";

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: "",
      isCollapsed: false,
    };
    this.hadleInputCollapsed = this.hadleInputCollapsed.bind(this);
    this.handleUserInput = this.handleUserInput.bind(this);
    this.handleUserSubmit = this.handleUserSubmit.bind(this);
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
    this.props.addTodo(newTodo);
  }

  render() {
    return (
      <section className="section-todolist">
        <ul className="todolist-container">
          {this.props.children(
            this.props.todos,
            this.props.removeTodo,
            this.props.updateTodo
          )}
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
