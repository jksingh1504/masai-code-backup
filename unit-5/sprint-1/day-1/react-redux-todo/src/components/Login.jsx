import React from "react";
import { useDispatch } from "react-redux";
import * as action from "../Redux/action"

const Login = () => {

    const dispatch=useDispatch()


	return (
		<div>
			<h1>Login</h1>
			<input type="text" placeholder="enter your email" />
			<br />
			<br />
			<input type="password" placeholder="enter your password" />
			<br />
			<br />
			<button onClick={() => {dispatch(action.loginf())}}>Login</button>
		</div>
	);
};

export default Login;
