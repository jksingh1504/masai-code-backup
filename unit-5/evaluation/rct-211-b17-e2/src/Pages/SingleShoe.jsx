import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const SingleShoe = () => {

  const {id}=useParams();
  const [single,setSingle]=useState({})

  useEffect(()=>{
    axios.get(`/shoes/${id}`).then(r=>setSingle(r.data))
  },[setSingle])

  return (
    <div>
      <h2>{single.name}</h2>
      <div>
        <img src={single.image} alt="Cover Pic" />
      </div>
      <div>
        <div>{single.category}</div>
      </div>
    </div>
  );
};

export default SingleShoe;
