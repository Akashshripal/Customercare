import React from "react"

function Header() {

  return (
    <>
    <div className="header">
       <img className="header-img" src="./src/assets/img/Header.png"/>
       <div className="header-info">
        <h2>Book Your Service</h2>
        <h4>Experience the utmost convenience of same-day doorstep service provided by a trusted partner in Bengaluru.</h4>
        <form className="form">
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="phone"placeholder="Phone Number" />
     
            <select className="Service" required="required" >
                    <option value="Select Your Services">Select Your Services</option>
                    <option value="Washing Machine Service and Repair">Washing Machine Service and Repair</option>
                    <option value="Fridge Service and Repair">Fridge Service and Repair</option>
                    <option value="Microwave Oven Service and Repair">Microwave Oven Service and Repair</option>
            </select>
            <select class="Product" required="required" >
                    <option value="Select Your Product">Select Your Product</option>
                    <option value="In Warranty">In Warranty</option>
                    <option value="Out Of Warranty">Out Of Warranty</option>
            </select>     
            <textarea placeholder="Full Address With Pincode"/>    
            <button className="header-btn">Send</button>
        </form>
       </div>
       <form></form>
    </div>
    </>
  )
}

export default Header
