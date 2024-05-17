import React from "react";
import Booklist from "../components/Booklist";
import Filter from "../components/Filter"

const Books = () => {
	return (
		<div className="books">
			<Filter/>
			<Booklist/>
		</div>
	);
};

export default Books;
