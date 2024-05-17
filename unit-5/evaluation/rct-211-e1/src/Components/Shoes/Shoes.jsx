import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	getShoesFailure,
	getShoesRequest,
	getShoesSuccess,
} from "../../Redux/action";
import ShoeCard from "./ShoeCard/ShoeCard";
import "./shoes.css"

const Shoes = () => {
	const dispatch = useDispatch();
	const shoes  = useSelector((store) => store.shoes);

	useEffect(() => {
		fetch("http://localhost:8080/shoes")
			.then((r) => {
				dispatch(getShoesRequest());
				return r.json();
			})
			.then((data) => dispatch(getShoesSuccess(data)))
			.catch((err) => dispatch(getShoesFailure()));
	}, []);

	return (
		<div className="main">{/* Map through the shoes list here */ shoes.map((ele) => <ShoeCard key={ele.id} ele={ele}/>)}</div>
	);
};

export default Shoes;
