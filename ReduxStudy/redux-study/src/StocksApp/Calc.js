import React, { useState } from "react";
import { useStock } from "./StocksStore";
import "./Calc.css";

export default function Calc() {
  const [state, dispatch] = useStock();
  const [input, setInput] = useState(0);

  // const handleChange = (event) => {
  //   inputValue = parseInt(event.target.value);
  // };

  return (
    <div>
      <form
        onSubmit={function (event) {
          event.preventDefault();
          console.log(input);
          dispatch({ type: "input", payload: input });
        }}
      >
        <input
          onChange={function (event) {
            const value = parseInt(event.target.value);
            console.log(value);
            setInput(value);
          }}
          type="text"
          placeholder="how many stocks do you have?"
        ></input>
      </form>
      <p>{state.stocks}</p>
    </div>
  );
}
