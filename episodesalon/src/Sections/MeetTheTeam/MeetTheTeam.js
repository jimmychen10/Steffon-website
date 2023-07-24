import React from 'react'

import Christy from "../../Assests/Christy_Photo_-removebg-preview.png"
import Steffon from "../../Assests/SteffonV2-removebg-preview.png"
import Onlei from "../../Assests/Onlei_Choi-removebg-preview (1).png"

import './MeetTheTeam.scss'

export default function MeetTheTeam() {
  return (
    <div className='meet-the-team-container'>
        <div>
            <h2>Meet The Team</h2>
        </div>

        <p className='meet-intro'>This is your Team section. Briefly introduce the team then add their bios below. Click here to edit.</p>
        
        <div className='team-leads'>
          <div>
           <div className='image-container'>
              <img src ={Christy} />
            </div>
            <h5>Hair Stylist</h5>
            <h5 className='name'>Christy</h5>

            <p className='team-description'>Introducing Christy, a talented hair + lash stylist with 14+ years of experience. Specializing in haircuts, balayage color, Keratin Treatments, Brazilian Blow Outs, waxing, and lash extensions. With her creative eye and attention to detail, Christy provides personalized experiences tailored to each client's unique needs and style. Achieve smoother, more manageable hair or beautiful, full lashes with her expert techniques. Book an appointment with Christy today for a stunning transformation!</p>
          </div>
          <div>
           <div className='image-container'>
              <img src ={Steffon} />
            </div>
            <h5>Master Hair Stylist</h5>
            <h5 className='name'>Steffon</h5>

            <p className='team-description'>Introducing Steffon, our master hair stylist with 25+ years of experience. He specializes in Vidal Sassoon techniques, Balayage Color, and is certified in Keratin Smoothing Treatment & Brazilian Blow Out. Steffon offers personalized looks and educates clients on hair care, lash lift and tint, and faux mint lash extensions. His expertise and communication skills make clients comfortable and confident. Trust Steffon to take your hair or lashes to the next level!</p>
          </div>
          <div>
            {/* work on this image */}
            <div className='image-container'>
              <img src ={Onlei} />
            </div>

            <h5>Hair Stylist</h5>
            <h5 className='name'>Onlei</h5>

            <p className='team-description'>Meet Onlei, a highly talented stylist with over 29 years of experience in the beauty industry. Specializing in hair color, haircuts, Brazilian blowouts, keratin treatments, massage, waxing, and updos, Onlei provides top-notch services to her clients. With her expert knowledge and creativity, she can create customized looks that perfectly complement each client's skin tone and features. Book an appointment with Onlei today and experience the ultimate in hair and beauty services!</p>
          </div>
        </div>


    </div>
  )
}
