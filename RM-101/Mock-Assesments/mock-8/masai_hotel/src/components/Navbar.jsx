import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../stylesheets/navbar.css"

const Navbar = () => {

    const userType=localStorage.getItem("userType") || ""
    const navigate=useNavigate()

    const handle_logout=()=>{
        localStorage.setItem("userType","")
        localStorage.setItem("userCred","")
        navigate("/")
    }

    const gotoHome=()=>{
        navigate("/")
    }

	return (
		<div id="navbar">
		
            <div style={{cursor:"pointer"}} onClick={gotoHome}>
				<img
					src="https://notion-emojis.s3-us-west-2.amazonaws.com/prod/svg-twitter/1f3e9.svg"
					alt="masai_hotel"
				/>
				<h3>Masai Hotels</h3>
			</div>

			<div>
				<div style={{color:"red",textDecoration:"undeline"}}>
					<Link href={userType==="user"?'/hotel':"/admin"}>{userType==="user"?'Hotel Page':"Admin Page"}</Link>
				</div>
				<div onClick={handle_logout} style={{fontWeight:"bold",cursor:"pointer"}}>
					Logout
				</div>
			</div>
		</div>
	);
};

export default Navbar;
