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
    case actionTypes.LOGIN_REQUEST:
      return { ...state, isLoading: true, isError: false };
    case actionTypes.LOGIN_SUCCESS:
      return { ...state, isLoading: false, isAuth: true, token: payload.token };
    case actionTypes.LOGIN_FAILURE:
      return { ...state, isLoading: false, isError: true };
    default:
      return state;
  }
};