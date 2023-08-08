import React from 'react'
import Navigation_bar from '../Components/NavBar/Navigation_bar';
import SalonInfo from '../Components/Salon/SalonInfo';

import "./Pages_Styles/Policies.scss"

export default function Policies() {
  return (
    <div>
        <Navigation_bar/>

        <h2 style={{padding:"30px"}}>Policies</h2>
        <div className='policies'>
            <div>
                <h3>Need to Cancel</h3>
                <p>
                Please understand that appointments canceled without giving enough notice (less than 24 hours), we miss the opportunity to fill in that appointment time and clients on our waiting list miss the opportunity to receive services. Since the services are reserved for you personally, a 50% cancellation fee will apply to your Credit Card.
                Same day cancellations, or last minute cancellations, or “no shows” will be charged 50% on your credit card from the full service price scheduled. Repeated cancellations without adequate 24 hours prior notice (more than 5 times) our Episode Salon & Spa will not be able to schedule any more appointments for you. Thank you & Appreciate for your understanding.
                </p>
            </div>
            <div>
                <h3>Service Redo</h3>
                <p>
                Services received cannot be refunded. If you are not satisfied with the work performed, we require that you return to our salon so that your hair can be visually inspected within 7 days. At that time, we will make every effort to correct any problems to your satisfaction by rescheduling you with the stylist who performed the initial service, at no additional charge to you. We will be happy to adjust any service 1 time within 7 days of your original service. Thank You.            </p>
            </div>
        </div>

        <SalonInfo/>
    </div>
  )
}
