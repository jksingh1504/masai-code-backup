import React from "react";
import { useSelector } from "react-redux";
import CartCard from "../components/CartCard";
import Navbar from "../components/Navbar";
import RestaurentCard from "../components/RestaurentCard";
import "../stylesheets/restaurents.css";

const Cart = () => {
  const cart = useSelector((store) => store.cart);
  return (
    <>
      <Navbar />
      <br />
      <br />
      <br />
      <br />
      <br />
      <h1 style={{ width: "88%", margin: "auto" }}>
        Your cart : ({cart.length} items)
      </h1>
      <br /><br />
      <div style={{width:"90%",margin:"auto"}} id="list">
        {cart.map((ele) => (
          <CartCard key={ele.id} ele={ele} />
        ))}
      </div>
    </>
  );
};

export default Cart;
