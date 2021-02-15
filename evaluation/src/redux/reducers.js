const INIT_STATE = { albums: [] ,input :'' };

export default function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case "FETCH_ALBUMS": {
      return {
        ...state,
        albums: action.payload,
      };
    }
    case 'INPUT_CHANGE': {
        state = { ...state, input: action.payload }
        return state
    }
    default:
      return state;
  }
}
