import React from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { DataContext } from "../context/DataContext";

const CartItem = ({ele,indx,Count}) => {

    const [count,setCount]=React.useState(Count)
    const {islogged}=useContext(DataContext)
    const navigate=useNavigate()

    const Authentication =()=>{
        if(islogged){
            return;
        }
        navigate("/login")
    }

	const increase = (ele)=>{

		ele.count=count+1

		fetch(`http://localhost:8080/cart/${ele.id}`,{
			method:"PUT",
			headers:{"content-type":"application/json"},
			body:JSON.stringify(ele)
		}).then(r=>r.json()).then(data=>setCount(count + 1))
	}


	const decrease=()=>{
        ele.count=count-1

		fetch(`http://localhost:8080/cart/${ele.id}`,{
			method:"PUT",
			headers:{"content-type":"application/json"},
			body:JSON.stringify(ele)
		}).then(r=>r.json()).then(data=>setCount(count - 1))
	}

	return (
		<div key={indx}>
			<h3>{ele.name}</h3>
			<img src={ele.img_1} alt="" />
			<p>$ {ele.price}</p>
			<div
				style={{
					display: "flex",
					justifyContent: "space-around",
					paddingBottom: "20px",
				}}
			>
				<button
					onClick={() => {
						Authentication();
						decrease(ele, count);
					}}
					style={{ width: "40px", height: "40px", fontSize: "30px" }}
				>
					{" "}
					-{" "}
				</button>
				<span>{count}</span>
				<button
					onClick={() => {
						Authentication();
						increase(ele, count);
					}}
					style={{ width: "40px", height: "40px", fontSize: "30px" }}
				>
					{" "}
					+{" "}
				</button>
			</div>
		</div>
	);
};

export default CartItem;
