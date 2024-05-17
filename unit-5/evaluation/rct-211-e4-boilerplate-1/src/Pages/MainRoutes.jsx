import React from "react";
import { Route, Routes } from "react-router-dom";
import Editpage from "./Editpage";
import Homepage from "./Homepage";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/country/:id" element={<Editpage />} />
    </Routes>
  );
};

export default MainRoutes;
