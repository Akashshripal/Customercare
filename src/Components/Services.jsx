import React from "react"

function Services() {

  return (
    <>
     <section className="Services">
         <h1>Customer Care & Service Blr offers a comprehensive range of appliance repair services to address your specific needs. Our services include:</h1>
         <div className="washing service">
          <div className="washing-info">
          <h1>Washing Machine Service</h1>
          <h4>Our skilled technicians specialize in washing machine repairs. Whether your machine is not spinning, leaking, or experiencing any other issues, we can diagnose the problem and provide efficient solutions. We handle various types and brands of washing machines, ensuring that your laundry needs are met promptly</h4>
          <a href="tel:82392397433">Call Now | 82392397433</a>
          </div>
          <img src="./src/assets/img/washingPic.png"/>
         </div>
   
         <div className="Refrigerator service">
          <img src="./src/assets/img/fridge.png"/>
          <div className="Refrigerator-info">
          <h1>Refrigerator Repair</h1>
          <h4>A malfunctioning refrigerator can lead to food spoilage and inconvenience. Our team is trained to handle refrigerator repairs of different makes and models. We can fix issues such as cooling problems, strange noises, faulty temperature control, and more. Count on us to restore the performance of your refrigerator and preserve your food for longer.</h4>
          <a href="tel:82392397433">Call Now | 82392397433</a>
          </div>
         </div>

         <div className="Microwave service">
          <div className="Microwave-info">
         <h1>Microwave Oven Service</h1>
         <h4>If your microwave oven is not heating, has electrical problems, or is displaying error codes, our experts are here to help. We have the knowledge and skills to diagnose and repair microwave oven issues efficiently. Trust us to ensure that your microwave oven operates safely and effectively, making your cooking experience hassle-free.</h4>
         <a href="tel:82392397433">Call Now | 82392397433</a>
         </div>
         <img src="./src/assets/img/Microwave.png"/>
         </div>
     </section>
    </>
  )
}

export default Services
