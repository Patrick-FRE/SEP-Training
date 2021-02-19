import {
  FETCH_ALBUMS_FAILURE,
  FETCH_ALBUMS_REQUEST,
  FETCH_ALBUMS_SUCCESS,
} from "./albumListTypes";

const initialState = {
  isLoading: false,
  data: [],
  error: "",
};

export const albumListReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALBUMS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_ALBUMS_SUCCESS:
      return {
        isLoading: false,
        data: action.payload,
        error: "",
      };
    case FETCH_ALBUMS_FAILURE:
      return {
        isLoading: false,
        data: [],
        error: action.payload,
      };

    default:
      return state;
  }
};
