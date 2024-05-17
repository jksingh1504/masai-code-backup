import React from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Cart from "./Cart";
import Home from "./Home";
import Login from "./Login";
import Order from "./Order";
import Restaurent from "./Restaurent";

const MainRoutes = () => {
    const token=useSelector(store=>store.token)

  return (
    <Routes>
      <Route path="/" element={token?<Restaurent/>:<Home />} />
      <Route path="/restaurents" element={<Restaurent />} />
      <Route path="/login" element={<Login />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/order" element={<Order />} />
    </Routes>
  );
};

export default MainRoutes;
