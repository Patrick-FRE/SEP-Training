import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

export default function AddTodo() {
  const [text, setText] = useState("");
  const { handleOnSubmit } = useContext(GlobalContext) as IContext;

  const onSubmit = (e: React.FormEvent) => {
    handleOnSubmit(e, text);
    setText("");
  };

  return (
    <div className="add-todo-container">
      <h1>To-Do List</h1>
      <form onSubmit={(e) => onSubmit(e)} className="add-todo-form">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="add-todo"
          placeholder="Add Name Todo..."
        />
        <button className="add-todo-btn">Add Item</button>
      </form>
    </div>
  );
}
