import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";

import styled from "styled-components";
import { getBooks } from "../Redux/BookReducer/action";

export const Sidebar = () => {
  const dispatch = useDispatch();
  const [searchparam, setSearchparam] = useSearchParams();
  const urlCategory = searchparam.getAll("category");
  const urlOrder = searchparam.getAll("order");
  const [category, setCategory] = useState(urlCategory || null);
  const [order, setOrder] = useState(urlOrder[0] || "");

  const handleChange = (e) => {
    // const option = e.target.value;
    // const name = e.target.name
    const { name, value } = e.target;
    switch (name) {
      case "category":
        let newCategory = [...category];
        if (newCategory.includes(value)) {
          newCategory.splice(newCategory.indexOf(value), 1);
        } else {
          newCategory.push(value);
        }
        setCategory(newCategory);
        break;
      case "sort":
        setOrder(value);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    const URLFileterObj = {};
    if (category.length) {
      URLFileterObj.category = category;
    }
    if (order) {
      URLFileterObj.order = order;
    }
    setSearchparam(URLFileterObj);
    dispatch(
      getBooks({ params: { category, _sort: "release_year", _order: order } })
    );
  }, [category, order, dispatch, setSearchparam]);
  return (
    <DIV>
      <h3>Filter by Category</h3>
      <div>
        <input
          name="category"
          data-testid="novel-filter"
          type="checkbox"
          value="Novel"
          onChange={handleChange}
          defaultChecked={category.includes("Novel")}
        />
        <label>Novel</label>
        <br />
        <input
          name="category"
          data-testid="science-fiction-filter"
          type="checkbox"
          value="Science_Fiction"
          onChange={handleChange}
          defaultChecked={category.includes("Science_Fiction")}
        />
        <label>Science Fiction</label>
        <br />
        <input
          name="category"
          data-testid="thriller-filter"
          type="checkbox"
          value="Thriller"
          onChange={handleChange}
          defaultChecked={category.includes("Thriller")}
        />
        <label>Thriller</label>
        <br />
        <input
          name="category"
          data-testid="motivational-filter"
          type="checkbox"
          value="Motivational"
          onChange={handleChange}
          defaultChecked={category.includes("Motivational")}
        />
        <label>Motivational</label>
        <br />
      </div>
      <br />
      <br />
      <h3>Sort By Release Year</h3>
      <div>
        <input
          data-testid="sort-asc"
          type="radio"
          name="sort"
          value="asc"
          onChange={handleChange}
          defaultChecked={order === "asc"}
        />
        <label>Ascending</label>
        <br />
        <input
          data-testid="sort-desc"
          type="radio"
          name="sort"
          value="desc"
          onChange={handleChange}
          defaultChecked={order === "desc"}
        />
        <label>Descending</label>
      </div>
    </DIV>
  );
};

const DIV = styled.div`
  width: 15%;
  border-right: 1px solid gray;
`;
