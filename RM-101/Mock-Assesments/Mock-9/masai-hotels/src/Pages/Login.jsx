import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import "../stylesheets/Login.css";
import * as action from"../redux/actions"

const Login = () => {
  const formData = useRef({});
  const navigate = useNavigate();
  const dispatch=useDispatch()

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
    fetch("https://reqres.in/api/login", {
      method: "POST",
      body: JSON.stringify(formData.current),
      headers: { "content-type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          alert(data.error);
        }
		else if(data.token){
			localStorage.setItem("masaiHotelToken",data.token)
			dispatch(action.setToken(data.token))
			alert(`login successful token ${data.token}`)
			navigate("/restaurents")
		}
      });

    // else{
    //     alert("login successful")
    //     navigate("/restaurents")
    // }
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
  );
};

export default Login;
