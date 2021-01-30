import React from "react";
import "./Checkbox.css";

class Checkbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isChecked: this.props.completed,
    };
    this.handelCheckboxChange = this.handelCheckboxChange.bind(this);
  }

  handelCheckboxChange(e) {
    // this will never be invoked, I am just assigning it to the invisible input to avoid some errors
    this.setState({ isChecked: e.target.checked });
  }

  render() {
    const { handleUpdateTodo } = this.props;
    const { id, completed } = this.props.todo;

    return (
      <span onClick={() => handleUpdateTodo(id, !completed)}>
        <input
          type="checkbox"
          checked={completed}
          onChange={this.handelCheckboxChange}
        />
        <span></span>
      </span>
    );
  }
}

export default Checkbox;
