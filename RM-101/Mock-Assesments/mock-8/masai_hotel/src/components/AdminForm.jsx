import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import "../stylesheets/adminLogin.css";
import * as action from "../redux/actions"
import { useEffect } from "react";

const AdminForm = () => {

    useEffect(()=>{
        dispatch(action.getHotels())
    },[])


	const formData = useRef({});
    const dispatch=useDispatch()

	const handleSubmit = (event) => {
		event.preventDefault();
		const form = event.target.elements;
		// console.log(form[0])

		for (let i = 0; i < form.length - 1; i++) {
			const name = form[i].name;
			const value = form[i].value;
			formData.current[name] = value;
		}

		formData.current.booked = false;

        dispatch(action.postHotels(formData.current))
		
	};

	return (
		<>
			<br />
			<br />
			<br />
			<div id="userReg">
				<h1>Post Room Ad. Here</h1>
				<br />
				<br />
				<div id="form">
					<form onSubmit={handleSubmit}>
						<h3 style={{ textAlign: "left" }}>Select category</h3>
						<select required name="category">
							<option value="">Please Select category of room</option>
							<option value="Family">Family</option>
							<option value="Deluxe">Deluxe</option>
							<option value="Suite">Suite</option>
						</select>

						<br />
						<h3 style={{ textAlign: "left" }}>Image URL</h3>
						<input
							name="image_url"
							type="text"
							placeholder="Please enter image URL"
							required
						/>

						<br />
						<h3 style={{ textAlign: "left" }}>Type of Room</h3>
						<label htmlFor="type_of_room">
							AC
							<input
								style={{ marginLeft: "10px" }}
								value="AC"
								type="radio"
								name="type_of_room"
							/>
						</label>
						<label style={{ marginLeft: "100px" }} htmlFor="type_of_room">
							Non AC
							<input
								style={{ marginLeft: "10px" }}
								value="non AC"
								type="radio"
								name="type_of_room"
							/>
						</label>

						<br />
						<h3 style={{ textAlign: "left" }}>Bed Type</h3>
						<select required name="bed_type">
							<option value="">Please select bed type</option>
							<option value="single">Single Bed</option>
							<option value="double">Double Bed</option>
						</select>
						<br />
						<h3 style={{ textAlign: "left" }}>Number of Adults</h3>
						<select required name="no_of_persons">
							<option value="">Please select max number of adults</option>
							<option value={1}>1</option>
							<option value={2}>2</option>
							<option value={3}>3</option>
							<option value={4}>4</option>
						</select>

						<br />
						<h3 style={{ textAlign: "left" }}>Max Capacity</h3>
						<select required name="capacity">
							<option value="">Please select max capacity</option>
							<option value={1}>1</option>
							<option value={2}>2</option>
							<option value={3}>3</option>
							<option value={4}>4</option>
							<option value={5}>5</option>
						</select>

						<br />
						<h3 style={{ textAlign: "left" }}>Cost/night</h3>
						<input
							name="cost"
							type="number"
							placeholder="Please enter cost/night"
							required
						/>

						<br />
						<br />
						<br />
						<input type="submit" value="submit" />
					</form>
				</div>
			</div>
		</>
	);
};

export default AdminForm;
