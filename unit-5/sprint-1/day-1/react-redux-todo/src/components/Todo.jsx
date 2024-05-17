import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import Todolist from "./Todolist";
import * as action from "../Redux/action";

const Todo = () => {
	const total = useSelector((store) => store.total);

	useEffect(() => {
		fetch("http://localhost:8080/todo")
			.then((r) => r.json())
			.then((data) => {
				dispatch(action.fetchTask(data));
				dispatch(action.setTotal(data.length));
			});
	}, []);

	const value = useSelector((store) => store.value);
	const dispatch = useDispatch();

	const postTodo = () => {
		if (value === "") {
			alert("enter a task to add tasks");
			return;
		}
		fetch("http://localhost:8080/todo", {
			method: "post",
			headers: { "content-type": "application/json" },
			body: JSON.stringify({ task: value, complete: false,"details": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius possimus, repellat unde quibusdam porro harum aspernatur enim dicta tenetur excepturi, natus omnis consequuntur impedit at. Architecto hic pariatur quasi officia." }),
		})
			.then((r) => r.json())
			.then((data) => {
				dispatch(action.addTask([data]));
				dispatch(action.setValue(""));
				dispatch(action.setTotal(total + 1));
			});
	};

	return (
		<div>
			<h1>Todo</h1>
			<input
				value={value}
				type="text"
				placeholder="enter any task"
				onChange={(e) => {
					dispatch(action.setValue(e.target.value));
				}}
			/>
			<button onClick={postTodo}>Add task</button>
			<br />
			<br />
			<Todolist />
		</div>
	);
};

export default Todo;
