import React from 'react'
import AdminForm from '../components/AdminForm'
import Navbar from '../components/Navbar'
import AdminTable from '../components/AdminTable'

const Admin = () => {
  return (
    <>
        <Navbar/>
        <AdminForm/>
        <AdminTable/>
    </>
  )
}

export default Admin