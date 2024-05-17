import * as actionTypes from "./actionType";
import axios from "axios"

export const bookRequest = () => {
	return { type: actionTypes.Get_books_request };
};

export const bookSuccess = (payload) => {
	return { type: actionTypes.Get_books_Success, payload };
};

export const bookFailure = () => {
	return { type: actionTypes.Get_books_failure };
};

export const getData = (payload)=>(dispatch) => {
	axios.get("http://localhost:8080/books",payload)
		.then((r) => dispatch(bookSuccess(r.data)))
};
