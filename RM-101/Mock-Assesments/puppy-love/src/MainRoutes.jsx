import React from 'react'
import {Route, Routes} from "react-router-dom"
import HomePage from './Pages/HomePage.jsx'
import SearchPage from './Pages/SearchPage.jsx'
import PuppyPage from "./Pages/PuppyPage"

const MainRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/search" element={<SearchPage/>}/>
        <Route path="/puppy" element={<PuppyPage/>}/>
    </Routes>
  )
}

export default MainRoutes