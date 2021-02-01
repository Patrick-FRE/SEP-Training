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
