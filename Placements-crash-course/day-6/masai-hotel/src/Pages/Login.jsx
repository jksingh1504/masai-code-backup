import { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import { Link, useNavigate } from "react-router-dom";

export const Login = () => {
  const { authState, loginUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [formdata, setFormData] = useState({
    email: "",
    password: "",
  });
  async function handleLoginSubmit(evnet) {
    evnet.preventDefault();
    let userList = await fetch(
      `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/users`,
      { method: "GET" }
    );
    userList = await userList.json();
    console.log(userList);
    //check for correct user credentials
    for (const user of userList) {
      if (
        user.email === formdata.email &&
        user.password === formdata.password
      ) {
        console.log(user);
        loginUser(user.token);
        navigate("/dashboard");
        return;
      }
    }
    alert("invalid user credentials.");
  }
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormData({
      ...formdata,
      [name]: value,
    });
  }
  return (
    <div>
      <form data-cy="login-form" onSubmit={handleLoginSubmit}>
        <div>
          <label>
            {" "}
            Email
            <input
              data-cy="login-email"
              type="email"
              placeholder="Enter Email"
              name="email"
              value={formdata.email}
              onChange={handleInputChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            {" "}
            Password
            <input
              data-cy="login-password"
              type="password"
              placeholder="Enter Password"
              name="password"
              value={formdata.password}
              onChange={handleInputChange}
              required
            />
          </label>
        </div>
        <div>
          <input type="submit" value="SUBMIT" />
        </div>
      </form>
      <div className="go-back-link-div">
        {/* Add a Link tag here with textContent `Go Back` on clicking it we will be redirected to HomePage */}
        <Link to="/" >Go Back</Link>
      </div>
    </div>
  );
};
