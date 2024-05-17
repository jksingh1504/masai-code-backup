import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as action from "../Redux/action";
import {useParams, useNavigate,Link} from "react-router-dom"

const Total = ({ x }) => {
	const dispatch = useDispatch();
	const completedCount = useSelector((store) => store.completedCount);
	const total = useSelector((store) => store.total);
	const navigate=useNavigate();
	// console.log(id)

	useEffect(() => {
		dispatch(action.setCompletedCount(x));
	}, [dispatch,action.setCompletedCount,x]);

	return (
		<div>
			<h3>Remaining tasks : {total - completedCount}</h3>
			<Link to="/login"><button style={{backgroundColor:"green"}} >Login</button></Link>
		</div>
	);
};

export default Total;
