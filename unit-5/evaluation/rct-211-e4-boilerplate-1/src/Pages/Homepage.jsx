import {
	Box,
	Button,
	Flex,
	Radio,
	RadioGroup,
	Stack,
	Table,
	TableContainer,
	Tbody,
	Td,
	Text,
	Th,
	Thead,
	Tr,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import * as action from "../Redux/action";

const Homepage = () => {
	const countries = useSelector((store) => store.countries);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [sort, setSort] = useSearchParams({});
	const sortValue = sort.getAll("sortBy");
  console.log(sortValue)

	const [sortRender, setRender] = useState(sortValue || []);

	const edit = (ele) => {
		navigate(`/country/${ele.id}`);
	};

	const Delete = (ele) => {
		fetch(`http://localhost:8080/countries/${ele.id}`, { method: "DELETE" })
			.then((r) => {
				dispatch(action.deleteRequest());
				return r.json();
			})
			.then((data) => console.log(data))
			.catch((err) => dispatch(action.deleteFailure()));

		let newData = [...countries];
		// console.log(ele.id)
		newData.splice(newData.indexOf(ele), 1);
		// console.log(newData)

		dispatch(action.deleteSuccess(newData));
	};

	const handleSort = (e) => {
		const params = { sortBy: e.target.value };
		setSort(params);
		if (e.target.value === "asc") {
			let newData = [...countries];
			newData.sort((a, b) => a.population - b.population);
			dispatch(action.countrySuccess(newData));
		} else {
			let newData = [...countries];
			newData.sort((a, b) => b.population - a.population);
			dispatch(action.countrySuccess(newData));
		}
	};

	useEffect(() => {
    console.log(sortRender,"hello")
		if (sortRender[0] === undefined) {
			fetch(`http://localhost:8080/countries`)
				.then((r) => {
					dispatch(action.countyRequest());
					return r.json();
				})
				.then((data) => dispatch(action.countrySuccess(data)))
				.catch((err) => dispatch(action.countryFailure()));
		}
    else {
      fetch(`http://localhost:8080/countries/?_sort=population&_order=${sortRender[0]}`)
				.then((r) => {
					dispatch(action.countyRequest());
					return r.json();
				})
				.then((data) => dispatch(action.countrySuccess(data)))
				.catch((err) => dispatch(action.countryFailure()));
    }
	}, [dispatch,sortRender]);

	return (
		<Box>
			<br />
			<br />
			<Flex padding="0 1rem" mb="2rem">
				<Text fontWeight="700" paddingRight="1rem">
					Sort by country population
				</Text>
				<RadioGroup defaultValue={sortRender[0] || ""}>
					<Stack direction="row">
						<Radio
							data-cy="asc"
							value="asc"
							onChange={handleSort}
						>
							Ascending
						</Radio>
						<Radio
							data-cy="desc"
							value="desc"
							onChange={handleSort}
						>
							Descending
						</Radio>
					</Stack>
				</RadioGroup>
			</Flex>
			<TableContainer>
				<Table variant="simple">
					<Thead>
						<Tr>
							<Th>Country</Th>
							<Th>Capital</Th>
							<Th>Population</Th>
							<Th>Edit</Th>
							<Th>Delete</Th>
						</Tr>
					</Thead>
					<Tbody data-cy="table-body">
						{
							/* map through the fetched country list, to form table rows */
							countries.map((ele) => {
								return (
									<Tr key={ele.id}>
										<Td>{ele.country}</Td>
										<Td>{ele.city}</Td>
										<Td>{ele.population}</Td>
										<Td>
											<Button colorScheme="cyan" onClick={(e) => edit(ele)}>
												Edit
											</Button>
										</Td>
										<Td>
											<Button colorScheme="red" onClick={(e) => Delete(ele)}>
												Delete
											</Button>
										</Td>
									</Tr>
								);
							})
						}
					</Tbody>
				</Table>
			</TableContainer>
		</Box>
	);
};

export default Homepage;
