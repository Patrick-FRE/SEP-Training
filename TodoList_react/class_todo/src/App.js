
import './App.css';
import { Component } from 'react';
import List  from './components/List'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      todos: [{
        text: 'This is first ToDo',
        isComplete: false
      }]
    }
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
  }  
   addTodo = text => {
    let newTodos = [{ text }, ...this.state.todos];
    this.setState({
      todos:newTodos
  })
  };

  handleChange(e){
     this.setState({
      inputValue : e.target.value
     })}
  

     handleComplete = e => {
      const index = e.target.getAttribute("data-index");
      const newTodos = [...this.state.todos];
      newTodos[index].isComplete = !newTodos[index].isComplete;
      this.setState({
        todos:newTodos
      });
    };

     handleSubmit(e){
      e.preventDefault();
      if (!this.state.inputValue) return;
      this.addTodo(this.state.inputValue);
      this.setState({
        inputValue: ''
      });
     }

     handleRemove = e => {
      e.stopPropagation();
      const index = e.target.getAttribute("data-index");
      const newTodos = [...this.state.todos];
      newTodos.splice(index, 1);
      this.setState({
        todos:newTodos
      });
    };

  render(){
    return (
      <div className="contain">
        <h1>ToDo List with Class Components</h1>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.inputValue}  onChange={this.handleChange} placeholder="Add new Todo!"/>
        </form>
       <List  todos={this.state.todos}  handleComplete={this.handleComplete} handleRemove={this.handleRemove} />
      </div>
    )
  }
}

export default App;
