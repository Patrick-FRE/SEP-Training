import { createStore } from "redux";

//Action Types
const INCREMENTED = "counter/incremented";
const DECREMENTED = "conter/decremented";
const actionTypes = {
  INCREMENTED,
  DECREMENTED,
};

const incremented = () => {
  return {
    type: actionTypes.INCREMENTED,
  };
};

const decremented = () => {
  return {
    type: actionTypes.DECREMENTED,
  };
};

export const actionCreator = {
  incremented,
  decremented,
};

function counterReducer(state = { value: 0 }, action) {
  switch (action.type) {
    case actionTypes.INCREMENTED:
      return { value: state.value + 1 };
    case actionTypes.DECREMENTED:
      return { value: state.value - 1 };
    default:
      return state;
  }
}
export const store = createStore(counterReducer);
store.subscribe(() => {
  console.log(store.getState());
});
