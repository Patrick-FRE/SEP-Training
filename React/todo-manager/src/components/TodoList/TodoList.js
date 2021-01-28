import React from 'react';
import Todo from '../../components/Todo/Todo';

import { withTodos } from '../../hoc/withTodos';

import './TodoList.css';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: '',
    };
    this.handleUserInputChange = this.handleUserInputChange.bind(this);
    this.handleUserSubmit = this.handleUserSubmit.bind(this);
  }
  handleUserInputChange(e) {
    this.setState({
      userInput: e.target.value,
    });
  }

  handleUserSubmit(e) {
    e.preventDefault();
    this.setState({
      userInput: '',
    });
    const newTodo = {
      userId: 1,
      title: this.state.userInput,
    };
    this.props.addTodo(newTodo);
  }

  render() {
    return (
      <section className="section-todolist">
        <div className="todolist-container">
          <form onSubmit={this.handleUserSubmit} className="todolist-form">
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
          </form>
          <ul className="todolist-items">
            {this.props.todos
              ? this.props.todos.map((todo) => (
                  <Todo
                    key={todo.id}
                    todo={todo}
                    handleRemoveTodo={() => this.props.removeTodo(todo.id)}
                  ></Todo>
                ))
              : null}
          </ul>
        </div>
      </section>
    );
  }
}
export default withTodos(TodoList);
