import axios from "axios";
import React, { useState } from "react";
import { Navbar } from "../Components/Navbar";

export const AddPost = () => {
  const [formData, setFormData] = useState({ like: 0, dislike: 0 });
  async function handleSubmit(e: any) {
    e.preventDefault();
    await axios.post(
      `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/posts`,
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
    <div>
      <Navbar pageName="Add Post Page"/>
      <div className="quiz-form">
        <h2>Add New Post</h2>
        <form onSubmit={handleSubmit}>
          <input
            onChange={handleChange}
            name="name"
            type="text"
            className="post-name"
            placeholder="Post Name"
            required
          />
          <br />
          <br />
          <input
            onChange={handleChange}
            name="image"
            type="text"
            className="post-image"
            placeholder="Post Image"
            required
          />
          <br />
          <br />
          <input
            onChange={handleChange}
            name="author"
            type="text"
            className="post-author"
            placeholder="Post Author"
            required
          />
          <br />
          <br />
          <input
            onChange={handleChange}
            name="content"
            type="text"
            className="post-content"
            placeholder="Post Content"
            required
          />
          <br />
          <br />
          <select
            onChange={handleChange}
            name="category"
            defaultValue=""
            className="post-category"
            required
          >
            <option value="">Select Category</option>
            <option value="html">HTML</option>
            <option value="css">CSS</option>
            <option value="js">JS</option>
            <option value="react">React</option>
          </select>
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
    </div>
  );
};
