import {
  SEARCH_ALBUM,
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
        text: action.payload.text,
        albums:action.payload.albums
      };
    
    default:
      return state;
  }
}
