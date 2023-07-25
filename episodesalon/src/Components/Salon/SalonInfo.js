import React from 'react'

export default function SalonInfo() {
  return (
    <div className='container px-20 lg:px-70'>
      <div className='grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-10  pt-8'>    
        <div className="">
          <div className='subcard pb-4 futuraFont'>
            <h1 className='pb-4 didotFont text-3xl italic'>Address</h1>
            <p>1360 Church Street</p>
            <p>San Francisco, CA 94114</p>
          </div>
          <div className='subcard pb-4 futuraFont'>
            <h1 className='pb-4 didotFont text-3xl italic'>Opening Hours</h1>
            <div className='leading-10'>
            <div class="flex items-center ">
              <p class=" font-semibold">Tues - Fri</p>
              <p class="text-gray-600 ml-4 ">10:00 am – 8:00 pm</p>
              <div></div>
            </div>
              <p>Sat - Sun 9:30 am – 7:30 pm</p>
              <p>Monday Closed</p>
            </div>
          </div>
          <div className='subcard pb-4 futuraFont'>
            <h1 className='pb-4 didotFont text-3xl italic'>Contact</h1>
            <p>415-641-1138</p>
            <p>info@mysite.com</p>
          </div>
        </div>

        <div className="">
          <div className='subcard pb-4'>
            <h1 className='pb-4 didotFont text-3xl italic'>Cancellation Policy</h1>
            <p className='leading-7 futuraFont'>Please understand that appointments canceled without giving enough notice
              (less than 24 hours), we miss the opportunity to fill in that appointment
              time and clients on our waiting list miss the opportunity to receive services.
              Since the services are reserved for you personally, a 50% cancellation fee will
              apply to your Credit Card.
            </p>
          </div>
          <div className='subcard pb-4'>
            <p className='leading-7 futuraFont'>Same day cancellations, or last minute cancellations, or “no shows” will be charged
              50% on your credit card from the full service price scheduled. Repeated cancellations
              without adequate 24 hours prior notice (more than 5 times) our Episode Salon & Spa will
              not be able to schedule any more appointments for you. Thank you & Appreciate for your
              understanding.
            </p>
          </div>
        </div>

        <div className="">
          <div className='subcard pb-4'>
            <h1 className='pb-4 didotFont text-3xl italic'>Service Redo</h1>
            <p className='leading-7 futuraFont'>Services received cannot be refunded. If you are not satisfied with the work performed,
              we require that you return to our salon so that your hair can be visually inspected within
              7 days. At that time, we will make every effort to correct any problems to your satisfaction
              by rescheduling you with the stylist who performed the initial service, at no additional charge
              to you. We will be happy to adjust any service 1 time within 7 days of your original service.
              Thank You.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
