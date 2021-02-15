import { UPDATE_NAME } from "./artistNameTypes";

const initialState = {
  artistName: "",
};

export const artistNameReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NAME:
      return {
        artistName: action.payload,
      };

    default:
      return state;
  }
};
