import React from "react";
import { Todo, handleClick } from "../App";

interface TodolistProps {
  list: Todo[];
  handleClick: handleClick;
}

const Todolist: React.FC<TodolistProps> = ({ list, handleClick }) => {
  return (
    <div>
      Todolist
      <div>
        {list.map((x: Todo) => (
          <div
            key={x.title}
            id={x.title}
            onClick={(e) => handleClick(e)}
            style={{ textDecoration: x.completed ? "Line-through" : "none" }}
          >
            {x.title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todolist;
