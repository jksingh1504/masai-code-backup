import React, { useRef } from "react";
import { useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";

const TodoEdit = () => {
	const todo = useSelector((store) => store.todo);
	const details = useRef("");
	const { id } = useParams();
	const navigate = useNavigate();

	const editTodo = () => {
		if (details.current == "") {
			alert("dtails field can not be empty");
			return;
		}
		fetch(`http://localhost:8080/todo/${id}`, {
			method: "PATCH",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				details: details.current
			}),
		})
			.then((r) => r.json())
			.then((data) => navigate(`/todo/${id}`));
	};

	return (
		<div>
			<h1>Task : {todo.task}</h1>
			<input
				type="text"
				placeholder="enter details to be added to this todo"
				onChange={(e) => (details.current = e.target.value)}
			/>
			<button onClick={editTodo}>add todo details</button>
		</div>
	);
};

export default TodoEdit;
