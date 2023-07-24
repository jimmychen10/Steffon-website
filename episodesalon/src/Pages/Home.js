import React from 'react'

// import './App.scss';
// import Navigation_bar from '././src/Components/NavBar/Navigation_bar.js';
import Hero from '../Sections/Hero/Hero';
// import Forms from '././Sections/Forms/Forms';
// import Footer from '././Components/Footer/Footer';
import AboutMe from '../Sections/AboutMe/AboutMe' 
// import Services from '././Sections/Services/Services';

import Services from '../Sections/Services/Services';

import Navigation_bar from '../Components/NavBar/Navigation_bar.js'

import Team from '../Components/Team/team'

import Salon from '../Components/Salon/SalonInfo'

import Subscribe from '../Components/Subscribe/subscribe'

export default function Home() {
  return (
    // <h1>hi</h1>
    <div className="App">
      <div className='background-image'>
        <Navigation_bar />
        <Hero />
        <Services />
        <Team />
        <Salon />
        <Subscribe/>
      </div>

      <AboutMe/>
      {/* <Services/>
      <Forms/>
      <Footer/> */}
    </div>
  )
}
