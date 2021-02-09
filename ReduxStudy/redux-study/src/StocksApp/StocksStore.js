import React, { createContext, useState, useContext, useReducer } from "react";

const StocksContext = React.createContext(null);

//reducer;
const stockReducer = (state = { stocks: 0 }, action) => {
  // console.log(action.payload);
  let newState;
  switch (action.type) {
    case "input":
      newState = { ...state, stocks: state.stocks + action.payload };
      break;
    case "incre":
      newState = { ...state, stocks: state.stocks + 1 };
      break;
    case "decre":
      newState = { ...state, stocks: state.stocks - 1 };
      break;
    default:
      newState = state;
      break;
  }
  console.log(newState);
  return newState;
};

export const StocksProvider = ({ children }) => {
  // const [stocks, setStocks] = useState(10);
  const [state, dispatch] = useReducer(stockReducer, { stocks: 0 });

  return (
    <StocksContext.Provider value={[state, dispatch]}>
      {children}
    </StocksContext.Provider>
  );
};

//custom hook
export const useStock = () => {
  const [state, dispatch] = useContext(StocksContext);
  //   console.log(stocks);
  return [state, dispatch];
  //the custom hook is using the same state created inside the StocksProvider
};
