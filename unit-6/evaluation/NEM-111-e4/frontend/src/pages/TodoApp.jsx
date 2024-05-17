import React, { useState } from 'react'
import TodoList from './TodoList'
// require("dotenv").config()

const TodoApp = () => {

   const [text,setText]=useState("")
   const [Todos,setTodos]=useState([])
   

   const addTodoToserver= async ()=>{
        const token= await JSON.parse(localStorage.getItem("TodoToken"))
        fetch(`http://localhost:6000/todos`,{
            method:"GET",
            headers:{"content-type":"application/json",
        "token":token},
        // body:JSON.stringify({"taskname":text})
        }).then((res)=>res.json()).then(data=>console.log(data)).catch(err=>{console.log(err)})
   }

  return (
    <div  style={{textAlign:"center"}}>
        <h1>Todo App</h1>
        <input type="text" value={text} onChange={(e)=>setText(e.target.value)}/>
        <button onClick={addTodoToserver}>Add Todo</button>
        <TodoList  Todos={Todos}/>
    </div>
  )
}

export default TodoApp