import './App.css';
import InputBar from './components/InputBar';
import TodoList from './components/TodoList';
import React from 'react';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      todolist: [{ id: 1, title: 'todo1' }, { id: 2, title: 'todo2' }],
      id: 2,
      keyword: ''

    }
  }
  newlist = []
  componentDidMount() {

  }

  addTodo = (e) => {


    if (this.state.keyword && e.key == 'Enter') {
      // this.newlist = this.state.todolist.map(todo => todo.title.includes(this.state.keyword))
      let newlistt = this.state.todolist
      newlistt.push({
        id: this.state.id + 1,
        title: e.target.value
      })

      this.setState({
        todolist: newlistt,
        id: this.state.id + 1,
        keyword: ''
      })

      // console.log(e.key,'e key');

      // this.setState({})
    }
  }

  deleteTodo = (e) => {
    // console.log(e.target.id, 'id now', typeof (e.target.id));
    let newdeletelist = this.state.todolist.filter(todo => todo.id !== parseInt(e.target.id))
    // get id and delte
    console.log(newdeletelist, 'in delete');
    this.setState({ todolist: newdeletelist })

  }


  onChangeKey = (e) => {
    // console.log(e, "on keyword");
    this.setState({ keyword: e.target.value })
  }

  render() {
    const ref = React.createRef()
    // console.log(ref);

    if (!this.state.keyword) {
      this.newlist = this.state.todolist
    }

    return (
      <div className="App" >
        <header style={{ fontWeight: 'bold' }}>Todo</header>

        <InputBar
          ref={ref}
          keyword={this.state.keyword}
          onChangeKey={this.onChangeKey}
          addTodo={this.addTodo} />
        <TodoList
          newlist={this.newlist}
          deleteTodo={this.deleteTodo}
        />

      </div>
    );
  }
}

export default App;
