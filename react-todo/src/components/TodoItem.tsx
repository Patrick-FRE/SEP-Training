import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { ITodo, IContext } from "../types";

interface Props {
  todo: ITodo;
}

export default function TodoItem({ todo }: Props) {
  const { toggleTodo, deleteTodo } = useContext(GlobalContext) as IContext;

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
