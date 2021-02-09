import React from "react";
import { useStock } from "./StocksStore";

export default function Buy() {
  const [state, dispatch] = useStock();

  return (
    <div>
      <h2>Buy</h2>
      <p>
        How many Stocks would you like to buy?{" "}
        <button onClick={() => dispatch({ type: "decre" })}>Sub - </button>{" "}
        {state.stocks}{" "}
        <button onClick={() => dispatch({ type: "incre" })}>Sub + </button>
      </p>
    </div>
  );
}
