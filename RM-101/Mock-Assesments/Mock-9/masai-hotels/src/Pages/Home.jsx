import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const Home = () => {
   
    const navigate=useNavigate()


  return (
    <>
      <Navbar />
      <div style={{ width: "90%", margin: "auto" }}>
        <br />
        <br />
        <br />
        <br />
        <h1>please login first to see all the lists of hotels available</h1>
        <button
            onClick={()=>navigate("/login")}
          style={{
            border: "none",
            backgroundColor: "blueviolet",
            color: "white",
            padding: "10px 20px 11px",
            borderRadius: "8px",
          }}
        >
          Login
        </button>
      </div>
    </>
  );
};

export default Home;
