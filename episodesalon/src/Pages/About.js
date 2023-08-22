import React from 'react'

import "./Pages_Styles/About.scss"

import Navigation_bar from '../Components/NavBar/Navigation_bar'
import SalonInfo from '../Components/Salon/SalonInfo'

import Team_pic from "../Assests/Episode Group Photo (1).jpg"


export default function About() {
  return (
    <div className='About'>
        <Navigation_bar/>

        <h2>Get to Know Us</h2>
        <hr style={{visibility: "hidden"}}/>

        <div className='about-content'>
        <p className='detail pb-5'>
            At Episode Salon, our goal is to provide you with the finest hair care available. Our highly skilled creative team wants you to look and feel your absolute best, so we offer a variety of services to keep your looks just the way you love them. If you’re trying something new and creative or want to maintain your current look, each of the Episode Salon Stylists will give you a look that matches your personality and style. With each color and cut service provided by one of our stylists, a free consultation is offered to ensure that we know exactly what you’re after. In addition to modern cuts, E Salon offers full and partial highlights, all-over color, color correction, umbre color technique, retouch services, keratin treatments, Japanese Straightening, hair extensions, wedding and special occasion updo’s! For your new look call Episode Salon today to book your appointment and meet with one of our exceptional stylists.
            <hr style={{visibility: "hidden"}}/>
            At Episode Salon & Spa, we are proud of our high quality, superb service, and enthusiastic staff. We provide professional spa-quality hair, nail, facial and waxing services in a clean and relaxing environment. Whether you visit us after a great workout at the gym, a hard day at the office, or a long day caring for your loved ones, our licensed partners are here to unwind your body and energize your mind. We take pride in being a neighborhood establishment with a passion for serving you. We welcome you not just as a customer, but as neighbor and a friend. Come in and join us with a beverage!
            <hr style={{visibility: "hidden"}}/>
            Your neighbors,
            <br />
            Steffon, Christy, Morgana, Michelle & Holly
        </p>

        <div className='image-container'>
          <img src={Team_pic} alt="" />
        </div>
        </div>
      <SalonInfo/>
      
        {/* footer */}
    </div>
  )
}
