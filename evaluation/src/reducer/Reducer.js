import { actions } from "../actions/Actions";

const INIT_STATE = { userInput: "", albums: [], count: null, loading: false };

export default function iTunesReducer(state = INIT_STATE, action) {
  switch (action.type) {
    case actions.LOADING:
      return { ...state, loading: action.payload };
    case actions.USER_INPUT:
      return { ...state, userInput: action.payload };
    case actions.FETCH_ALBUMS:
      return {
        ...state,
        albums: action.payload.results,
        count: action.payload.resultCount,
      };
    default:
      return state;
  }
}
