import React from "react";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "./HomePage";
import { AllProblems } from "./AllProblems";

export const MainRoutes = () => {
  return (
    <Routes>
      {/* Provide all routes here */}
      <Route path="/" element={<HomePage />} />
      <Route path="/all-problems" element={<AllProblems />} />
    </Routes>
  );
};
