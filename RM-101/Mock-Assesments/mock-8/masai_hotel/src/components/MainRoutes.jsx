import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Admin from '../pages/Admin'
import AdminLogin from '../pages/AdminLogin'
import Home from '../pages/Home'
import Hotel from '../pages/Hotel'
import UserLogin from '../pages/UserLogin'
import UserReg from '../pages/UserReg'

const MainRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/admin" element={<Admin/>}/>
        <Route path="/adminLogin" element={<AdminLogin/>}/>
        <Route path="/userLogin" element={<UserLogin/>}/>
        <Route path="/userReg" element={<UserReg/>}/>
        <Route path="hotel" element={<Hotel/>}/>
    </Routes>
  )
}

export default MainRoutes