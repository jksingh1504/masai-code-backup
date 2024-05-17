import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Bookcard = ({ ele }) => {
	const navigate = useNavigate();
	const isAuth = useSelector((store) => store.Authreducer.isAuth);

	return (
		<div
			style={{
				border: "2px solid black",
				borderRadius: "5px",
				padding: "10px",
			}}
			onClick={() => {
        navigate(`/books/${ele.id}`);
        if(!isAuth)
        navigate("/login")
			}}
		>
			<img src={ele.cover_photo} alt="" style={{ width: "100%" }} />
			<b>Name : </b>
			<span>{ele.book_name}</span>
			<br />
			<br />
			<b>Category : </b>
			<span>{ele.category}</span>
			<br />
			<br />
			<b>Release year : </b>
			<span>{ele.release_year}</span>
		</div>
	);
};

export default Bookcard;
