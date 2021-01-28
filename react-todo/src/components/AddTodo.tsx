import React, { useState } from "react";

interface Props {
  handleOnSubmit: (e: React.FormEvent, text: string) => void;
}

export default function AddTodo(props: Props) {
  const [text, setText] = useState("");

  const onSubmit = (e: React.FormEvent) => {
    props.handleOnSubmit(e, text);
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
