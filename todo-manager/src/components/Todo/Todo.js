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
      isCompleted: false,
      isActive: false,
    };
  }
  render() {
    const { title } = this.props.todo;
    const eventhandler = (e) => {
      e.isChecked
        ? this.setState({ isCompleted: true, isActive: true })
        : this.setState({ isCompleted: false, isActive: false });
      // console.log(this.state);
    };
    // const { handleRemovedTodo } = this.props;

    return (
      <li className="todo">
        <Checkbox onClick={eventhandler}></Checkbox>
        <p
          className={
            this.state.isCompleted
              ? "todo-content__completed"
              : "todo-content__uncompleted"
          }
        >
          {limitCharStr(title, 35, "...")}
        </p>
        <button
          className={
            this.state.isActive
              ? "todo__btn-remove__active"
              : "todo__btn-remove__unactive"
          }
          type="button"
        >
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </li>
    );
  }
}

export default Todo;
