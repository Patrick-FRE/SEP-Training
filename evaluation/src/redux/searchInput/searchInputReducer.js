import { UPDATE_INPUT } from "./searchInputTypes";

const initialState = {
  searchInput: "",
};

export const searchInputReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_INPUT:
      return {
        searchInput: action.payload,
      };

    default:
      return state;
  }
};
