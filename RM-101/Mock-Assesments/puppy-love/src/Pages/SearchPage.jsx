import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import navbarcss from "../Components/stylesheets/Navbar.module.css"

const SearchPage = () => {

  const [value,setvalue]=useState("")
  const navigate=useNavigate()

  const handleClick=()=>{
    localStorage.setItem("breed",JSON.stringify(value))
    navigate("/puppy")

  }

	return (
		<>
			<div id={navbarcss.Navbar}>
				<Link to="/">
					<div>
						<img
							src="https://designlooter.com/images/puppy-svg-9.png"
							alt="logo"
						/>
						<h2>Puppy Love</h2>
					</div>
				</Link>
				
        
					<div style={{marginRight:"150px"}}>
						<input type="text" placeholder="Enter a breed name" value={value} onChange={(e)=>setvalue(e.target.value)}/>
						<span onClick={handleClick} className="material-icons">search</span>
					</div>
			</div>
		</>
	);
};

export default SearchPage;
