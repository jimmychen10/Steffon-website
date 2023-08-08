import React from 'react'

import Team from "../Components/Team/team.js"
import Navigation_bar from '../Components/NavBar/Navigation_bar.js'
import SalonInfo from '../Components/Salon/SalonInfo.js'


export default function OurTeam() {
  return (
    <div>
      <Navigation_bar/>
      <Team />
      <SalonInfo/>
    </div>
  )
}
