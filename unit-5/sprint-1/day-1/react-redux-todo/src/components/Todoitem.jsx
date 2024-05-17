import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./todolist.css";
import * as action from "../Redux/action";
import {Link} from "react-router-dom"



const Todoitem = ({ ele }) => {
	const [complete, setComplete] = useState(ele.complete);
	const dispatch = useDispatch();
	const completedCount = useSelector((store) =>store.completedCount);
	const total=useSelector(store=>store.total)
	

	const deleteItem = (ele) => {
		dispatch(action.setTotal(total-1))

		fetch(`http://localhost:8080/todo/${ele.id}`, {
			method: "delete",
			// headers:{"content-type":"application/json"},
			// body:JSON.stringify(x)
		});
		dispatch(action.deleteTask(ele));
		
	};

	const handleComplete = (ele) => {
		setComplete(!complete);
		ele.complete = !complete;
		fetch(`http://localhost:8080/todo/${ele.id}`, {
			method: "put",
			headers: { "content-type": "application/json" },
			body: JSON.stringify(ele),
		})
			.then((r) => r.json())
			.then((data) => {
				if (data.complete == true)
					dispatch(action.setCompletedCount(completedCount + 1))
				else
				dispatch(action.setCompletedCount(completedCount-1))
			});
	};

	return (
		<div>
			<input
				checked={complete}
				type="checkbox"
				onChange={() => {
					handleComplete(ele);
				}}
			/>
			<Link style={{textDecoration:"none",color:"black"}} to={`/todo/${ele.id}`}><span className={complete ? "striked" : ""}> {ele.task} </span></Link>
			<button
				onClick={() => {
					deleteItem(ele);
				}}
			>
				delete
			</button>
		</div>
	);
};

export default Todoitem;
