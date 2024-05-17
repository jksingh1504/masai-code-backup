import * as actionTypes from "./actionTypes";

const initialState = {
	data: {
		isAuth: false,
		token: "",
	},
	isLoading: false,
	isError: false,
};

export const reducer = (state = initialState, action) => {
	const { type, payload } = action;

	switch (type) {
		case actionTypes.LOGIN_REQUEST:
			return {
				...state,
				isLoading: true,
				isError: false,
			};

		case actionTypes.LOGIN_SUCCESS:
			return {
				...state,
				isError: false,
				isLoading: false,
				data: { isAuth: true, token: payload },
			};

		case actionTypes.LOGIN_FAILURE:
			return {
				...state,
				isLoading: false,
				isError: true,
			};

		default:
			return state;
	}
};
