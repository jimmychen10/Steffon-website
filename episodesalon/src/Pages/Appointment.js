import React from 'react';
import Navigation_bar from '../Components/NavBar/Navigation_bar';
import SalonInfo from '../Components/Salon/SalonInfo';
import AppointmentSection from '../Components/AppointmentSection/AppointmentSection.js'; // Import the new component

export default function App() {
  return (
    <div>
      <Navigation_bar />
      <AppointmentSection /> 
      <SalonInfo />
    </div>
  );
}
