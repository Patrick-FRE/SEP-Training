import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux'
import { AddTodo, DeleteTodo } from './actions/TodoActions'
import React from 'react'
class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = { key: '' }
  }

  handleChange = (e) => {
    this.setState({ key: e.target.value })
  }

  handleKeyDown = (e) => {
    if (e.key == 'Enter') {
      console.log('in handlekey');
      this.props.AddTodo(this.state.key)
      this.setState({ key: '' })
    }
  }

  componentDidMount() {
    console.log(this.props.Todolist);
  }
  // {this.props.Todolist.map(todo => (<li>{todo}</li>))}
  render() {
    return (
      <div className="App" >
        <header>Redux Todo</header>
        <main>
          <section id="input">
            <input
              value={this.state.key}
              onChange={this.handleChange}
              onKeyDown={this.handleKeyDown}
              placeholder="search"
            ></input>
          </section>
          <ul>
            {this.props.Todolist.map(todo => (<li id={todo.id} key={todo.title}>
              {todo.title}<span onClick={() => this.props.DeleteTodo(todo.id)}>X</span></li>))}
            <li>List</li>
            <li>List</li>
            <li>List</li>
          </ul>
        </main>
      </div>
    );
  }

}


const mapStateToProps = state => ({ Todolist: state })
const mapDispatchToProps = dispatch => ({
  AddTodo: (todo) => dispatch(AddTodo(todo)),
  DeleteTodo: id => dispatch(DeleteTodo(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
