import React from "react";
import { Navbar } from "../Components/Navbar";
import { ProblemList } from "../Components/ProblemList";

export const AllProblems = () => {
  return (
    <div>
      <Navbar pageName="All Problems"/>
      <ProblemList />
    </div>
  );
};
