import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { getData } from "../Redux/MainApp/action";

const Filter = () => {
    const [searcParam, setSearcparam] = useSearchParams();
    const UrlCategory=searcParam.getAll("category")
	const UrlSort = searcParam.getAll("sort")
	const [sort,setSort]=useState(UrlSort[0]||"")
	const [category, setCategory] = useState(UrlCategory||[]);
    const dispatch=useDispatch()

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


	const handleSort=(e)=>{
		setSort(e.target.value)
	}

	useEffect(()=>{

		// console.log(sort)
		if(sort){
			const params={
				category,
				_sort:"release_year",
				_order:sort
			}
			setSearcparam({category,sort})
			dispatch(getData({params}))
		}



	},[sort,dispatch,setSearcparam,getData,searcParam])
	



	useEffect(() => {
		if (category) {
			setSearcparam({ category });
		}
        dispatch(getData({params:{category}}))
	}, [category, dispatch, getData,setSearcparam]);

	return (
		<div className="filter">
			<h3 style={{ textAlign: "center" }}>Filter</h3>
			<b>Sort By Category</b>
			<div style={{ padding: "0px 10px" }}>
				<div>
					<input
						type="checkbox"
						value="Novel"
						defaultChecked={category.includes("Novel")}
						onChange={handleChange}
					/>
					<label>Novel</label>
				</div>
				<div>
					<input
						type="checkbox"
						value="Science_Fiction"
						defaultChecked={category.includes("Science_Fiction")}
						onChange={handleChange}
					/>
					<label>Science-Fiction</label>
				</div>
				<div>
					<input
						type="checkbox"
						value="Thriller"
						defaultChecked={category.includes("Thriller")}
						onChange={handleChange}
					/>
					<label>Thriller</label>
				</div>
				<div>
					<input
						type="checkbox"
						value="Motivational"
						defaultChecked={category.includes("Motivational")}
						onChange={handleChange}
					/>
					<label>Motivation</label>
				</div>
			</div>

			<b>Sort By Year</b>
			<div style={{ padding: "0px 10px" }}>
				<div>
					<input type="radio" name="sort" value="asc" onChange={handleSort} defaultChecked={sort==="asc"}/>
					<label>Ascending</label>
				</div>
				<div>
					<input type="radio" name="sort" value="desc" onChange={handleSort} defaultChecked={sort==="desc"}/>
					<label>Decending</label>
				</div>
			</div>
		</div>
	);
};

export default Filter;
