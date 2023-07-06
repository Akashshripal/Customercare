import React from "react"



function Footer() {

  return (
    <>
     <footer className="footer ">
        <div className="footer-box ">
        <div className="footer-left animate__animated animate__backInLeft">
            <h2>Customer Care & Service Blr </h2>
            <p>At your doorstep, our team of skilled technicians is committed to delivering prompt and dependable service with their expertise.</p>
            <a href="">Book Your Service</a>
        </div>
        <div className="footer-Right animate__animated animate__backInRight">
            <h3>Contact Details</h3>
            <h4><i class="fa-solid fa-mobile-screen-button"></i> 8453534523</h4>
            <h4><i class="fa-regular fa-envelope"></i> info@24x7customer.co.in</h4>
        </div>
        </div>
     <h4 className="animate__animated animate__backInDown">CopyRight 24x7servicecare.co.in All Rights Resivered </h4>
     </footer>
     
    </>
  )
}

export default  Footer
