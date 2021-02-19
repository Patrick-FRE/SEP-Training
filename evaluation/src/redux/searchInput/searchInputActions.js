import { UPDATE_INPUT } from "./searchInputTypes";

export const updateInput = (value) => (dispatch) => {
  dispatch({
    type: UPDATE_INPUT,
    payload: value,
  });
};
