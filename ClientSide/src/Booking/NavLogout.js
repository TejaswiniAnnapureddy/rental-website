import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './../Components/Style/navLog.css';
import { Navigate, useNavigate,Link } from "react-router-dom"

const NavLogout = () => {
const navigate = useNavigate();
  return (
    <>
  <nav id="admin-page-nav-container-my-nav">
  <div id="logo-of-the-rental-car-app">
    <img src="/godrive-logo.png" id="img-logo" alt="GoDrive Logo" />
    <span id="name-of-the-app-rental-car-app">GoDrive</span>
</div>
<div>
<Link to="/Existbookings" ><button id="logout-admin-page-butn-admin"  >Mybooking</button></Link>
<Link to = "/"><button id="logout-admin-page-butn-admin" onClick={()=>localStorage.clear()} >Logout</button></Link>
</div>
</nav>
 </>
  )
}

export default NavLogout;