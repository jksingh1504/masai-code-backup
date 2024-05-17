import React from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { DataContext } from "../context/DataContext";

const Login = () => {
	const { islogged, setIslogged } = useContext(DataContext);
  const navigate=useNavigate();
  const nav=()=>{
    navigate("/cart")
  }

	return (
		<div style={{ textAlign: "center" }}>
			<br />
			<br />
			<br />
			<h1>Login</h1>
			<input type="email" placeholder="enter email" />
			<br />
			<br />
			<input type="password" placeholder="enter password" />
			<br />
			<br />
			<button
				onClick={() => {
					setIslogged(!islogged);
          nav();
				}}
			>
				login
			</button>
		</div>
	);
};

export default Login;
