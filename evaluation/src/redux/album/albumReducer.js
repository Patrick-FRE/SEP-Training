import {
  FETCH_ALBUM_REQUEST,
  FETCH_ALBUM_SUCCESS,
  FETCH_ALBUM_FAILURE
} from './albumTypes'

const initialState = {
  loading: false,
  album: [],
  error: ''
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALBUM_REQUEST:
      return {
        ...state,
        loading: true
      }
    case FETCH_ALBUM_SUCCESS:
      return {
        loading: false,
        album: action.payload,
        error: ''
      }
    case FETCH_ALBUM_FAILURE:
      return {
        loading: false,
        album: [],
        error: action.payload
      }
    default: return state
  }
}

export default reducer
