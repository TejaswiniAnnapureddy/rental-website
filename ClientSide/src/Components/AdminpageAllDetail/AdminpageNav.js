import React from "react"
import "../Style/AdminPagenav.css"
import { useNavigate } from "react-router-dom"

export default function AdminpageNav(){
    const Navigater = useNavigate();
    function logoutFunc(){
        localStorage.clear();
        Navigater("/")
    }
return<>
<nav id="admin-page-nav-container-my-nav">
<div id="logo-of-the-rental-car-app">
    <img src="/godrive-logo.png" id="img-logo" alt="GoDrive Logo" />
    <span id="name-of-the-app-rental-car-app">GoDrive</span>
</div>
<button id="logout-admin-page-butn-admin" onClick={logoutFunc} >Logout</button>
</nav>
</>
}