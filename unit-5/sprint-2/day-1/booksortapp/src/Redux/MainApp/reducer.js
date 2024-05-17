import * as actionTypes from "./actionType";

const initialState = {
	books: [],
	isLoading: false,
	isError: false,
};

export const reducer = (state = initialState, action) => {
	const { type, payload } = action;

	switch (type) {
		case actionTypes.Get_books_request:
			return {
				...state,
				isLoading: true,
				isError: false,
			};
		case actionTypes.Get_books_Success:
			return {
				...state,
				isLoading: false,
				isError: false,
				books: payload,
			};
		case actionTypes.Get_books_failure:
			return {
				...state,
				isLoading: false,
				isError: true,
			};
		default:
			return state;
	}
};
