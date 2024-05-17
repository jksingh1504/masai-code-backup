import Login from "../pages/login/Login";
import Home from "../pages/home/Home";
import Products from "../pages/products/Products";
import {Routes, Route} from "react-router-dom";


function AllRoutes() {
  return <>
  <Routes>
    <Route path="/login" element={<Login />} />
    <Route path="/" element={<Home />} />
    <Route path="/products" element={<Products />} />
    </Routes>   
  </>;
}

export default AllRoutes;
