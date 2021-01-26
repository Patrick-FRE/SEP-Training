import React from 'react';
import Todo from '../../components/Todo/Todo';

import './TodoList.css';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: '',
    };
    this.handleUserInputChange = this.handleUserInputChange.bind(this);
    this.handleUserInputSubmit = this.handleUserInputSubmit.bind(this);
  }

  handleUserInputChange(e) {
    this.setState({
      userInput: e.target.value,
    });
  }
  handleUserInputSubmit(e) {
    e.preventDefault();
    alert('test');
  }

  render() {
    return (
      <section class="section-todolist">
        <div className="todolist-container">
          <form onSubmit={this.handleUserInputSubmit} className="todolist-form">
            <div className="todolist-form__row">
              <header className="todolist-header">TodoList</header>
            </div>
            <div className="todolist-form__row">
              <input
                className="todolist-inputbar"
                placeholder="What are you going to do?"
                value={this.state.userInput}
                onChange={this.handleUserInputChange}
              ></input>
            </div>
            <div className="todolist-form__row">
              <Todo></Todo>
            </div>
          </form>
        </div>
      </section>
    );
  }
}
export default TodoList;
