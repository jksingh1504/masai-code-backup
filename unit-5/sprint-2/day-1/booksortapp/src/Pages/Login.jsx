import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as action from "../Redux/Auth/action";

const Login = () => {
	const dispatch = useDispatch();
  const isAuth=useSelector(store=>store.Authreducer.isAuth)
  const navigate=useNavigate()

  if(isAuth){
    navigate(-1);
    // console.log("hello")
    return null
  }


	const handleSubmit = (e) => {
		e.preventDefault();
		// console.log(e.target.password.value);

		fetch("https://reqres.in/api/login", {
			method: "POST",
			headers: { "content-type": "application/json" },
			body: JSON.stringify({
				email: e.target.email.value,
				password: e.target.password.value,
			}),
		})
			.then((r) => {
				dispatch(action.LoginRequest());
				return r.json();
			})
			.then((data) => {
        // console.log(data.token)
				if (data.token) dispatch(action.LoginSuccess(data.token));
			})
			.catch((err) => {
				dispatch(action.LoginFailure());
			});
	};

	return (
		<div style={{ textAlign: "center" }}>
			<h1>Login</h1>
			<form onSubmit={handleSubmit}>
				<input
					type="email"
					name="email"
					placeholder="enter your email"
					value="eve.holt@reqres.in"
					onChange={() => {
						return;
					}}
				/>
				<br />
				<br />
				<input type="password" name="password" placeholder="cityslicka" />
				<br />
				<br />
				<input type="submit" value="Login" />
			</form>
		</div>
	);
};


export default Login;
