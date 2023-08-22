import React from 'react'

import Navigation_bar from '../Components/NavBar/Navigation_bar';
import SalonInfo from '../Components/Salon/SalonInfo';

import DownArrow from "../Assests/Drop-down-arrow-icon-rounded.png"
import Flower from "../Assests/Flowers  (1).jpg"

import AppointmentSection from '../Components/AppointmentSection/AppointmentSection';
import "./Pages_Styles/Services.scss"

export default function Services() {
  return (
    <div>
      <Navigation_bar/>


      <div className='banner'>

          <div className='intro'>
            <h2 className='proffesional'>Proffesional </h2>
            <h2 className='span_title'>SERVICES</h2>
            <p className='catch'>Beutiful Results. Personalized Care</p>

          </div>
          <div className='scroll_down_container'>
            <p className='scroll_down'>Scroll Down</p>
            <img style={{width:"43px",margin:"5px auto"}} src={DownArrow} alt="" />
          </div>
      </div>

    <div className='catchphrase_box' >
      <div className='catchphrase'>
        <p className='title'>HAIRSTYLE HARMONY:</p>
        <div className='line'></div>
        <p className='catchphrase_description'>Where Artistry Meets Perfection in Every Strand.</p>
      </div>
    </div>


    <div className='service_card'>
      <div className='m'>
        <div className='text-container'>
          <h4 className="tittle-circle-bullet">OUR SERVICES</h4>
          <ul  className='menu_list'>        
            <li className="circle-bullet">Men’s Haircut, Shampoo & Style</li>
            <li className="circle-bullet">Women’s Haircut, Shampoo & Style</li>
            <li className="circle-bullet">Shampoo and Blow-Dry</li>
            <li className="circle-bullet">Children’s Haircut, Shampoo & Style</li>
            <li className="circle-bullet">Men one-step color</li>
            <li className="circle-bullet">Women one-step color</li>
            <li className="circle-bullet">Two Step Color (Bleach & Tone)</li>
            <li className="circle-bullet">Partial Highlights & Blow Out</li>
            <li className="circle-bullet">Full Highlights & Blow Out</li>
          </ul>
        </div>

      </div>
      <div className='flower-img-container'>
        <img src={Flower} alt="" />
      </div>
    </div>

    <div className='reverse_service_card'>
    <div className='flower-img-container'>
        <img src={Flower} alt="" />
      </div>
      <div className='m'>
        <div className='text-container'>
          <h4 className="tittle-circle-bullet">NEW SERVICES</h4>
          <ul  className='menu_list'>        
          <li className="circle-bullet">Keratin Express Treatment</li>
          <li className="circle-bullet">Keratin Full Smoothing Treatment</li>
          <li className="circle-bullet">Four-Step Deep Conditioning Mask</li>
          <li className="circle-bullet">Balayage Color</li>
          <li className="circle-bullet">Ombre Color</li>
          <li className="circle-bullet">Sombre Color</li>
          <li className="circle-bullet">Baby Lights Color</li>
          <li className="circle-bullet">Express Brazilian Blowout Smoothing Treatment</li>
          <li className="circle-bullet">Brazilian Blowout Demi Permanent Conditioner</li>

          </ul>
        </div>

      </div>

    </div>

    <div className='service_card'>
      <div className='m'>
        <div className='text-container'>
          <h4 className="tittle-circle-bullet">WAXING SERVICES</h4>
          <ul  className='menu_list'>        
          <li className="circle-bullet">Keratin Express Treatment</li>
        <li className="circle-bullet">Keratin Full Smoothing Treatment</li>
        <li className="circle-bullet">Four-Step Deep Conditioning Mask</li>
        <li className="circle-bullet">Balayage Color</li>
        <li className="circle-bullet">Ombre Color</li>
        <li className="circle-bullet">Sombre Color</li>
        <li className="circle-bullet">Baby Lights Color</li>
        <li className="circle-bullet">Express Brazilian Blowout Smoothing Treatment</li>
        <li className="circle-bullet">Brazilian Blowout Demi Permanent Conditioner</li>
          </ul>
        </div>

      </div>
      <div className='flower-img-container'>
        <img src={Flower} alt="" />
      </div>
    </div>

      <AppointmentSection/>
      <SalonInfo/>
  </div>
  )
}
