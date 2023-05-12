import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import "./Navbar.css"



export const Navbar = ({setOpenSideDrawer}) => {
  const navigate=useNavigate();
  const location=useLocation()

const handleLogout=()=>{
navigate('/');
};


return (
  <nav className="navbar">
      <div className="brand_title">CodeBros</div>
      <img
            className="user_image"
            src="../../public/vite.svg"
            alt="Profile Pic"
          ></img>
      <button
            onClick={()=>setOpenSideDrawer(true)}
            type="button" data-drawer-target="drawer-left-example" data-drawer-show="drawer-left-example" data-drawer-placement="left" aria-controls="drawer-left-example"
            
            className="drawer_button">Add Users</button>
    {location.state ? <button onClick={handleLogout} type="button" className="logout">Logout</button>: 
    <button onClick={()=>navigate('/')} type="button" className="logout">Login</button>}
    </nav>
    ) 
  
  }
