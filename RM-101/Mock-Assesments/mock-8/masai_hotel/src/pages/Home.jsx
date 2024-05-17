import React from "react";
import { useNavigate } from "react-router-dom";
import "../stylesheets/Home.css";

const Home = () => {


    const navigate=useNavigate()

    const handleClick=(event)=>{
        // console.log(event.target.id || event.target.className)
        if(event.target.id=="user" || event.target.className=="user"){
            localStorage.setItem("userType","user")
            navigate("/userReg")
        }
        else {
            localStorage.setItem("userType","admin")
            navigate("/adminLogin")
        }
    }

	return (
		<>
			<br />
			<br />
			<h1 style={{ textAlign: "center", fontSize: "32px", fontWeight: "bold" }}>
				Welcome to Masai Hotels
			</h1>
			<br />
			<br />
			<div id="Masaiverse">
					<div onClick={handleClick} id="user">
						<img className="user"
							src="https://cdn.onlinewebfonts.com/svg/img_24787.png"
							alt="userdummy"
						/>
						<br />
						<br />
						<br />
						<h3 className="user" style={{ textAlign: "center" }}>New user..? Register here</h3>
					</div>


					<div onClick={handleClick} id="admin">
						<img className="admin"
							src="https://img.favpng.com/21/14/20/computer-icons-login-user-system-administrator-image-png-favpng-iNFT01rNqwKESE8gShbhXTYCv.jpg"
							alt="userdummy"
						/>
						<br />
						<br />
						<br />
						<h3 className="admin" style={{ textAlign: "center" }}>Admin..? Login here!</h3>
					</div>

			</div>
		</>
	);
};

export default Home;
