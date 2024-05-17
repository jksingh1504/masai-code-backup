import React from "react";
import {useSelector} from "react-redux"

const Navbar = () => {

  const isAuth=useSelector(store=>store.Authreducer.data.isAuth)


  return (
    <div style={{display:"flex",justifyContent:"space-between",padding:"10px"}}>
      <div data-cy="navbar-home-link">
        <img
          src="/Adidas_Logo.png"
          width="60px"
          alt="logo"
          style={{ display: "block" }}
        />
      </div>

      <div>
        {/* Link button to /login page, if the user is not authenticated, else don't show it*/}
        {isAuth?null:<button data-cy="navbar-login-button">LOGIN</button>}
      </div>
    </div>
  );
};

export default Navbar;
