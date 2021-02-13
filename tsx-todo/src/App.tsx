import React, { BaseSyntheticEvent, SyntheticEvent, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Todolist from "./components/Todolist";

export interface Todo {
  title: string;
  completed: boolean;
}

const initTodo: Todo[] = [
  { title: "aaa", completed: true },
  { title: "bbb", completed: false },
];
/* type */
export type handleClick = (e: SyntheticEvent) => void;
type addTodo = () => void;
/*  */
const App: React.FC = () => {
  const [list, setList] = useState(initTodo);
  const [Keyword, setKeyword] = useState("init");

  const handleSubmit = (e: BaseSyntheticEvent) => {
    e.preventDefault();
    addTodo();
    setKeyword("");
  };

  const handleKeyword = (e: BaseSyntheticEvent) => {
    setKeyword(e.target.value);

    // console.log(e.target.value);
  };

  const addTodo = (): void => {
    let newlist = list.concat({ title: Keyword, completed: false });
    setList(newlist);
  };

  const handleClick = (e: any) => {
    console.log(e.target.id);
    let newlist = list.map((x) => {
      if (x.title == e.target.id) {
        return { ...x, completed: !x.completed };
      } else {
        return { ...x };
      }
    });
    setList(newlist);
  };

  return (
    <div className="App">
      <Todolist handleClick={handleClick} list={list} />
      <form onSubmit={(e) => handleSubmit(e)}>
        <input value={Keyword} onChange={(e) => handleKeyword(e)}></input>
        <button>Add Todo</button>
      </form>
    </div>
  );
};

export default App;
