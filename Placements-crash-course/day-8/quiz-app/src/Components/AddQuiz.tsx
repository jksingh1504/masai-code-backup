import axios from "axios";
import React, { ChangeEvent, useState } from "react";

export const AddQuiz = () => {
  const [formData, setFormData] = useState({});
  async function handleSubmit(e: any) {
    e.preventDefault();
    await axios.post(
      `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/quizes`,
      formData
    );
  }
  function handleChange(e: any) {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === "weightage" ? Number(value) : value,
    });
  }
  return (
    <div className="quiz-form">
      {/* Add a form to accept input from user */}
      <h2>Add Quiz Question</h2>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          name="problem"
          type="text"
          className="problem-statement"
          placeholder="Problem Statement"
          required
        />
        <br />
        <br />
        <input
          onChange={handleChange}
          name="a"
          type="text"
          className="option-a"
          placeholder="Option A"
          required
        />
        <br />
        <br />
        <input
          onChange={handleChange}
          name="b"
          type="text"
          className="option-b"
          placeholder="Option b"
          required
        />
        <br />
        <br />
        <input
          onChange={handleChange}
          name="c"
          type="text"
          className="option-c"
          placeholder="Option C"
          required
        />
        <br />
        <br />
        <input
          onChange={handleChange}
          name="d"
          type="text"
          className="option-d"
          placeholder="Option D"
          required
        />
        <br />
        <br />
        <select
          onChange={handleChange}
          name="correct"
          defaultValue=""
          className="correct-option"
          required
        >
          <option value="">Select Correct Option</option>
          <option value="a">A</option>
          <option value="b">B</option>
          <option value="c">C</option>
          <option value="d">D</option>
        </select>
        <br />
        <br />
        <input
          onChange={handleChange}
          defaultValue={0}
          name="weightage"
          type="number"
          className="weightage"
        />
        <br />
        <br />
        <button
          type="submit"
          style={{ padding: "10px", cursor: "pointer" }}
          className="submit-form"
        >
          Submit
        </button>
      </form>
    </div>
  );
};
