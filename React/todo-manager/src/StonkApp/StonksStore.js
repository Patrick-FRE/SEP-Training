import React, { createContext, useState, useContext, useReducer } from 'react';

// let o = { name: 'Patrick' };

// function foo(obj) {
//   obj = { name: 'change' }; // invalid
//   o = { name: 'change' }; // valid with closure
// }

// function foo2(obj) {
//   obj.name = 'change'; // valid with property change
// }

// foo2(o);
// console.log(o);

// reducer
const stonkReducer = (state = { stonks: 0 }, action) => {
  let newState;
  switch (action.type) {
    case 'incre':
      newState = { ...state, stonks: state.stonks + 1 };
      break;
    case 'decre':
      newState = { ...state, stonks: state.stonks - 1 };
      break;
    default:
      newState = state;
      break;
  }
  return newState;
};

const StonkContext = createContext(null);
export const StonksProvider = ({ children }) => {
  const [state, dispatch] = useReducer(stonkReducer, { stonks: 0 });

  return (
    <StonkContext.Provider value={[state, dispatch]}>
      {children}
    </StonkContext.Provider>
  );
};
export const useStonk = () => {
  const [state, dispatch] = useContext(StonkContext);
  return [state, dispatch];
};
