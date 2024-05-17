import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import "../stylesheets/hotelCard.css";
import * as action from "../redux/actions";
import HotelCard from "../components/HotelCard";

const Hotel = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(action.getHotels());
	}, []);

	const hotels = useSelector((store) => store.hotels);

	return (
		<>
			<Navbar />
            <br /><br /><br /><br /><br />
			<div id="container">
				{hotels.map((ele, indx) => (
					<HotelCard ele={ele} key={indx}/>
				))}
			</div>
		</>
	);
};

export default Hotel;
