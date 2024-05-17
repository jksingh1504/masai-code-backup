import React, { useEffect, useState } from "react";
import PuppyCard from "../Components/PuppyCard";
import styles from "./stylesheets/PuppyList.module.css";

const PuppyPage = () => {
	const [List, setList] = useState([]);

	useEffect(() => {
		let param = JSON.parse(localStorage.getItem("breed"));

		fetch(`https://dog.ceo/api/breed/${param}/images`)
			.then((r) => r.json())
			.then((data) => setList(data.message));
	}, [setList]);

	return (
			<div id={styles.PuppyList}>
				{List.map((ele, indx) => (
					<PuppyCard key={indx} url={ele} />
				))}
			</div>
	);
};

export default PuppyPage;
