//Create ActionCreator functions here
import * as actionTypes from "./actionTypes";
import axios from "axios";

export const getShoesRequest = () => {
	return { type: actionTypes.GET_SHOES_DATA_REQUEST };
};

export const getShoesSuccess = (payload) => {
	return { type: actionTypes.GET_SHOES_DATA_SUCCESS, payload };
};

export const getShoesFailure = () => {
	return { type: actionTypes.GET_SHOES_DATA_FAILURE };
};

export const getData =(params)=> (dispatch) => {
	axios
		.get("/shoes",params)
		.then((r) => dispatch(getShoesSuccess(r.data)))
		.catch((e) => dispatch(getShoesFailure()));
};


