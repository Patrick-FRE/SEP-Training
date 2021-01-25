import {  useState } from 'react';
import List from './Components/List';
import './App.css'

function App() {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([{
      text: 'This is first ToDo',
      isComplete: false
    }]);

  const addTodo = text => {
    const newTodos = [{ text }, ...todos];
    setTodos(newTodos);
  };
  
  const handleChange = e => {
    setInputValue(e.target.value);
  }

  const handleComplete = e => {
    const index = e.target.getAttribute("data-index");
    const newTodos = [...todos];
    newTodos[index].isComplete = !newTodos[index].isComplete;
    setTodos(newTodos);
  };

  const handleRemove = e => {
    e.stopPropagation();
    const index = e.target.getAttribute("data-index");
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!inputValue) return;
    addTodo(inputValue);
    setInputValue('');
  };

  return (
    <div className="contain">
      <h1>ToDo List with Hooks</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={inputValue}  onChange={handleChange} placeholder="Add new Todo!"/>
      </form>
     <List  todos={todos}  handleComplete={handleComplete} handleRemove={handleRemove} />
    </div>
  );
};

export default App;