import * as actionTypes from "./actionTypes";
export const initAuthState = {
  isLoading: false,
  isError: false,
  isAuth: false,
  token: "",
};

export const reducer = (state = initAuthState, action) => {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.login_req:
      return { ...state, isLoading: true, isError: false };
    case actionTypes.login_success:
      return { ...state, isLoading: false, isAuth: true, token: payload.token };
    case actionTypes.login_error:
      return { ...state, isLoading: false, isError: true };
    default:
      return state;
  }
};
