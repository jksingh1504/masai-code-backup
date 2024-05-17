import * as actionType from "./actionType";
import axios from "axios";

const setHotels = (payload) => {
	return { type: actionType.get_hotel_success, payload };
};

export const setInitHotel = (payload) => {
	return { type: actionType.set_init_hotel, payload };
};

export const getHotelsFailure = () => {
	return { type: actionType.get_hotel_failure };
};

export const getHotels = (payload) => (dispatch) => {
	axios.get("https://jkmock-8.herokuapp.com/hotels").then((res) => {
		// console.log(res.data);
		dispatch(setInitHotel(res.data));
	});
};

export const postHotels = (payload) => (dispatch) => {
	axios
		.post("https://jkmock-8.herokuapp.com/hotels", payload)
		.then((r) => dispatch(setHotels(r.data)))
		.catch((e) => dispatch(getHotelsFailure()));
};

export const deleteHotels = (payload) => (dispatch) => {
    axios.delete(`https://jkmock-8.herokuapp.com/hotels/${payload.id}`).then(res=>{
        dispatch(getHotels())
    })
};
