import { UPDATE_NAME } from "./artistNameTypes";

export const updateName = (e) => (dispatch) => {
  dispatch({
    type: UPDATE_NAME,
    payload: e.target.value,
  });
};
