import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import * as action from "../Redux/AppReducer/action";


const Filter = () => {
	// DO NOT CHANGE THE ORDER of the category filters: ie. Sneakers, Loafers, Canvas, Boots
	//in the UI
  const [searchparam, setSearchparam] = useSearchParams();
  const urlCategory=searchparam.getAll("category")

	const dispatch = useDispatch();
	const [category, setCategory] = useState(urlCategory||[]);
	

	const handleChange = (e) => {
		const option = e.target.value;
		let newCategory = [...category];
		if (newCategory.includes(option)) {
			newCategory.splice(newCategory.indexOf(option), 1);
		} else {
			newCategory.push(option);
		}
		setCategory(newCategory);
	};

	useEffect(() => {
		if (category) {
			setSearchparam({category});
      dispatch(action.getData({params:{category}}))
		}
	}, [category,dispatch, setSearchparam]);

	

	return (
		<div>
			<h3>Filters</h3>
			<div>Category</div>
			<div data-cy="filter-category">
				<div>
					<input type="checkbox" value="Sneakers" onChange={handleChange} defaultChecked={category.includes("Sneakers")} />
					<label>Sneakers</label>
				</div>
				<div>
					<input type="checkbox" value="Loafers" onChange={handleChange} defaultChecked={category.includes("Loafers")}  />
					<label>Loafers</label>
				</div>
				<div>
					<input type="checkbox" value="Canvas" onChange={handleChange} defaultChecked={category.includes("Canvas")}  />
					<label>Canvas</label>
				</div>
				<div>
					<input type="checkbox" value="Boots" onChange={handleChange}  defaultChecked={category.includes("Boots")} />
					<label>Boots</label>
				</div>
			</div>
		</div>
	);
};

export default Filter;
