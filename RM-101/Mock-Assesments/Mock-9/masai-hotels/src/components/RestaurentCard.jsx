import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "../stylesheets/card.css";
import * as action from "../redux/actions";

const RestaurentCard = ({ ele, removebutton }) => {
  const dispatch = useDispatch();
  const cart = useSelector((store) => store.cart);

  const addToCart = (ele) => {
    if (cart.includes(ele)) {
      alert("item already exists");
      return;
    }
    ele.count = 1;
    dispatch(action.setCart(ele));
    alert("item added to cart");
  };

  return (
    <div className="card">
      <img src={ele.image} alt="restaurent" />
      <h3 style={{ display: "flex", alignItems: "center", gap: "40px" }}>
        {ele.name + " "}{" "}
        <span style={{ display: "flex", alignItems: "center" }}>
          (Rating : {ele.rating}
          <span style={{ color: "gold" }} className="material-icons">
            star
          </span>
          )
        </span>
      </h3>
      <p>
        Restaurent Type : <span style={{ color: "red" }}>{ele.type}</span>
      </p>
      <p>
        Total Reviews :{" "}
        <span style={{ color: "blue" }}>{ele.number_of_votes}</span> votes
      </p>
      <h4>
        Meals starting at just :{" "}
        <span style={{ color: "rgb(0, 215, 0)" }}>
          $ {ele.price_starts_from}
        </span>
      </h4>
      <button
        onClick={(e) => addToCart(ele)}
        style={{
          border: "none",
          backgroundColor: "blueviolet",
          color: "white",
          padding: "10px 20px 11px",
          borderRadius: "8px",
        }}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default RestaurentCard;
