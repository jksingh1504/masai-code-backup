import React from "react";
import { Link, useNavigate } from "react-router-dom";
import PuppyPage from "../Pages/PuppyPage";
import styles from "./stylesheets/PuppyBreedCard.module.css";

const PuppyBreed = ({ BreedName }) => {

    const navigate=useNavigate()

    const handleClick=()=>{
        localStorage.setItem("breed",JSON.stringify(BreedName))
        navigate("/puppy")
    }

    
	// console.log(BreedName)
	return <div onClick={handleClick} style={{cursor:"pointer"}} id={styles.PuppyBreedCard}>{BreedName}</div>;
};

export default PuppyBreed;
