import React from 'react'
import './NavBar.css'
import { Link } from 'react-router-dom'
import logo from './images/logo.png'

export default function NavBar() {
  return (
    <>
   
        <div className="navBar">
        <img src={logo} className="logo" alt="logo"></img>
        <h4>FOOD TOWN</h4>
        <div className="nav">
           <Link to="/" className="nav-link"><li>HOME</li></Link> 
           <Link to="/Serve" className="nav-link"><li>SERVE</li></Link> 
           <Link to="/Menu" className="nav-link"><li>MENU</li></Link> 
           <Link to="/About" className="nav-link"><li>ABOUT US</li></Link>
           <Link to="/Amenity" className="nav-link"><li>AMENITIES</li></Link>
           <Link to="/Login" className="nav-link"  id="loginLink"><li>LOG IN</li></Link>
           </div>
        </div>
    </>
  )
}
