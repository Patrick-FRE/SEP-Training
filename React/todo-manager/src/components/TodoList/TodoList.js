import React from 'react';
import Todo from '../../components/Todo/Todo';
import { getAllTodos, addTodo, removeTodo } from '../../apis/todos.api';

import './TodoList.css';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: '',
      todos: [],
    };
    this.handleUserInputChange = this.handleUserInputChange.bind(this);
    this.handleUserInputSubmit = this.handleUserInputSubmit.bind(this);
    this.handleRemoveTodo = this.handleRemoveTodo.bind(this);
  }

  handleUserInputChange(e) {
    this.setState({
      userInput: e.target.value,
    });
  }
  handleUserInputSubmit(e) {
    e.preventDefault();
    alert('test');
    /// add Todo to the Todos.
    // call Add todo API

    addTodo({ userId: 1, title: this.state.userInput }).then((data) => {
      this.setState((preState) => ({
        userInput: '',
        todos: [data, ...preState.todos],
      }));
    });
  }

  handleRemoveTodo(id) {
    removeTodo(id).then((data) => {
      this.setState((preState) => ({
        todos: preState.todos.filter((todo) => todo.id !== id),
      }));
    });
  }

  componentDidMount() {
    getAllTodos().then((data) => {
      //console.log(data);
      this.setState({
        todos: data,
      });
    });
  }

  render() {
    return (
      <section className="section-todolist">
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
          </form>
          <ul className="todolist-items">
            {this.state.todos
              ? this.state.todos.map((todo) => (
                  <Todo
                    key={todo.id}
                    todo={todo}
                    handleRemoveTodo={this.handleRemoveTodo}
                  ></Todo>
                ))
              : null}
          </ul>
        </div>
      </section>
    );
  }
}
export default TodoList;
