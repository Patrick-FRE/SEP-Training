// import { createStore } from 'redux';
const { createStore } = require('redux');
/**
 * This is a reducer - a function that takes a current state value and an
 * action object describing "what happened", and returns a new state value.
 * A reducer's function signature is: (state, action) => newState
 *
 * The Redux state should contain only plain JS objects, arrays, and primitives.
 * The root state value is usually an object.  It's important that you should
 * not mutate the state object, but return a new object if the state changes.
 *
 * You can use any conditional logic you want in a reducer. In this example,
 * we use a switch statement, but it's not required.
 */

const initialState = {
  todos: [
    { userId: 1, id: 1, title: 'first todo', completed: false },
    { userId: 1, id: 2, title: 'second todo', completed: false },
    { userId: 1, id: 3, title: 'third todo', completed: false },
  ],
};
// action types:

const ADD_TODOS = 'ADD_TODOS';
const REMOVE_TODO = 'REMOVE_TODO';

const actionTypes = {
  ADD_TODOS,
  REMOVE_TODO,
};

// action Creator:
const addTodos = () => {
  return {
    type: actionTypes.ADD_TODOS,
  };
};

const removeTodo = () => {
  return {
    type: actionTypes.REMOVE_TODO,
  };
};

export const actionCreater = {
  addTodos,
  removeTodo,
};

function TodosReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODOS:
      // state.todos.push({ userId: 1, id: 4, title: 'fourth todo', completed: false });
      // return state;
      return {
        ...state,
        todos: [
          ...state.todos,
          { userId: 1, id: 4, title: 'fourth todo', completed: false },
        ],
      };
    default:
      return state;
  }
}

function counterReducer(state = { value: 0 }, action) {
  switch (action.type) {
    case 'counter/incremented':
      return { value: state.value + 1 };
    case 'counter/decremented':
      return { value: state.value - 1 };
    default:
      return state;
  }
}

// Create a Redux store holding the state of your app.
// Its API is { subscribe, dispatch, getState }.
let store = createStore(counterReducer);

export let myStore = myCreateStore(TodosReducer);

function myCreateStore(reducerFn) {
  let state = reducerFn(undefined, { type: '__INIT__' });

  let listeners = [];

  function subscribe(callbackFn) {
    listeners.push(callbackFn);
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

// You can use subscribe() to update the UI in response to state changes.
// Normally you'd use a view binding library (e.g. React Redux) rather than subscribe() directly.
// There may be additional use cases where it's helpful to subscribe as well.

// store.subscribe(() => console.log('Hello'));

// The only way to mutate the internal state is to dispatch an action.
// The actions can be serialized, logged or stored and later replayed.
// store.dispatch({ type: 'counter/incremented' });
// // {value: 1}
// store.dispatch({ type: 'counter/incremented' });
// // {value: 2}
// store.dispatch({ type: 'counter/decremented' });
// {value: 1}

store.subscribe(() => console.log(store.getState()));

store.dispatch({ type: ADD_TODOS });
// console.log(store.getState());
