import axios from "axios";
import React, { Dispatch, SetStateAction, useEffect, useRef } from "react";
export interface problemDetailsInterface {
  problem: string;
  a: string;
  b: string;
  c: string;
  d: string;
  correct: string;
  weightage: number;
  id: number;
}
interface propInterface {
  problemDetails: problemDetailsInterface;
  setProblems: Dispatch<SetStateAction<any>>;
}

export const ProblemCard = ({ problemDetails, setProblems }: propInterface) => {
  const { problem, a, b, c, d, correct, weightage, id } = problemDetails;
  function handleWeightageChange(payload: number) {
    problemDetails.weightage = problemDetails.weightage + payload;
    setProblems((prev: problemDetailsInterface[]) =>
      prev.map((ele: problemDetailsInterface) => ele)
    );
    axios.patch(
      `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/quizes/${id}`,
      problemDetails
    );
  }

  return (
    <div>
      {/* Display all the problem details here */}
      <h3 className="problem-statement">{problem}</h3>
      <p className="option-a">A: {a}</p>
      <p className="option-b">B: {b}</p>
      <p className="option-c">C: {c}</p>
      <p className="option-d">D: {d}</p>
      <p className="correct-option">Correct: {correct}</p>
      <h3 className="marks">Marks: {String(weightage)}</h3>
      <button
        onClick={() => handleWeightageChange(1)}
        data-testid="increase-weightage"
      >
        Weightage+
      </button>
      <button
        onClick={() => handleWeightageChange(-1)}
        data-testid="decrease-weightage"
      >
        Weightage-
      </button>
    </div>
  );
};
