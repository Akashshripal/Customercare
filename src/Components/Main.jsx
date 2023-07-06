import React from "react";
import 'animate.css';

export default function Main(){
    return(
        
    <>
    {/* //   Header */}
        <div className="header" id="header">
        <img className="header-img animate__animated animate__backInLeft" src="https://img.freepik.com/free-vector/realistic-kitchen-appliance_52683-83665.jpg?w=750&t=st=1688636665~exp=1688637265~hmac=4705014fe96cb2a3dd7ace6afd3ea3bfb8f935e42b4d3fd338f8510bc4603942"/>
        <div className="header-info animate__animated animate__backInRight">
         <h2>Book Your Service</h2>
         <h4>Experience the utmost convenience of same-day doorstep service provided by a trusted partner in Bengaluru.</h4>
         <form className="form animate__animated animate__backInRight"  >
             <input type="text" placeholder="Name" />
             <input type="email" placeholder="Email" />
             <input type="phone"placeholder="Phone Number" />
      
             <select className="Service" required="required" >
                     <option value="Select Your Services">Select Your Services</option>
                     <option value="Washing Machine Service and Repair">Washing Machine Service and Repair</option>
                     <option value="Fridge Service and Repair">Fridge Service and Repair</option>
                     <option value="Microwave Oven Service and Repair">Microwave Oven Service and Repair</option>
             </select>
             <select className="Product" required="required" >
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

       {/* //welcome */}

       <section className="main " id="welcome">
       <h1 className="animate__animated animate__backInUp">Welcome to Customer Care & Service Blr - Your Trusted Appliance Repair Experts</h1>
       <div className="main-para ">
       <p>At Customer Care & Service Blr, we understand the importance of having well-functioning home appliances. That's why we are committed to providing reliable and efficient repair services for your washing machine, refrigerator, and microwave oven. With our team of skilled technicians and a dedication to customer satisfaction, we strive to exceed your expectations and restore the optimal performance of your appliances.</p>  
       <p className="center-p">From minor repairs to complex issues, our experienced professionals are equipped with the knowledge and expertise to handle a wide range of appliance problems. We use state-of-the-art tools and follow industry best practices to ensure that your appliances are repaired promptly and effectively.</p>
       <p>Trust us to deliver exceptional service and get your appliances back up and running smoothly. Contact Customer Care & Service Blr today to schedule an appointment and experience our reliable appliance repair solutions.
       Trust us to deliver exceptional service and get your appliances back up and running smoothly. Contact Customer Care & Service Blr today to schedule an appointment and experience our reliable appliance repair solutions.
       </p>
       </div>
      </section>

        {/* //services */}
      
        <section className="Services" id="Services">
         <h1 className="animate__animated animate__backInUp">Customer Care & Service Blr offers a comprehensive range of appliance repair services to address your specific needs. Our services include:</h1>
         <div className="washing service ">
          <div className="washing-info animate__animated animate__backInLeft">
          <h1>Washing Machine Service</h1>
          <h4>Our skilled technicians specialize in washing machine repairs. Whether your machine is not spinning, leaking, or experiencing any other issues, we can diagnose the problem and provide efficient solutions. We handle various types and brands of washing machines, ensuring that your laundry needs are met promptly</h4>
          <a href="tel:82392397433">Call Now | 82392397433</a>
          </div>
          <img  src="https://img.freepik.com/premium-photo/home-appliance-front-down-view-open-door-washing-machine-isolated_662322-220.jpg?size=626&ext=jpg&uid=R108975617&ga=GA1.1.2091993263.1687766491&semt=ais" className="animate__animated animate__backInRight"/>
         </div>
   
         <div className="Refrigerator service">
          <img src="https://img.freepik.com/free-vector/set-realistic-silver-fridges-various-size-isolated-white_1284-28763.jpg?size=526&ext=jpg&uid=R108975617&ga=GA1.2.2091993263.1687766491&semt=sph" className="animate__animated animate__backInLeft"/>
          <div className="Refrigerator-info animate__animated animate__backInRight">
          <h1>Refrigerator Repair</h1>
          <h4>A malfunctioning refrigerator can lead to food spoilage and inconvenience. Our team is trained to handle refrigerator repairs of different makes and models. We can fix issues such as cooling problems, strange noises, faulty temperature control, and more. Count on us to restore the performance of your refrigerator and preserve your food for longer.</h4>
          <a href="tel:82392397433">Call Now | 82392397433</a>
          </div>
         </div>

         <div className="Microwave service">
          <div className="Microwave-info animate__animated animate__backInLeft">
         <h1>Microwave Oven Service</h1>
         <h4>If your microwave oven is not heating, has electrical problems, or is displaying error codes, our experts are here to help. We have the knowledge and skills to diagnose and repair microwave oven issues efficiently. Trust us to ensure that your microwave oven operates safely and effectively, making your cooking experience hassle-free.</h4>
         <a href="tel:82392397433">Call Now | 82392397433</a>
         </div>
         <img src="https://img.freepik.com/premium-photo/microwave-oven-isolated-white_93675-75241.jpg?size=626&ext=jpg&uid=R108975617&ga=GA1.2.2091993263.1687766491&semt=ais" className="animate__animated animate__backInRight"/>
         </div>
     </section>
   
 
    {/* //whychoose */}

    <section className="Whychoose animate__animated animate__backInDown" id="Whychoose">
                <h1>Why Choose Us</h1>
                <div className="whychoose-info">
                    <div className="whychoose-item">
                    <i className="fa-solid fa-user-shield"></i>
                        <h3>Expert Technicians</h3>
                        <p>Our team of skilled technicians has extensive experience in appliance repair. They undergo regular training to stay updated with the latest advancements in the industry. With their expertise and attention to detail, you can trust us to deliver high-quality repair services.</p>
                    </div>
                    <div className="whychoose-item">
                        <i className="fa-solid fa-car"></i>
                        <h3>Prompt and Reliable Service</h3>
                        <p>We understand the inconvenience caused by a malfunctioning appliance. That's why we prioritize prompt service delivery. Our technicians arrive at your doorstep on time, equipped with the necessary tools and parts to efficiently diagnose and repair your appliance.</p>
                    </div>
                </div>
                
                <div className="whychoose-info"> 
                    <div className="whychoose-item">
                    <i className="fa-solid fa-box-archive"></i>
                        <h3>Quality Repairs</h3>
                        <p>We are committed to delivering lasting solutions. We use genuine spare parts and follow industry best practices to ensure that your appliances are repaired to the highest standards. Our focus is on providing reliable repairs that extend the lifespan of your appliances</p>
                    </div>
                    <div className="whychoose-item">
                    <i className="fa-solid fa-handshake"></i>
                        <h3>Customer Satisfaction</h3>
                        <p>Your satisfaction is our top priority. We strive to provide excellent customer service, ensuring that your needs are met at every step. Our friendly and professional team is always ready to address your concerns and provide transparent communication throughout the repair process.</p>
                    </div>
                </div>
               

                <div className="whychoose-info">
                        <div className="whychoose-item  center">
                        <i className="fa-solid fa-hand-holding-dollar"></i>
                        <h3>Affordable Pricing</h3>
                        <p>We believe that quality repairs should be accessible to everyone. Our services are competitively priced without compromising on quality. We provide transparent pricing with no hidden charges, ensuring that you receive the best value for your investment.</p>
                        </div>
                </div>

         
            </section>

        {/* {contact}  */}

        <section className="Contact" id="contact">
         <div className="Contact-info animate__animated animate__backInLeft">
            <p>Choose Customer Care & Service Blr for reliable and efficient appliance repairs. Trust us to restore the functionality of your washing machine, refrigerator, or microwave oven. Contact us today to schedule an appointment and enjoy hassle-free appliance repairs.</p>
            <h1>Contact Details</h1>
            <div className="contact-btn">
            <a href="tel:82392397433">Call Now | 82392397433</a>
            <a href="email:info@24x7customer.co.in">Email Us|Email:info@24x7customer.co.in</a>
            </div>
            <h1>Send Us a Message</h1>
            <form className="form contact-form">
             <input type="text" placeholder="Name" />
             <input type="email" placeholder="Email" />
             <input type="phone"placeholder="Phone Number" />
      
             <select className="Service" required="required" >
                     <option value="Select Your Services">Select Your Services</option>
                     <option value="Washing Machine Service and Repair">Washing Machine Service and Repair</option>
                     <option value="Fridge Service and Repair">Fridge Service and Repair</option>
                     <option value="Microwave Oven Service and Repair">Microwave Oven Service and Repair</option>
             </select>
             <select className="Product" required="required" >
                     <option value="Select Your Product">Select Your Product</option>
                     <option value="In Warranty">In Warranty</option>
                     <option value="Out Of Warranty">Out Of Warranty</option>
             </select>     
             <textarea placeholder="Full Address With Pincode"/>    
             <button className="header-btn">Send</button>
         </form>
         </div>
         <img className="Contact-img animate__animated animate__backInRight" src="https://img.freepik.com/free-photo/full-length-portrait-young-plumber-holding-wrench-ready-work-white-background_662251-3004.jpg?size=826&ext=jpg&uid=R108975617&ga=GA1.2.2091993263.1687766491&semt=ais"/>
        </section>
       </>  
    )
}