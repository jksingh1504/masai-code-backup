import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom';
import "../stylesheets/adminLogin.css";

const UserLogin = () => {

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
        const {email,password}=JSON.parse(localStorage.getItem("userCred"))

        if(formData.current.email.trim()!=email || formData.current.password.trim()!=password){
            alert("invalid credentials")
        }
        else{
            alert("login successful")
            navigate("/hotel")
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
                            required
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
  )
}

export default UserLogin