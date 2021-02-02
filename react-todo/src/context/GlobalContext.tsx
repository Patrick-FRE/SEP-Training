import React, { createContext, useCallback, useReducer } from "react";
import { GlobalReducer } from "./GlobalReducer";

interface Props {
  children: React.ReactNode;
}

export enum ActionType {
  GET = "GET_TODO",
  ADD = "ADD_TODO",
  DELETE = "DELETE_TODO",
  TOGGLE = "TOGGLE_TODO",
  ERROR = "TODO_ERROR",
}

export type Action =
  | {
      type: ActionType.GET;
      payload: ITodo[];
    }
  | {
      type: ActionType.ADD;
      payload: ITodo;
    }
  | {
      type: ActionType.DELETE;
      payload: number;
    }
  | {
      type: ActionType.TOGGLE;
      payload: number;
    }
  | {
      type: ActionType.ERROR;
      payload: string;
    };

const initialState: ITodos = {
  todos: [],
};

export const GlobalContext = createContext({});

export function GlobalProvider({ children }: Props) {
  const [state, dispatch] = useReducer<React.Reducer<ITodos, Action>>(
    GlobalReducer,
    initialState
  );

  const fetchTodos = useCallback(async () => {
    try {
      const url = "https://jsonplaceholder.typicode.com/todos/?_limit=10";
      const res = await fetch(url);
      const data = await res.json();

      dispatch({
        type: ActionType.GET,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ActionType.ERROR,
        payload: error.response.data.error,
      });
    }
  }, []);

  const handleOnSubmit = async (e: React.FormEvent, text: string) => {
    e.preventDefault();

    try {
      const newTodo: ITodo = {
        userId: 1,
        id: state.todos[state.todos.length - 1].id + 1,
        title: text,
        completed: false,
      };

      dispatch({
        type: ActionType.ADD,
        payload: newTodo,
      });
    } catch (error) {
      dispatch({
        type: ActionType.ERROR,
        payload: error.response.data.error,
      });
    }
  };

  const deleteTodo = (id: number) => {
    try {
      dispatch({
        type: ActionType.DELETE,
        payload: id,
      });
    } catch (error) {
      dispatch({
        type: ActionType.ERROR,
        payload: error.response.data.error,
      });
    }
  };

  const toggleTodo = (id: number) => {
    try {
      dispatch({
        type: ActionType.TOGGLE,
        payload: id,
      });
    } catch (error) {
      dispatch({
        type: ActionType.ERROR,
        payload: error.response.data.error,
      });
    }
  };

  return (
    <GlobalContext.Provider
      value={{
        todos: state.todos,
        fetchTodos,
        handleOnSubmit,
        deleteTodo,
        toggleTodo,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
