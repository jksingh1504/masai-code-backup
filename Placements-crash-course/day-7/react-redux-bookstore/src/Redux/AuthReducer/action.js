import * as actionTypes from "./actionTypes";
import axios from "axios";

export const login = (loginCreds) => async (dispatch) => {
  // Complete login logic here
  try {
    dispatch(login_req());
    const res = await axios.post(`https://reqres.in/api/login`, loginCreds);
    console.log(res.data, "hello data");
    dispatch(login_success(res.data));
  } catch (error) {
    dispatch(login_error());
  }
};
export const login_req = () => {
  return { type: actionTypes.login_req };
};
export const login_success = (tokenData) => {
  return { type: actionTypes.login_success, payload: tokenData };
};
export const login_error = () => {
  return { type: actionTypes.login_error };
};

// NOTE: Do not remove this code,its used for calculating your score, if removed it will give you zero marks
if (window.Cypress) {
  window.login = login;
}
