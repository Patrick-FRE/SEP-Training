const initState={artist: '', data: {results: []}, input: ''}

export const rootReducer = (state = initState, action) => {
    if (action.type === 'FETCH_DATA'){
        return{
            ...state,
            data: action.payload.data
        };
    }

    if(action.type=== 'USER_INPUT') {
        return {
            ...state,
            artist: action.payload.data
        }
    }

    if(action.type==="UPDATE_INPUT") {
        return {
            ...state,
            input: action.payload.data
        }
    }

    return state; 
};