import React from "react";
import { useContext } from "react";
import { DataContext } from "../context/DataContext";

const Products = () => {
	const [Products, setProducts] = React.useState([]);
    const {totalProduct,setTotalProduct}=useContext(DataContext)


	React.useEffect(() => {
		fetch("http://localhost:8080/Products")
			.then((r) => r.json())
			.then((data) => setProducts(data));
	}, []);

    const addToCart=(ele,indx)=>{
        if(ele.id==0)
        ele.id=1000
        // ele.id++;
        ele.count=1
        // console.log(
        // ele.count=1;
        fetch(`http://localhost:8080/cart`,{
            method:"Post",
            headers:{"content-type":"application/json"},
            body:JSON.stringify(ele)
        }).then(r=>r.json()).then(data=>{setTotalProduct(totalProduct+1)})
        // ele.id--
    }

	return (
        <div id="products">
        {Products.map((ele,indx)=>{
            return (
                <div key={indx}>
                    <h3>{ele.name}</h3>
                    <img src={ele.img_1} alt="" />
                    <p>$ {ele.price}</p>
                    <button onClick={()=>{addToCart(ele,indx)}}>Add</button>
                </div>
            )
        })}
        </div>
    )
};

export default Products;
