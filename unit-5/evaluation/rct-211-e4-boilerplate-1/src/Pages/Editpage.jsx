import { Box, Button, Heading, Input, Stack, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import * as action from "../Redux/action"

export const Editpage = () => {
	const { id } = useParams();
	const [city, setCity] = useState({});
	const cityValue = useRef(city.city || "");
	const population = useRef(city.population || 0);
  const navigate= useNavigate();
  const dispatch=useDispatch()

	useEffect(() => {
		fetch(`http://localhost:8080/countries/${id}`)
			.then((r) => r.json())
			.then((data) => {
				setCity(data);
				cityValue.current = data.city;
				population.current = data.population;
			});
	}, [id]);

	const update = (x) => {
		let updateCity = x;
    
		updateCity.city = cityValue.current;
		updateCity.population = population.current;
    // console.log(population.current)
    // console.log(updateCity)

		fetch(`http://localhost:8080/countries/${id}`, {
			method: "PUT",
			body: JSON.stringify(updateCity),
			headers: { "content-type": "application/json" },
		})
			.then((r) => {dispatch(action.updateRequest());return r.json()})
			.then((data) => navigate("/")).catch(err=>dispatch(action.updateFailure()));
	};

	return (
		<Box textAlign="center" w="50%" margin="auto">
			<Stack>
				<Heading>Edit Page</Heading>
				<Box>
					<Text>Capital City</Text>
					<Input
						data-cy="capital-city"
						onChange={(e) => {
							cityValue.current = e.target.value;
						}}
						defaultValue={city.city}
					/>
				</Box>
				<Box>
					<Text>Population</Text>
					<Input
						data-cy="population"
						onChange={(e) => {
							population.current = Number(e.target.value);
							// console.log(population)
						}}
						defaultValue={city.population}
					/>
				</Box>
				<Button
					data-cy="update-button"
					colorScheme="cyan"
					onClick={(e) => update(city)}
				>
					Update
				</Button>
			</Stack>
		</Box>
	);
};

export default Editpage;
