import * as actionType from "./actionType";

const initialState = {
  cart: [],
  token: localStorage.getItem("masaiHotelToken") || "",
};

export const reducer = (state = initialState, action) => {
  const { payload, type } = action;
  // console.log(state.cart)

  switch (type) {
    case actionType.set_token:
      return {
        ...state,
        token: payload,
      };

    case actionType.update_cart:
      state.cart = state.cart.map((ele) => {
        if (ele.id === payload.id) {
          return payload;
        } else return ele;
      });
	  console.log(state.cart)
      return {
        ...state,
      };


	case actionType.delete_cart_item:
		state.cart =state.cart.filter(ele=>{
			return ele.id!==payload.id
		})
		return{
			...state
		}

    case actionType.set_cart:
      return {
        ...state,
        cart: [...state.cart, payload],
      };

    default:
      return state;
  }
};
