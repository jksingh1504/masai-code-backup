import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'

const Navbar = () => {

  const navigate=useNavigate();
  const isAuth=useSelector(store=>store.Authreducer.isAuth)


  return (
    <div style={{display:'flex',justifyContent:"space-between",padding:"0px 80px",alignItems:"center",backgroundColor:"#c069e8"}}>
        <h3>Bookstore</h3>
        {isAuth?null:<button style={{height:"30px"}} onClick={()=>navigate("/login")}>Login</button>}
    </div>
  )
}

export default Navbar