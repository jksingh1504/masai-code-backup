import * as actionTypes from "./actionTypes";

const initialState = {
	shoes: [],
	isLoading: false,
	isError: false,
};

export const reducer = (state = initialState, action) => {
	const { type, payload } = action;

	switch (type) {
		case actionTypes.GET_SHOES_DATA_REQUEST:
			return {
				...state,
				isLoading: true,
				isError: false,
			};

		case actionTypes.GET_SHOES_DATA_SUCCESS:
			return {
				...state,
				isError: false,
				isLoading: false,
				shoes: payload,
			};

		case actionTypes.GET_SHOES_DATA_FAILURE:
			return {
				...state,
				isLoading: false,
				isError: true,
			};

		default:
			return state;
	}
};
