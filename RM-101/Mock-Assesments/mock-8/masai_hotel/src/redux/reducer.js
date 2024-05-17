import * as actionType from "./actionType";

const initialState = {
	hotels: [],
};

export const reducer = (state = initialState, action) => {
	const { payload, type } = action;
	// console.log(payload);

	switch (type) {
		case actionType.get_hotel_success:
			return {
				...state,
				hotels: [...state.hotels, payload],
			};

		case actionType.set_init_hotel:
			return {
				...state,
				hotels: payload,
			};

		case actionType.get_hotel_failure:
			return state;
		default:
			return state;
	}
};
