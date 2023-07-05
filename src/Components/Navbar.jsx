import React from "react"
// import {Link } from "react-router-dom"
// import Header from "./Header"
// import Services from "./Services"
// import Welcome from "./Welcome"
// import WhyChoose from "./Whychoose"


function Navbar() {

  return (
    <>
     <nav className="nav" id="nav">
     <h1>Customer Care & Service Blr</h1>
     <ul className="nav-ul">
        {/* <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/Welcome">Our Services</Link></li>
        <li><Link to="/whychoose">Why Choose Us</Link></li>
        <li><Link to="/contactUs">Contact Us</Link></li> */}
        
        <li><a href="#header">Home</a></li>
        <li><a href="#welcome">About Us</a></li>
        <li><a href="#Services">Our Services</a></li>
        <li><a href="#Whychoose">Why Choose Us</a></li>
        <li><a href="">Contact Us</a></li>
     </ul>
     
     <div>
        <div className="nav-Email">
        <a className="nav-icon" href="email:info@24x7customer.co.in"><i className="fa-regular fa-envelope"></i></a>
        <div className="Email-Text">
        <a href="email:info@24x7customer.co.in">Email Us</a>
        <h5>info@24x7customer.co.in</h5>
        </div>
        </div>
     </div>
     </nav>
    </>
  )
}

export default  Navbar
