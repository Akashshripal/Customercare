import React from "react"
// import {Link } from "react-router-dom"
// import Header from "./Header"
// import Services from "./Services"
// import Welcome from "./Welcome"
// import WhyChoose from "./Whychoose"


function Navbar() {

  return (
    <>
      {/* <nav className="nav" id="nav">
     <h1>Customer Care & Service Blr</h1>
     <ul className="nav-ul">
    
        
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
     </nav> */}
      <nav class="navbar navbar-light  navbar-expand-lg animate__backInDown" id="nav">
        <a href="#" class="navbar-brand">Customer Care & Service Blr</a>
        <button class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">

          <ul class="navbar-nav ml-auto nav-ul">
            <li class="navbar-item">
              <a href="#header" class="nav-link text-dark">Home</a>
            </li>
            <li class="navbar-item">
              <a href="#welcome" class="nav-link text-dark">About Us</a>
            </li>
            <li class="navbar-item">
              <a href="#Services" class="nav-link text-dark">Our Services</a>
            </li>
            <li class="navbar-item">
              <a href="#Whychoose" class="nav-link text-dark">Whychoose</a>
            </li>
            <li class="navbar-item">
              <a href="#contact" class="nav-link text-dark">Contact</a>
            </li>
          </ul>
        </div>
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

export default Navbar
