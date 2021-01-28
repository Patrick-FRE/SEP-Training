import React, { useEffect, useState } from "react";
import "./App.css";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    const fetchTodos = async () => {
      const url = "https://jsonplaceholder.typicode.com/todos/?_limit=5";
      const res = await fetch(url);
      const data = await res.json();

      setTodos(data);
    };

    fetchTodos();
  }, []);

  const handleOnSubmit = (e: React.FormEvent, text: string) => {
    e.preventDefault();

    const newTodo: Todo = {
      userId: 1,
      id: todos.length + 1,
      title: text,
      completed: false,
    };

    setTodos((prevState) => [newTodo, ...prevState]);
  };

  const deleteTodo = (id: number) => {
    setTodos((prevState) => [...prevState].filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id: number) => {
    setTodos((prevState) =>
      [...prevState].map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      })
    );
  };

  return (
    <div className="container">
      <AddTodo handleOnSubmit={handleOnSubmit} />
      <TodoList todos={todos} deleteTodo={deleteTodo} toggleTodo={toggleTodo} />
    </div>
  );
}

export default App;
