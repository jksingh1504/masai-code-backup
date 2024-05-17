import * as actionTypes from "./actionType";

const initialState = {
	isAuth: false,
    token:"",
	isLoading: false,
	isError: false,
};

export const reducer = (state = initialState, action) => {
	const { type, payload } = action;

	switch (type) {
		case actionTypes.Login_request:
			return {
				...state,
				isLoading: true,
				isError: false,
			};
		case actionTypes.Login_success:
			return {
				...state,
				isLoading: false,
				isError: false,
                isAuth:true,
				token: payload,
			};
		case actionTypes.Login_failure:
			return {
				...state,
				isLoading: false,
				isError: true,
			};
		default:
			return state;
	}
};
