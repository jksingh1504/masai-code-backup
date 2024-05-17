import React from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { DataContext } from "../context/DataContext";
import "../stylesheets/navbar.css";
import CartItem from "./CartItem";
import Navbar from "./Navbar";

const Cart = () => {
	const [cart, setCart] = React.useState([]);
    const {totalProduct,setTotalProduct,islogged,setIslogged}=useContext(DataContext)
    
	

	React.useEffect(() => {
		fetch("http://localhost:8080/cart")
			.then((r) => r.json())
			.then((data) => {
				// for (let i = 0; i < data.lenght; i++) {
				// 	let img = data[i].img_1;
				// 	data.filter((ele) => {
				// 		return img != ele.img_1;
				// 	});
				// }
				setCart([...data]);
                setTotalProduct(data.length)
			});
	}, []);

    


	return (
		<>
			<Navbar />
			<br />
			<br />
			<div id="products">
				{cart.map((ele, indx) => {
					return (
						<CartItem key={indx} ele={ele} indx={indx} Count={ele.count}/>
					);
				})}
			</div>
		</>
	);
};

export default Cart;
