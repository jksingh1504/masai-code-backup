import * as actionTypes from "./actionTypes";

const initialState = {
	shoes: [],
	isLoading: false,
	isError: false,
};

export const reducer = (state = initialState, action) => {
	const { type, payload } = action;
	switch (type) {
		case actionTypes.GET_SHOES_REQUEST:
			return { ...state, isLoading: true };
		case actionTypes.GET_SHOES_SUCCESS:
			return { ...state, shoes: [...payload] };
		case actionTypes.GET_SHOES_FAILURE:
			return { ...state, isLoading: false, isError: true };
		case actionTypes.UPDATE_SHOE_COUNT_REQUEST:
			return { ...state, isLoading: true };
		case actionTypes.UPDATE_SHOE_COUNT_SUCCESS:
			return { ...state, isLoading: false };
	}

	return state;
};
