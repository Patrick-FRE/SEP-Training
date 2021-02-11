export interface ITodo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

export interface ITodos {
    todos: ITodo[];
}

export interface IContext {
    todos: ITodo[],
    handleOnSubmit: (e: React.FormEvent, text: string) => void,
    fetchTodos: () => void,
    deleteTodo: (id: number) => void,
    toggleTodo: (id: number) => void
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