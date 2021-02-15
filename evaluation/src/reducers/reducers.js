
const INIT_STATE = { keyword: 'ken', albums: [] }

export default function reducer(state = INIT_STATE, action) {
    switch (action.type) {
        case 'KEYWORD': {

            // console.log(state, 'in reducer');
            state = { ...state, keyword: action.payload }
            return state
        }
        case 'ALBUMS': {
            console.log('in reducer album',state);
            return {
                ...state,
                albums: action.payload
            }
        }

        default:
            return state;
    }




}