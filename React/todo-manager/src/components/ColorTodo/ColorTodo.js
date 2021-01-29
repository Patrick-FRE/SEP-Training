import React from 'react';
import RandomColorText from '../RandomColorText/RandomColorText';
import { limitCharStr } from '../../utils/limitCharStr.util';

import './ColorTodo.css';

class ColorTodo extends React.Component {
  render() {
    const { id, userId, completed, title } = this.props.todo;
    const { handleRemoveTodo } = this.props;
    return (
      <li className="todo">
        <p className="todo__content">
          <RandomColorText>{limitCharStr(title, 40, '...')}</RandomColorText>
        </p>
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
export default ColorTodo;
