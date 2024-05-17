import React from "react";
import {useDispatch,useSelector} from "react-redux";
import { useNavigate } from "react-router-dom";
import * as action from "../Redux/AuthReducer/action"

const Login =() => {

  const dispatch=useDispatch();
  const navigate=useNavigate();



  const login=()=>{
      dispatch(action.loginSuccess("successful"));
      navigate(`/`)
  }


  return (
    <div>
      <h2>LOGIN</h2>
      <form>
        <div>
          <label>User Email</label>
          <br />
          <input data-cy="login-email" />
        </div>
        <div>
          <label>User Password</label>
          <br />
          <input data-cy="login-password" />
        </div>
        <button type="submit" data-cy="login-submit" onClick={login}>
          Loading
        </button>
      </form>
    </div>
  );
};

export default Login;
