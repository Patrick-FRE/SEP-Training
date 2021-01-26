import React from 'react';

import './Todo.css';

class Todo extends React.Component {
  render() {
    return (
      <div className="todo">
        <p className="todo__content"> Buy a book</p>
        <button type="button" className="todo__btn-remove">
          X
        </button>
      </div>
    );
  }
}
export default Todo;
