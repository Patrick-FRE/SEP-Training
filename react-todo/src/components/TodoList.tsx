import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalContext";
import TodoItem from "./TodoItem";

export default function TodoList() {
  const { todos, fetchTodos } = useContext(GlobalContext) as IContext;

  useEffect(() => {
    fetchTodos();
  }, [fetchTodos]);

  return (
    <ul>
      {todos.length !== 0 ? (
        todos.map((todo: ITodo) => (
          <li key={todo.id}>
            <TodoItem todo={todo} />
          </li>
        ))
      ) : (
        <h2>Nothing to do today.</h2>
      )}
    </ul>
  );
}
