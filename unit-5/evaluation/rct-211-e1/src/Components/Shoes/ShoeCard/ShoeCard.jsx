import React from "react";
import { useDispatch } from "react-redux";
import * as actions from "../../../Redux/action";

const ShoeCard = ({ ele }) => {
	const dispatch = useDispatch();

	const updateCount = (x) => {
		ele.cart_quantity+=x;
		fetch(`http://localhost:8080/shoes/${ele.id}`, {
			method: "PUT",
			headers: { "content-type": "application/json" },
			body: JSON.stringify(ele),
		}).then((r) => {
      dispatch(actions.updateShoeCountRequest())
			return r.json();
		}).then(data=>{dispatch(actions.updateShoeCountSuccess(data))}).catch(err=>dispatch(actions.updateShoeCountFailure(err)));
	};

	const shoeId = null;
	return (
		<div data-cy={`shoe-card-wrapper-${shoeId}`}>
			<img data-cy="shoe-card-image" src={ele.image} alt="shoe" />
			<div>
				<div data-cy="shoe-name">{ele.name}</div>
				<div>
					In Cart:
					<div data-cy="shoe-count">{ele.cart_quantity}</div>
					<button data-cy="increment-shoe-count-button" onClick={() => {updateCount(1)}}>
						+
					</button>
					<button data-cy="decrement-shoe-count-button" onClick={()=>{updateCount(-1)}}>-</button>
				</div>
			</div>
		</div>
	);
};

export default ShoeCard;
