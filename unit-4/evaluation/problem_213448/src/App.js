import React, { useState } from "react";
import ButtonComponent from "./components/ButtonComponent";
import "./styles.css";
import axios from "axios";
import CityRow from "./components/CityRow";

export default function App() {
	const [data, setData] = useState([]);
	const [page, setPage] = useState(1);
	const Total = React.useRef(0);
	const [order, setOrder] = useState("ASC");
	const buffer = React.useRef(true);

	React.useEffect(() => {
		axios
			.get(
				`https://json-server-mocker-masai.herokuapp.com/cities?_sort=population&_order=${order}&_page=${page}&_limit=10`
			)
			.then((r) => {
				buffer.current = false;
				Total.current = r.headers["x-total-count"];
				// order.current = "ASC"
				// if(order=="ASC")
				// setData([...r.data.sort((a,b)=>a.population-b.population)]);
				// else{
				// 	setData([...r.data.sort((a,b)=>b.population-a.population)]);
				// }
				console.log(r)
				setData([...r.data])
				buffer.current = true;
			});
	}, [page, order]);

	return (
		<div className="App">
			{buffer.current ? (
				<div id="loading-container"></div>
			) : (
				<table>
					<tr>
						<th>ID</th>
						<th>CITY NAME</th>
						<th>COUNTRY NAME</th>
						<th>POPULATION</th>
					</tr>
					{
						/* 
            create rows for countries
			
          */
						data.map((ele) => (
							<CityRow ele={ele} />
						))
					}
				</table>
			)}

			<div>
				<ButtonComponent
					onClick={() => {
						if (order == "ASC") {
							setOrder("DESC");
						} else {
							setOrder("ASC");
						}
					}}
					id="SORT_BUTTON"
					title={
						order == "ASC"
							? `Sort by Descending Population`
							: "Sort by Ascending Population"
					}
				/>
				<ButtonComponent
					disabled={page <= 1}
					page={page}
					onClick={() => {setPage(page - 1)}}
					title="PREV"
					id="PREV"
				/>
				<ButtonComponent
					disabled={Total.current <= page * 10}
					page={page}
					onClick={() => {setPage(page + 1)}}
					id="NEXT"
					title="NEXT"
					Total={Total}
				/>
			</div>
		</div>
	);
}
