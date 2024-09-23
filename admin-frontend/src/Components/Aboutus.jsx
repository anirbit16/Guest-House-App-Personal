import React from 'react'
import './LandingPage.css'
import Aboutusimg from "../assets/Aboutusimg.jpg"
const Aboutus = () => {
  return (
    <>
     {/* Header Banner */}
    <section className='hero'>
        <div className='container'>
         <div className="heading">
            <h1>Effortless Room Management, Simplified</h1><p>Whether you're running a hotel, office space, or event venue, our intuitive platform helps you stay organized and  streamlines your room management process with ease.</p>
        </div>
         
        </div>
      </section>
      {/* Back-Container */}
      
     
      {/* About Us */}
      <section className='about'>
       
        
        <div className='container flex mtop'>
            
          <div className='left row'>
          <div className="heading">
                 <span className='abtus' style={{fontSize:'20px'}}>About Us</span>
                <h1> Who We Are?</h1>
                <p>Check out our company story and work process</p>
          </div>

          <p>At RoomMaster, we started with a simple mission: to simplify the complexities of room management. Our journey began when we realized how outdated and cumbersome traditional systems were, often leading to missed bookings, overbookings, and inefficient space utilization.</p>


        <p>We believe that managing rooms should be effortless, and our platform is designed to provide exactly that: intuitive, flexible, and customizable solutions that cater to your unique needs.</p>
            <button className='btn2'>More About Us</button>
            <bi bi-check-all></bi>
          </div>
          <div className='right row'>
            <img src={Aboutusimg} alt='' />
          </div>
        </div>
      </section>
      {/* Why Choose Us */}
      <section className='why-choose-us'>
       
        
       <div className='container flex mtop'>
           
         <div className='left row'>
         <div className="heading">
                <span className='abtus' style={{fontSize:'20px'}}>About Us</span>
               <h1> Who We Are?</h1>
               <p>Check out our company story and work process</p>
         </div>

         <p>At RoomMaster, we started with a simple mission: to simplify the complexities of room management. Our journey began when we realized how outdated and cumbersome traditional systems were, often leading to missed bookings, overbookings, and inefficient space utilization.</p>


       <p>We believe that managing rooms should be effortless, and our platform is designed to provide exactly that: intuitive, flexible, and customizable solutions that cater to your unique needs.</p>
           <button className='btn2'>More About Us</button>
           <bi bi-check-all></bi>
         </div>
         <div className='right row'>
           <img src={Aboutusimg} alt='' />
         </div>
       </div>
     </section>

      
    </>
  )
}

export default Aboutus
