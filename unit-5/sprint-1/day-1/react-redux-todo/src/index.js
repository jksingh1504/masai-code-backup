import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { store } from "./Redux/store";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import Total from "./components/Total";
import { TodoDetails } from "./components/TodoDetails";
import TodoEdit from "./components/TodoEdit";
import Login from "./components/Login";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<BrowserRouter>
		<Provider store={store}>
			<Routes>
				<Route path="/" element={<App />} />
				<Route path="/todo/:id" element={<TodoDetails />} />
				<Route path="/todo/:id/edit" element={<TodoEdit />} />
				<Route path="/login" element={<Login/>}/>
			</Routes>
		</Provider>
	</BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
