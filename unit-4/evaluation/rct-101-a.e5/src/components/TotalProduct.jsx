import React from 'react'
import { useContext } from "react";
import { DataContext } from "../context/DataContext";



const TotalProduct = () => {
const {totalProduct}=useContext(DataContext)

  return (
    <div id="totalProduct">{totalProduct}</div>
  )
}

export default TotalProduct