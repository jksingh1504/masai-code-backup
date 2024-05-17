import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import "../stylesheets/adminLogin.css"

const UserReg = () => {

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

        localStorage.setItem("userCred",JSON.stringify(formData.current))

        alert("registration successful")

        navigate("/userLogin")
	};


  return (
    <>
			<div id="userReg">
				<h1>Register Here</h1>
				<br />
				<br />
				<div id="form">
					<form onSubmit={handleSubmit}>
						<h3 style={{ textAlign: "left" }}>Username</h3>
						<input required name="username" type="text" placeholder='please enter username'/>

						<br />
						<h3 style={{ textAlign: "left" }}>
							Email
						</h3>
						<input required name="email" type="text" placeholder='please enter your email'/>

						<br />
						<h3 style={{ textAlign: "left" }}>Password</h3>
						<input required name="password" type="text" placeholder='please enter password'/>


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

export default UserReg