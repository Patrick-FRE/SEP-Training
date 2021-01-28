import React from "react";
import TodoItem from "./TodoItem";

interface Props {
  todos: Todo[];
  deleteTodo: (id: number) => void;
  toggleTodo: (id: number) => void;
}

export default function TodoList({ todos, deleteTodo, toggleTodo }: Props) {
  return (
    <ul>
      {todos.length !== 0 ? (
        todos.map((todo: Todo) => (
          <li key={todo.id}>
            <TodoItem
              todo={todo}
              deleteTodo={deleteTodo}
              toggleTodo={toggleTodo}
            />
          </li>
        ))
      ) : (
        <h2>Nothing to do today.</h2>
      )}
    </ul>
  );
}
