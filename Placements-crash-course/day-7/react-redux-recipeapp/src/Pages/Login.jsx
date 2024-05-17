import React from "react";
import { useState,useEffect } from "react";
import {useSelector,useDispatch} from "react-redux"
import {useNavigate} from "react-router-dom"
import {login} from "../Redux/AuthReducer/action"
import styled from "styled-components";

export const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const isAuth = useSelector((state) => state.authReducer.isAuth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }
  function handleSubmit(event) {
    event.preventDefault();
    console.log(formData);
    setFormData({
      email: "",
      password: "",
    });
    dispatch(login(formData));
  }
  // redirect user to previous page if successful login
  useEffect(() => {
    if (isAuth) {
      const prevUrl = sessionStorage.getItem('prevUrl');
      if (prevUrl) {
        // Remove the previous URL from sessionStorage
        sessionStorage.removeItem('prevUrl');
        navigate(prevUrl);
      } else {
        navigate("/");
      }
    }
  }, [isAuth, navigate]);
  return (
    <DIV>
      <form onSubmit={handleSubmit}>
        <h2>Log In</h2>
        <input
          onChange={handleChange}
          name="email"
          value={formData.email}
          data-testid="user-email"
          type="email"
          placeholder="Email"
          required
        />
        <input
          onChange={handleChange}
          data-testid="user-password"
          type="password"
          name="password"
          value={formData.password}
          placeholder="Password"
          required
        />
        <button type="submit" data-testid="user-login">
          Log In
        </button>
      </form>
    </DIV>
  );
};

const DIV = styled.div`
  width: 400px;
  padding: 20px;
  margin: 40px auto;
  display: flex;
  flex-direction: column;
  gap: 15px;
  border: 1px solid gray;
  align-items: center;

  input {
    width: 80%;
    height: 30px;
    font-size: larger;
  }

  button {
    width: 150px;
    height: 30px;
    font-size: large;
  }
`;
