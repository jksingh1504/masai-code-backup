import axios from "axios";
import * as actionTypes from "./actionTypes";

function getBooksReq() {
  return { type: actionTypes.get_books_req };
}
function getBooksSuccess(bookList) {
  return { type: actionTypes.get_books_success, payload: bookList };
}
function getBooksError() {
  return { type: actionTypes.get_books_error };
}

export const getBooks = (params) => async (dispatch) => {
  // Write logic here
  try {
    console.log(params)
    dispatch(getBooksReq());
    const { data: bookList } = await axios.get(
      `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/books`,
      params
    );
    dispatch(getBooksSuccess(bookList));
  } catch (error) {
    dispatch(getBooksError());
  }
};

export const editBook = (editDetails, id) => async (dispatch) => {
  // Write logic here
  await axios.patch(
    `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/books/${id}`,
    editDetails
  );
  dispatch(getBooks());
};

if (window.Cypress) {
  window.getBooks = getBooks;
  window.editBook = editBook;
}
