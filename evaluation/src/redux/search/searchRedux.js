// Action Types
const UPDATE_SEARCH = "updateSearch";

export const actionTypes = {
  UPDATE_SEARCH,
};

const updateSearch = (searchText) => {
  console.log('updatesearch', searchText)
  return {
    type: actionTypes.UPDATE_SEARCH,
    searchText,
    
  };
};

export const actionCreater = {
  updateSearch,
};

export default function searchReducer(state = { searchText: null }, action) {
  switch (action.type) {
    case actionTypes.UPDATE_SEARCH:
      return { searchText: action.searchText };
    default:
      return state;
  }
}


//export const store = createStore(flowReducer);