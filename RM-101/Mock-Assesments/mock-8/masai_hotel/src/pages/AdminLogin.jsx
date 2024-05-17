import React from "react";
import { useRef } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import "../stylesheets/adminLogin.css";

const AdminLogin = () => {

    const formData=useRef({})
    const navigate=useNavigate()


	const handleSubmit = async (event) => {
		event.preventDefault();
		const form = await event.target.elements;
		// console.log(form[0])

		for (let i = 0; i < form.length - 1; i++) {
			const name = form[i].name;
			const value = form[i].value;
			formData.current[name] = value;
		}

        // console.log(formData.current)

        if(formData.current.email.trim()!="admin@gmail.com" || formData.current.password.trim()!="masai"){
            alert("invalid credentials")
        }
        else{
            alert("login successful")
            navigate("/admin")
        }
	};

	return (
		<>
			<div id="userReg">
				<h1>Login Here</h1>
				<br />
				<br />
				<div id="form">
					<form onSubmit={handleSubmit}>
						
						<h3 style={{ textAlign: "left" }}>Email</h3>
						<input
							name="email"
							type="text"
							placeholder="Please enter Your Registered Email"
						/>

						<br />
						<h3 style={{ textAlign: "left" }}>Password</h3>
						<input
							name="password"
							type="text"
							placeholder="Please enter your password"
							required
						/>

						<br />
						<br />
						<br />
						<input type="submit" value="submit" />
					</form>
				</div>
			</div>
		</>
	);
};

export default AdminLogin;
