import * as actionType from "./actionType";

export const setCart=(payload)=>{
	return {type:actionType.set_cart,payload}
}

export const setToken=(payload)=>{
	return {type:actionType.set_token,payload}
}

export const updateCart=(payload)=>{
	return {type:actionType.update_cart,payload}
}

export const deleteCartItem=(payload)=>{
	return {type:actionType.delete_cart_item,payload}
}