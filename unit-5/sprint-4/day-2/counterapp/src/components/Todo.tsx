import React, { useState } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

const Todo = () => {

    const [Todo,setTodo]:[[],React.Dispatch<React.SetStateAction<[]>>]=useState([])


	return (
		<>
			<h1>Todo App</h1>
            <TodoInput/>
            <TodoList/>
		</>
	);
};

export default Todo;
