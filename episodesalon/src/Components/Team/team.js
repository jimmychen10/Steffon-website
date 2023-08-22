import './Team.scss'

import Christy from "../../Assests/Christy_Photo_-removebg-preview.png"
import Steffon from "../../Assests/SteffonV2-removebg-preview.png"
import Onlei from "../../Assests/Onlei_Choi-removebg-preview (1).png"

import React from 'react'

export default function Team() {
    return (
        <div className="pt-20 teamTitle">
            <div className='px-12 text-center'>
                <div className="flex flex-col items-center gap-2 team_intro">
                    <h1 className="sm:text-lg lg:text-2xl pt-20">Meet the Team</h1>
                    <div className='pt-6'>
                        <div className="w-8 h-1 bg-black"></div>
                    </div>
                    <p className="pt-10 sm:text-sm lg:text-lg">Meet the Experts </p>
                </div>
            </div>
            <div className='px-20 '>
                <div className="pt-10 py-10 flex justify-center">
                    <div className=" team-container">
                        <div className="card  ">
                            <img className="mx-auto" src="Christy.png" />
                            <h2 className='creating-gap futuraFont'>Hair Stylist</h2>
                            <h2 className="didotFont text-xl italic pt-2">Christy</h2>
                            <p className='creating-gap futuraFont'>Introducing Christy, a talented hair + lash stylist with 14+ years of experience.
                                Specializing in haircuts, balayage color, Keratin Treatments, Brazilian Blow Outs,
                                waxing, and lash extensions. With her creative eye and attention to detail, Christy
                                provides personalized experiences tailored to each client's unique needs and style.
                                Achieve smoother, more manageable hair or beautiful, full lashes with her expert
                                techniques. Book an appointment with Christy today for a stunning transformation!
                            </p>
                        </div>
                        <div className="card">
                            <img className="mx-auto" src="SteffonV2-removebg-preview(2).png" />
                            <h2 className='creating-gap futuraFont'>Master Hair Stylist</h2>
                            <h2 className="didotFont text-xl italic pt-2">Steffon</h2>
                            <p className='creating-gap futuraFont'>Introducing Steffon, our master hair stylist with 25+ years of experience. He specializes
                                in Vidal Sassoon techniques, Balayage Color, and is certified in Keratin Smoothing Treatment
                                & Brazilian Blow Out. Steffon offers personalized looks and educates clients on hair care,
                                lash lift and tint, and faux mint lash extensions. His expertise and communication skills make
                                clients comfortable and confident. Trust Steffon to take your hair or lashes to the next level!
                            </p>
                        </div>
                        <div className="card">
                            <img className="mx-auto" src="Alexa.png" />
                            <h2 className='creating-gap futuraFont'>Product Manager</h2>
                            <h2 className="didotFont text-xl italic pt-2">Onlei</h2>
                            <p className='creating-gap futuraFont'>Meet Onlei, a highly talented stylist with over 29 years of experience in the beauty industry.
                                Specializing in hair color, haircuts, Brazilian blowouts, keratin treatments, massage, waxing, and updos, Onlei provides top-notch
                                services to her clients. With her expert knowledge and creativity, she can create customized looks that perfectly complement each
                                client's skin tone and features. Book an appointment with Onlei today and experience the ultimate in hair and beauty services!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


