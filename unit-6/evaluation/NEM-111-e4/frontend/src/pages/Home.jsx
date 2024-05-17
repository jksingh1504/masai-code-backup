import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
	return (
		<>
            <br /><br /><br /><br /><br />
			<div style={{ display: "flex", justifyContent: "center" }}>
				<Link to="/todos"><button style={{ fontSize: "100px" }}>Launch Todo app</button></Link>
			</div>
		</>
	);
};

export default Home;
