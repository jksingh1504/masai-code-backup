import * as actionTypes from "./actionType";
import { loadData,uploadData } from "../utils/Localdata";

const initialState = {
	todolist: loadData("todo")||[],
	value: "",
	total: 0,
	completedCount: 0,
	todo:{}
};

export const reducer = (state = initialState, action) => {
	const { type, payload } = action;


	switch (type) {
		case actionTypes.Add_task:{
			return {...state,todolist:[...state.todolist,...payload]}
		}

		case actionTypes.login:
			uploadData("todo",state.todolist);
			console.log("hello");
			return state;

		case actionTypes.Fetch_task:
			return {...state,todolist:[...payload]}

		case actionTypes.Set_value:
			return { ...state, value: payload };

		case actionTypes.toggle_Complete:
			return { ...state, complete: payload };

		case actionTypes.Delete_task:
			return {
				...state,
				todolist: state.todolist.filter((ele) => {
					return ele.id != payload.id;
				}),
			};

		case actionTypes.set_Total:
			return { ...state, total: payload };

		case actionTypes.set_Completed_Count: 
			return { ...state, completedCount: payload };
		
		case actionTypes.set_Todo:
			return {...state,todo:payload}


		default:
			return state;
	}
};
