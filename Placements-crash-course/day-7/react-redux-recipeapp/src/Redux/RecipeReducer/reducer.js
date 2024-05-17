import * as actionTypes from "./actionTypes";
export const initBookState = { isLoading: false, isError: false, recipe: [] };

export const reducer = (state = initBookState, action) => {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.RECIPE_REQUEST_PENDING:
      return { ...state, isLoading: true, isError: false };
    case actionTypes.RECIPE_REQUEST_SUCCESS:
      return { ...state, isLoading: false, isError:false, recipe: payload };
    case actionTypes.RECIPE_REQUEST_FAILURE:
      return { ...state, isLoading: false, isError: true };
    default:
      return state;
  }
};
