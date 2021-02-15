import { FETCH_ALBUMS_SUCCESS } from "./albumListTypes";

const initialState = {
  data: [],
};

export const albumListReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALBUMS_SUCCESS:
      return {
        data: action.payload,
      };

    default:
      return state;
  }
};
