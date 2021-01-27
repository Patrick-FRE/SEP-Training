import React from 'react';
import { limitCharStr } from '../../utils/limitCharStr.util';

import './Todo.css';

class Todo extends React.Component {
  render() {
    const { id, userId, completed, title } = this.props.todo;
    const { handleRemoveTodo } = this.props;
    return (
      <li className="todo">
        <p className="todo__content"> {limitCharStr(title, 40, '...')}</p>
        <button
          type="button"
          className="todo__btn-remove"
          onClick={() => handleRemoveTodo(id)}
        >
          X
        </button>
      </li>
    );
  }
}
export default Todo;
