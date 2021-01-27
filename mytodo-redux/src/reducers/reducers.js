
const INIT_STATE = [{ id: 1, title: 'One' }]

export default function reducer(state = INIT_STATE, action) {
    switch (action.type) {
        case 'ADD_TODO': {

            state = [...state,
            {
                id: state.length + 1,
                title: action.payload
            }]
            console.log(state);
            return state
        }
        case 'DELETE_TODO': {
            return state = [...state.filter(todo => todo.id !== action.payload)]
        }

        default:
            return state;
    }




}