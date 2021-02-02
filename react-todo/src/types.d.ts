interface ITodo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

interface ITodos {
    todos: ITodo[];
}

interface IContext {
    todos: ITodo[],
    handleOnSubmit: (e: React.FormEvent, text: string) => void,
    fetchTodos: () => void,
    deleteTodo: (id: number) => void,
    toggleTodo: (id: number) => void
}

// type Action = {
//       type: ActionType.GET;
//       payload: ITodo[];
//     }
//   | {
//       type: ActionType.ADD;
//       payload: ITodo;
//     }
//   | {
//       type: ActionType.DELETE;
//       payload: number;
//     }
//   | {
//       type: ActionType.TOGGLE;
//       payload: number;
//     }
//   | {
//       type: ActionType.ERROR;
//       payload: string;
// };