import * as actionTypes from "./actionTypes";
export const initBookState = { isLoading: false, isError: false, books: [] };

export const reducer = (state = initBookState, action) => {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.get_books_req:
      return { ...state, isLoading: true, isError: false };
    case actionTypes.get_books_success:
      return { ...state, isLoading: false, isError:false, books: payload };
    case actionTypes.get_books_error:
      return { ...state, isLoading: false, isError: true };
    default:
      return state;
  }
};
