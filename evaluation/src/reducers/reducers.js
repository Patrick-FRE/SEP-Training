const INITIAL_STATE = {
   albums: [] ,
   input :'' 
  };

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'INPUT_CHANGE': {
      state = { ...state, 
        input: action.payload }
      return state
  }
    case "FETCH_ALBUMS": {
      return {
        ...state,
        albums: action.payload,
      };
    } 
    default:
      return state;
  }
}