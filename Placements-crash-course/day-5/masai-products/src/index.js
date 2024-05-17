import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

//Do not remove/change the below two imports
import { initState } from "./pages/products/productsReducer";
import { productsReducer } from "./pages/products/productsReducer";
// import { reducer } from "./reducer/reducer";

import {BrowserRouter} from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContextProvider";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <AuthContextProvider>
<BrowserRouter>
<App />
</BrowserRouter>
  </AuthContextProvider>

)
;

// DO NOT REMOVE THIS PEICE OF CODE
if (window.Cypress) {
  window.reducerInitialState = initState;
  window.reducer = productsReducer;
}