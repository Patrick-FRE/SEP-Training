import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import Checkbox from "../Checkbox/Checkbox";
import { limitCharStr } from "../../utilis/limitCharStr.util";
import "./Todo.css";

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isCompleted: this.props.todo.completed,
      isActive: this.props.todo.completed,
    };
  }
  render() {
    const { id, title, completed } = this.props.todo;
    const { handleRemoveTodo, handleUpdateTodo } = this.props;
    // console.log(this.props);

    return (
      <li className="todo">
        {/* how to pass todo to checkbox? */}
        <Checkbox
          todo={this.props.todo}
          handleUpdateTodo={handleUpdateTodo}
        ></Checkbox>
        <p
          className={
            completed ? "todo-content__completed" : "todo-content__uncompleted"
          }
        >
          {limitCharStr(title, 30, "...")}
        </p>
        <button
          className={
            completed
              ? "todo__btn-remove__active"
              : "todo__btn-remove__unactive"
          }
          type="button"
          onClick={() => handleRemoveTodo(id)}
        >
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </li>
    );
  }
}

export default Todo;
