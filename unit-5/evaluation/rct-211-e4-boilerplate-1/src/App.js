import { Container } from "@chakra-ui/react";
import "./App.css";
import MainRoutes from "./Pages/MainRoutes";

function App() {
	return (
		<Container maxW='75%'>
			<MainRoutes />
		</Container>
	);
}

export default App;
