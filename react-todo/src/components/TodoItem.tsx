import React from "react";

interface Props {
  todo: Todo;
  deleteTodo: (id: number) => void;
  toggleTodo: (id: number) => void;
}

export default function TodoItem({ todo, deleteTodo, toggleTodo }: Props) {
  return (
    <>
      <p
        className={todo.completed ? "completed todo-title" : "todo-title"}
        onClick={() => toggleTodo(todo.id)}
      >
        {todo.title}
      </p>
      <div>
        <i className="fas fa-backspace" onClick={() => deleteTodo(todo.id)}></i>
      </div>
    </>
  );
}
