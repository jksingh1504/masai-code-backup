import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { editBook } from "../Redux/BookReducer/action";
import axios from "axios";
import { useParams } from "react-router-dom";

export const EditBook = () => {
  const [formData, setFormData] = useState({
    book_name: "",
    author: "",
    no_of_chapters: "",
  });
  useEffect(() => {
    axios
      .get(
        `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/books/${id}`
      )
      .then((res) => {
        setFormData(res.data);
      });
  }, []);
  const { id } = useParams();
  const dispatch = useDispatch();
  function handleChange(event) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }
  async function handleSubmit(event) {
    event.preventDefault();
    dispatch(editBook(formData,id));
    setFormData({ book_name: "", author: "", no_of_chapters: "" });
  }
  return (
    <DIV>
      <h1 data-testid="book-id">Edit Book ID: </h1>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          value={formData.book_name}
          type="text"
          name="book_name"
          placeholder="Name"
          data-testid="book-name"
          required
        />
        <input
          onChange={handleChange}
          value={formData.author}
          type="text"
          name="author"
          placeholder="Author"
          data-testid="book-author"
          required
        />
        <input
          onChange={handleChange}
          type="number"
          value={formData.no_of_chapters}
          name="no_of_chapters"
          placeholder="Number of Chapter"
          data-testid="book-chapter"
          required
        />
        <button type="submit" data-testid="update-book">
          Update
        </button>
      </form>
    </DIV>
  );
};

const DIV = styled.div`
  width: 400px;
  padding: 20px;
  margin: 40px auto;
  display: flex;
  flex-direction: column;
  gap: 15px;
  border: 1px solid gray;
  align-items: center;

  input {
    width: 80%;
    height: 30px;
    font-size: larger;
  }

  button {
    width: 150px;
    height: 30px;
    font-size: large;
  }
`;
