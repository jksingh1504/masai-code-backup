import React from "react";
import {
	Table,
	Thead,
	Tbody,
	Tfoot,
	Tr,
	Th,
	Td,
	TableCaption,
	TableContainer,
} from "@chakra-ui/react";
import * as action from "../redux/actions"
import { useDispatch, useSelector } from "react-redux";

const AdminTable = () => {
	const hotels = useSelector((store) => store.hotels) || [];
	const dispatch=useDispatch()
	// console.log(hotels)

	return (
		<>
			<br />
			<br />
			<br />
			<br />
			<TableContainer>
				<Table variant="striped" colorScheme="teal">
					{/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
					<Thead>
						<Tr>
							<Th>id</Th>
							<Th>category</Th>
							<Th>type of room</Th>
							<Th>bed type</Th>
							<Th>number of persons</Th>
							<Th>capacity</Th>
							<Th>cost</Th>
							<Th>status</Th>
							<Th>Edit</Th>
							<Th>Delete</Th>
						</Tr>
					</Thead>
					<Tbody>
						{hotels.map((ele, indx) => {
							return (
								<Tr key={indx}>
									<Td>{ele.id}</Td>
									<Td>{ele.category}</Td>
									<Td>{ele.type_of_room}</Td>
									<Td>{ele.bed_type}</Td>
									<Td>{ele.no_of_persons}</Td>
									<Td>{ele.capacity}</Td>
									<Td>{ele.cost}</Td>
									<Td>{ele.booked == "true" ? "booked" : "available"}</Td>
									<Td>
										<span style={{cursor:"pointer"}} className="material-icons">edit_note</span>
									</Td>
									<Td>
										<span onClick={()=>dispatch(action.deleteHotels(ele))}  style={{cursor:"pointer"}} className="material-icons">delete</span>
									</Td>
								</Tr>
							);
						})}
					</Tbody>
				</Table>
			</TableContainer>
		</>
	);
};

export default AdminTable;
