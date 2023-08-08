import React from 'react'
import './Hero.styles.scss'

import { BrowserRouter, Route, Link } from "react-router-dom";
// import { Nav, NavLink, NavMenu }
//     from "./NavbarElements";

import Banner from "../../Assests/EPbanner.jpg"

export default function Hero() {
  return (
    <div className='hero_section' > 

    <div className='opening'>
      <h1>EpisodeSalon</h1>
      <p>Experience the ultimate in hair care and styling.</p>
      <div className='button' ><Link to="/">Appointment <span>→</span></Link></div>
    </div>
   
      <img src = {Banner} />
    </div>
  )
}
