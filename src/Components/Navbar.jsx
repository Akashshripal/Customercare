import React from "react"

function Navbar() {

  return (
    <>
     <nav className="nav">
     <h1>At Customer Care & Service Blr</h1>
     <ul className="nav-ul">
        <li>Home</li>
        <li>About Us</li>
        <li>Our Services</li>
        <li>Why Choose Us</li>
        <li>Contact Us</li>
     </ul>
     <div>
        <div className="nav-Email">
        <i className="fa-regular fa-envelope"></i>
        <div className="Email-Text">
        <h4>Email Us</h4>
        <h5>Email Address</h5>
        </div>
        </div>
     </div>
     </nav>
    </>
  )
}

export default Navbar
