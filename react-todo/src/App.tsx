import React from "react";
import "./App.css";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import { GlobalProvider } from "./context/GlobalContext";

function App() {
  return (
    <GlobalProvider>
      <div className="container">
        <AddTodo />
        <TodoList />
      </div>
    </GlobalProvider>
  );
}

export default App;
