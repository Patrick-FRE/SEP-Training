import { SEARCH_SONG, FETCH_SONGS, LOADING } from "../actions/types";

const initialState = {
  text: "",
  songs: [],
  loading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SEARCH_SONG:
      return {
        ...state,
        text: action.payload,
        loading: false,
      };
    case FETCH_SONGS:
      return {
        ...state,
        songs: action.payload,
        loading: false,
      };
    case LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
}
