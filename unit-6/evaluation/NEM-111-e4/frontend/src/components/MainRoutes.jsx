import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import IndividualTodo from '../pages/IndividualTodo'
import TodoApp from '../pages/TodoApp'

const MainRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/todos' element={<TodoApp/>}/>
        <Route path="/todos/:todoID" element={<IndividualTodo/>}/>
    </Routes>
  )
}

export default MainRoutes