import React from "react";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import "../stylesheets/navbar.css";
import * as action from "../redux/actions"

const Navbar = () => {
  const navigate = useNavigate();
  const token = useSelector((store) => store.token);
  const dispatch=useDispatch()


  const gotoHome = () => {
    navigate("/");
  };

  const activeTab = useRef({
    hotels: true,
    cart: false,
    order: false,
  });

  return (
    <>
      <div id="navbar">
        <div style={{ cursor: "pointer" }} onClick={gotoHome}>
          <img
            src="https://notion-emojis.s3-us-west-2.amazonaws.com/prod/svg-twitter/1f371.svg"
            alt="masai_hotel"
          />
          <h3>Masai Restaurents</h3>
        </div>

        <div>
          <div>
            <Link to={token ? "/restaurents" : "/"}>
              {token ? "Restaurents Page" : ""}
            </Link>
          </div>

          <div>
            <Link to={token ? "/cart" : "/"}>{token ? "Cart" : ""}</Link>
          </div>

          <div>
            <Link to={token ? "/order" : "/"}>{token ? "order" : ""}</Link>
          </div>

          <div onClick={()=>{
			if(token){
				localStorage.setItem('masaiHotelToken',"")
				dispatch(action.setToken(""))
				navigate("/")
			}else{
				navigate("/login")
			}
		  }} style={{ fontWeight: "bold", cursor: "pointer" }}>
            {token?"Logout":"Login"}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
