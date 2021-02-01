import { Action, ActionType } from './GlobalContext'

export const GlobalReducer: React.Reducer<ITodos, Action> = (state, action) => {
    switch (action.type) {
        case ActionType.GET:
            return {
                todos: action.payload
            };

        case ActionType.ADD:
            return {
                todos: [action.payload, ...state.todos]
            };
        
        case ActionType.DELETE:
            return {
                todos: state.todos.filter((todo: ITodo) => todo.id !== action.payload)
            };

        case ActionType.TOGGLE:
            return {
                todos: state.todos.map((todo: ITodo) => {
                    if (todo.id === action.payload) {
                      return {
                        ...todo,
                        completed: !todo.completed,
                      };
                    }
                    return todo;
                })
            }

        case ActionType.ERROR:
            return {
                ...state,
                error: action.payload,
            };
    
        default:
            return state;
    }
}