import {
  SEARCH_ALBUM,
  FETCH_ALBUM,
} from '../actions/types';

const initialState = {
  text: '',
  albums: [],
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SEARCH_ALBUM:
      return {
        ...state,
        text: action.payload,
        loading: false
      };
    case FETCH_ALBUM:
      return {
        ...state,
        albums: action.payload,
        loading: false
      };
   
    
    default:
      return state;
  }
}
