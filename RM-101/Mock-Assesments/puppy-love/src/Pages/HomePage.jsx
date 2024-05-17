import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import PuppyBreed from "../Components/PuppyBreed";
import styles from "./stylesheets/HomePage.module.css";

const HomePage = () => {
	const [List, setList] = useState([]);

	// console.log(List);

	useEffect(() => {
		fetch("https://dog.ceo/api/breeds/list/all")
			.then((r) => r.json())
			.then((data) => {
				let list = [];
				for (let key in data.message) {
					list.push(key);
				}
				setList(list);
			})
			.catch((err) => console.log(err));
	}, [setList]);

	return (
		<div id={styles.HomePage}>
			<Navbar />
			<br />
			<br />
			<br />
			<br />

			<h1
				style={{
					background: "white",
					display: "flex",
					width: "fit-content",
					padding: "10px 0px",
				}}
			>
				Puppy Breed List :
			</h1>
			<div id={styles.PuppyBreedList}>
				{List.map((ele,indx) => (
					<PuppyBreed key={indx} BreedName={ele}/>
				))}
			</div>
		</div>
	);
};

export default HomePage;
