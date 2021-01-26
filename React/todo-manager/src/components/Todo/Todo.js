import React from 'react';

import './Todo.css';

class Todo extends React.Component {
  render() {
    const { id, userId, completed, title } = this.props.todo;
    return (
      <li className="todo">
        <p className="todo__content"> {title}</p>
        <button type="button" className="todo__btn-remove">
          X
        </button>
      </li>
    );
  }
}
export default Todo;
