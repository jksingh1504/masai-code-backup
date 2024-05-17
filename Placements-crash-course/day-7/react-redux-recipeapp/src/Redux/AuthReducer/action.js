import * as actionTypes from "./actionTypes";
import axios from "axios";

export const login = (loginCreds) => async (dispatch) => {
  // Complete login logic here
  try {
    dispatch(login_req());
    const res = await axios.post(`https://reqres.in/api/login`, loginCreds);
    dispatch(login_success(res.data));
  } catch (error) {
    dispatch(login_error());
  }
};
export const login_req = () => {
  return { type: actionTypes.LOGIN_REQUEST };
};
export const login_success = (tokenData) => {
  return { type: actionTypes.LOGIN_SUCCESS, payload: tokenData };
};
export const login_error = () => {
  return { type: actionTypes.LOGIN_FAILURE };
};
