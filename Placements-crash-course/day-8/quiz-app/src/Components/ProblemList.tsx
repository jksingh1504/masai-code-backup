import axios from "axios";
import React, { useEffect, useState } from "react";
import { ProblemCard, problemDetailsInterface } from "./ProblemCard";

export const ProblemList = () => {
  const [problems, setProblems] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/quizes`)
      .then((res) => {
        console.log(res);
        setProblems(res.data);
      });
  }, []);
  return (
    <div className="problem-list" data-testid="problem-list">
      {/* Display all problems using ProblemCard component */}
      {problems.map((ele: problemDetailsInterface) => (
        <ProblemCard key={String(ele.id)} problemDetails={ele} setProblems={setProblems}/>
      ))}
    </div>
  );
};
