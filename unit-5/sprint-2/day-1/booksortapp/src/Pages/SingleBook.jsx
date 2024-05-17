import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const SingleBook = () => {
	const [book, setBook] = useState({});

	const { id } = useParams();

	useEffect(() => {
		fetch(`http://localhost:8080/books/${id}`)
			.then((r) => r.json())
			.then((data) => setBook(data));
	}, []);

	return <div style={{textAlign:'center',width:"30%",margin:"auto",borderRadius:"5px",border:"2px solid black"}}>
    <h1>Name</h1>
    <p>{book.book_name}</p>
    <img width="100%" src={book.cover_photo} alt="" />
    <h3>Category</h3><span>{book.category}</span>
    <h3>Release year</h3> <span>{book.release_year}</span>
  </div>;
};

export default SingleBook;
