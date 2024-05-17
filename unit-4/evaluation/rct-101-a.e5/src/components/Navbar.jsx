import React from "react";
import { Link } from "react-router-dom";
import "../stylesheets/navbar.css";
import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import TotalProduct from "./TotalProduct";

const Navbar = () => {
	const { totalProduct } = useContext(DataContext);

	return (
		<div id="navbar">
			<div>
				<div>
					<Link to="/">Home</Link>
				</div>
				<div>
					<Link to="/login">Login</Link>
				</div>
			</div>
			<Link to="/cart">
				<div>
					{totalProduct != 0 ? <TotalProduct /> : null}
					<span className="material-icons">shopping_cart</span>
				</div>
			</Link>
		</div>
	);
};

export default Navbar;
