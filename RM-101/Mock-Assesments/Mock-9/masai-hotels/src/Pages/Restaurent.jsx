import React, { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import RestaurentCard from "../components/RestaurentCard";
import "../stylesheets/restaurents.css";

const Restaurent = () => {
  const token = useSelector((store) => store.token);

  const [restaurents, setRestaurents] = useState([]);
  const [page, setPage] = useState(1);
  const [sortby, setSortby] = useState({sort:"",order:""});
  // const order = useRef("");
  const [filter, setFilter] = useState("");

  useEffect(() => {
    // console.log(sortby);
    fetch(
      `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants/?page=${page}&limit=20&sort=${sortby.sort}&order=${sortby.order}&filter=${filter}`
    )
      .then((res) => res.json())
      .then((data) => {
        setRestaurents(data.data)
      });
  }, [page,sortby,filter]);


  return (
    <>
      <Navbar />
      <br />
      <br />
      <br />
      <br />
      <h3>your token : {token}</h3>
      <br />

      <div id="container">
        <h1>Our Partner Restaurents</h1>
        <div className="sortAndFilter">
          <select
            onChange={(event) => setFilter(event.target.value)}
            name="type"
            id="type"
          >
            <option value="">filter by type</option>
            <option value="fast_food">Fast food</option>
            <option value="fine_dining">Fine dining</option>
            <option value="cafe">Cafe</option>
            <option value="ethnic">Ethnic</option>
            <option value="casual_dining">Casual dining</option>
          </select>

          <select
            onChange={(event) => {
              let newValue = {sort:event.target.name,order:event.target.value};
              setSortby(newValue);
            }}
            name="rating"
            id="rating"
          >
            <option value="">sort by rating</option>
            <option value="asc">low to high</option>
            <option value="desc">high to low</option>
          </select>

          <select
            onChange={(event) => {
              let newValue = {sort:event.target.name,order:event.target.value};
              setSortby(newValue);
            }}
            name="price_starts_from"
            id="price"
          >
            <option value="">sort by price</option>
            <option value="asc">low to high</option>
            <option value="desc">high to low</option>
          </select>
        </div>

        <br />
        <br />
        <div id="pagination">
          Pagination :
          <button onClick={() => setPage(1)} disabled={page === 1}>
            1
          </button>
          <button onClick={() => setPage(2)} disabled={page === 2}>
            2
          </button>
          <button onClick={() => setPage(3)} disabled={page === 3}>
            3
          </button>
          <button onClick={() => setPage(4)} disabled={page === 4}>
            4
          </button>
          <button onClick={() => setPage(5)} disabled={page === 5}>
            5
          </button>
        </div>

        <div id="list">
          {restaurents.map((ele) => (
            <RestaurentCard key={ele.id} ele={ele} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Restaurent;
