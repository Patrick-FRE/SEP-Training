import { createStore } from 'redux';
// const { createStore } = require('redux');

// Action Types
const INCREMENTED = 'counter/incremented';
const DECREMENTED = 'counter/decremented';
const actionTypes = {
  INCREMENTED,
  DECREMENTED,
};

// Action Creator
const incremented = () => {
  return {
    type: actionTypes.INCREMENTED,
  };
};
export const actionCreater = {
  incremented,
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

export const store = myCreateStore(counterReducer);
store.subscribe(() => {
  console.log(store.getState());
});

// store.subscribe(() => console.log('Hello'));

// store.dispatch({ type: 'counter/incremented' });
// // {value: 1}
// store.dispatch({ type: 'counter/incremented' });
// // {value: 2}
// store.dispatch({ type: 'counter/decremented' });
// // {value: 1}

// ======================= My Redux ========================

function myCreateStore(reducerFn) {
  let state = reducerFn(undefined, { type: '__INIT__' });

  let listeners = [];

  function subscribe(callbackFn) {
    console.log('subscribe');
    listeners.push(callbackFn);
    return function () {
      listeners.splice(listeners.indexOf(callbackFn), 1); // remove callgn in the listner
    };
  }
  function getState() {
    return state;
  }
  function dispatch(action) {
    state = reducerFn(state, action);
    listeners.forEach((listenerFn) => {
      listenerFn();
    });
  }

  return {
    subscribe,
    getState,
    dispatch,
  };
}

// =================  MY redux TEST =====================
// action types:
// const ADD_TODOS = 'ADD_TODOS';
// const REMOVE_TODO = 'REMOVE_TODO';

// const actionTypes = {
//   ADD_TODOS,
//   REMOVE_TODO,
// };
// // action Creator:
// const addTodos = () => {
//   return {
//     type: actionTypes.ADD_TODOS,
//   };
// };

// const removeTodo = () => {
//   return {
//     type: actionTypes.REMOVE_TODO,
//   };
// };
// const actionCreater = {
//   addTodos,
//   removeTodo,
// };
// // reducer
// function todosReducer(
//   state = {
//     todos: [
//       { userId: 1, id: 1, title: 'first todo', completed: false },
//       { userId: 1, id: 2, title: 'second todo', completed: false },
//       { userId: 1, id: 3, title: 'third todo', completed: false },
//     ],
//   },
//   action
// ) {
//   switch (action.type) {
//     case ADD_TODOS:
//       // state.todos.push({ userId: 1, id: 4, title: 'fourth todo', completed: false });
//       // return state;
//       return {
//         ...state,
//         todos: [
//           ...state.todos,
//           { userId: 1, id: 4, title: 'fourth todo', completed: false },
//         ],
//       };
//     default:
//       return state;
//   }
// }
// // store
// let store = myCreateStore(todosReducer);

// store.subscribe(() => console.log(store.getState()));

// store.dispatch({ type: ADD_TODOS });
// console.log(store.getState());
