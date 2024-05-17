import axios from "axios";
import * as actionTypes from "./actionTypes";

function getRecipeReq() {
  return { type: actionTypes.RECIPE_REQUEST_PENDING };
}
function getRecipeSuccess(bookList) {
  return { type: actionTypes.RECIPE_REQUEST_SUCCESS, payload: bookList };
}
function getRecipeError() {
  return { type: actionTypes.RECIPE_REQUEST_FAILURE };
}

export const getRecipe = (params) => async (dispatch) => {
  // Write logic here
  try {
    console.log(params,"from action");
    dispatch(getRecipeReq());
    const { data: recipe } = await axios.get(
      `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/recipe`,
      params
    );
    dispatch(getRecipeSuccess(recipe));
  } catch (error) {
    dispatch(getRecipeError());
  }
};
