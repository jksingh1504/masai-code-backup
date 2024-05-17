import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import "../index.css";
import Bookcard from "./Bookcard";
import * as action from "../Redux/MainApp/action"
import { useDispatch } from "react-redux";

const Booklist = () => {
	const books = useSelector((store) => store.reducer.books);
    const dispatch=useDispatch()

	useEffect(() => {
		dispatch(action.getData)
	}, []);

	return (
		<div className="booklist">
			{books.map((ele, indx) => {
				return <Bookcard key={indx} ele={ele} />;
			})}
		</div>
	);
};

export default Booklist;
