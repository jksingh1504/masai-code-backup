import React, { useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getRecipe } from "../Redux/RecipeReducer/action";

import styled from "styled-components";

export const Sidebar = () => {
  const dispatch = useDispatch();
  const [searchparam, setSearchparam] = useSearchParams();
  const URLparams = useRef({ category: [], type: [] });
  const urlCategory = searchparam.getAll("category");
  const urlType = searchparam.getAll("type");
  const urlOrder = searchparam.getAll("order");

  useEffect(() => {
    const APIparams = {};
    if (urlCategory.length) {
      APIparams.category = urlCategory;
      URLparams.current.category = urlCategory;
    }
    if (urlType.length) {
      APIparams.type = urlType;
      URLparams.current.type = urlType;
    }
    if (urlOrder.length) {
      APIparams._order = urlOrder[0];
      APIparams._sort = "price";
      URLparams.current.order = urlOrder;
    }
    setSearchparam(URLparams.current);
    dispatch(getRecipe({ params: APIparams }));
  }, [searchparam]);

  function handleChange(e) {
    const { name, value } = e.target;
    if (name === "category") {
      if (URLparams.current.category.includes(value)) {
        URLparams.current.category.splice(
          URLparams.current.category.indexOf(value),
          1
        );
      } else {
        URLparams.current.category.push(value);
      }
    } else if (name === "type") {
      if (URLparams.current.type.includes(value)) {
        URLparams.current.type.splice(URLparams.current.type.indexOf(value), 1);
      } else {
        URLparams.current.type.push(value);
      }
    } else if (name === "sort") {
      URLparams.current.order = value;
    }
    setSearchparam({ ...URLparams.current });
  }
  return (
    <DIV>
      <h3>Filter by Category</h3>
      <div>
        <input
          defaultChecked={searchparam.getAll("category").includes("indian")}
          value="indian"
          name="category"
          onChange={handleChange}
          data-testid="recipe-indian"
          type="checkbox"
        />
        <label>Indian</label>
        <br />
        <br />
        <input
          defaultChecked={searchparam.getAll("category").includes("italian")}
          value="italian"
          name="category"
          onChange={handleChange}
          data-testid="recipe-italian"
          type="checkbox"
        />
        <label>Italian</label>
        <br />
        <br />
        <input
          defaultChecked={searchparam.getAll("category").includes("chinese")}
          value="chinese"
          name="category"
          onChange={handleChange}
          data-testid="recipe-chinese"
          type="checkbox"
        />
        <label>Chinese</label>
        <br />
        <br />
        <input
          defaultChecked={searchparam.getAll("category").includes("thai")}
          value="thai"
          name="category"
          onChange={handleChange}
          data-testid="recipe-thai"
          type="checkbox"
        />
        <label>Thai</label>
        <br />
      </div>
      <br />
      <br />
      <h3>Veg / Non-Veg</h3>
      <div>
        <input
          defaultChecked={searchparam.getAll("type").includes("veg")}
          value="veg"
          name="type"
          onChange={handleChange}
          data-testid="recipe-veg"
          type="checkbox"
        />
        <label>Veg</label>
        <br />
        <br />
        <input
          defaultChecked={searchparam.getAll("type").includes("non-veg")}
          value="non-veg"
          name="type"
          onChange={handleChange}
          data-testid="recipe-non-veg"
          type="checkbox"
        />
        <label>Non Veg</label>
      </div>
      <br />
      <br />
      <br />
      <h3>Sort By Price</h3>
      <div>
        <input
          defaultChecked={searchparam.getAll("order").includes("asc")}
          value="asc"
          onChange={handleChange}
          data-testid="recipe-sort-asc"
          type="radio"
          name="sort"
        />
        <label>Ascending</label>
        <br />
        <br />
        <input
          defaultChecked={searchparam.getAll("order").includes("desc")}
          value="desc"
          onChange={handleChange}
          data-testid="recipe-sort-desc"
          type="radio"
          name="sort"
        />
        <label>Descending</label>
      </div>
    </DIV>
  );
};

const DIV = styled.div`
  width: 13%;
  border-right: 1px solid gray;
  text-align: left;
  margin-left: 20px;
  box-shadow: 2px 2px 2px gray;

  label {
    margin-left: 5px;
  }

  input,
  label {
    font-size: larger;
  }
`;
