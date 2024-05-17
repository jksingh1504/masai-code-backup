import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as action from "../Redux/action";
import { useParams, useNavigate } from "react-router-dom";

export const TodoDetails = () => {
	const dispatch = useDispatch();
	const { id } = useParams();
	const todo = useSelector((store) => store.todo);
	const navigate = useNavigate();

	useEffect(() => {
		fetch(`http://localhost:8080/todo/${id}`)
			.then((r) => r.json())
			.then((data) => dispatch(action.setTodo(data)));
	}, []);

	return (
		<div>
			<h1>Task : {todo.task}</h1>
			<p
				style={
					todo.complete
						? { backgroundColor: "green" }
						: { backgroundColor: "red" }
				}
			>
				<b>completion status : </b> {todo.complete ? "completed" : "pending"}
			</p>
			<p>
				<b>Details : </b> {todo.details}
			</p>
			<br />
			<button onClick={() => navigate("/")}>Return to home</button>
            <button onClick={() => navigate(`/todo/${id}/edit`)}>Go to todo edit page</button>
		</div>
	);
};
