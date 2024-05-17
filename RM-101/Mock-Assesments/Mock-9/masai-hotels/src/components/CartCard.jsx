import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import * as action from "../redux/actions"

const CartCard = ({ ele }) => {
  const [count, setCount] = useState(ele.count);
  const dispatch=useDispatch()

  const increase = (ele) => {
    ele.count = count + 1;
    setCount(count + 1);
    dispatch(action.updateCart(ele))
  };

  const decrease = (ele) => {
    if (ele.count === 1) {
        ele.count=0
        dispatch(action.deleteCartItem(ele))
      return;
    }

    ele.count = count - 1;
    setCount(count - 1);
    dispatch(action.updateCart(ele))

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
      <button onClick={(e) => decrease(ele)} style={{ fontSize: "20px" }}>
        -
      </button>
      <span
        style={{ display: "inline-block", textAlign: "center", width: "30px" }}
      >
        {count}
      </span>
      <button onClick={(e) => increase(ele)} style={{ fontSize: "20px" }}>
        +
      </button>

    </div>
  );
};

export default CartCard;
