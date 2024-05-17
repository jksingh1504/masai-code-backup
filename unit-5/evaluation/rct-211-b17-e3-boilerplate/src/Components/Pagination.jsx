import { useEffect } from "react";
import { useRef, useState } from "react";
import PageCell from "./PageCell";
import "./pagination.css";

export const Pagination = ({ total, selected, onPageChange }) => {
	const pages = useRef(new Array(total).fill(1));
	const reference = useRef([]);
	const [curntRef, setcurntRef] = useState();
	useEffect(() => {
		setcurntRef(selected - 1);
	}, []);

	if (reference.current[curntRef]) {
		reference.current[curntRef].style.border = "2px solid blue";
		reference.current[curntRef].style.opacity = 1;
	}

	const forward = () => {
		if (curntRef < total - 1) {
			// console.log("hello")
			setcurntRef(curntRef + 1);
			reference.current[curntRef].style.border = "1px solid black";
			// reference.current[curntRef].style.opacity=0.4;
			reference.current[curntRef + 1].style.border = "2px solid blue";
			reference.current[curntRef + 1].style.opacity = 1;
			// console.log(reference.current[curntRef+1])
		}
	};

	const back = () => {
		if (curntRef > 0) {
			// console.log("hello")
			setcurntRef(curntRef - 1);
			reference.current[curntRef].style.border = "1px solid black";
			// reference.current[curntRef].style.opacity=0.4;
			reference.current[curntRef - 1].style.border = "2px solid blue";
			reference.current[curntRef - 1].style.opacity = 1;
			// console.log(reference.current[curntRef-1])
		}
	};

	return (
		<div className="pageContainer">
			<button style={{ width: "35px" }} onClick={back} disabled={curntRef < 1}>
				{"<"}
			</button>
			{pages.current.map((ele, indx) => (
				<PageCell
					key={indx}
					indx={indx}
					ref={(element) => {
						reference.current[indx] = element;
						// console.log(reference.current)
					}}
					reference={reference}
					curntRef={curntRef}
				/>
			))}{" "}
			<button
				style={{ marginLeft: "10px", width: "35px" }}
				onClick={forward}
				disabled={total < curntRef + 2}
			>
				{">"}
			</button>
		</div>
	);
};
