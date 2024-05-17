import React from "react";
import { Link } from "react-router-dom";
import Styles from "./stylesheets/Navbar.module.css";

const Navbar = () => {
	return (
		<div id={Styles.Navbar}>
			<Link to="/">
				<div>
					<img
						src="https://designlooter.com/images/puppy-svg-9.png"
						alt="logo"
					/>
					<h2>Puppy Love</h2>
				</div>
			</Link>
			<Link to="/search">
				<div>
					<h3>search</h3>
					<span className="material-icons">search</span>
				</div>
			</Link>

		</div>
	);
};

export default Navbar;
