import React,{useEffect, useRef, useState} from 'react'
import { useSelector } from 'react-redux'
import Todoitem from './Todoitem'
import Total from './Total'

const Todolist = () => {
  const todolist=useSelector(store=>store.todolist);
  let x=0;


  return (
    <>
      {todolist.map((ele)=>
      {
        if(ele.complete)
        x++;
        
        return <Todoitem key={ele.id} ele={ele}/>}
      )}
      <Total x={x}/>
    </>
  )
}

export default Todolist