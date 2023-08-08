import React from 'react';
import Service_card from '../../Components/Services/Service_card';

import Hair from "../../Assests/Hair.png"
import HairColor from "../../Assests/HairColor.png"
import Tools from "../../Assests/Tools.png"
import Wax from "../../Assests/Wax.png"
import Chair from "../../Assests/Chair.png"
import Eyelash from "../../Assests/Eyelash.png"
import { BrowserRouter, Route, Link } from "react-router-dom";

import "./Services.styles.scss"

export default function Services() {
  const services = [
    {
      icon: Hair,
      title: 'Haircuts & Styling',
      description:
        'Our experienced stylists will work with you to create a haircut and style that enhances your natural features and fits your unique style. Whether you want a classic cut or a trendy new look, we have the expertise to make it happen',
    },
    {
      icon: HairColor,
      title: 'Coloring and Highlights',
      description:
        "Want to switch up your hair color? Our salon offers a variety of hair coloring and highlighting services to help you achieve the perfect shade. From bold and bright to natural and subtle, we'll work with you to create a customized look that flatters your skin tone and brings out your best features.",
    },
    {
      icon: Tools,
      title: 'Hair Treatments',
      description:
        "Unlock Your Confidence: Embrace a Hair Transformation That Commands Attention and Become the Center of Envy with Revitalized Locks Radiating Renewed Confidence, Ushering You into a New Chapter of Unforgettable Beauty.",
    },

  ];

  return (
    <div className='service'>
    <h2>Services</h2> 
    <p className='service_intro'>Provide a general description of the items below and introduce the services you offer. Click on the text box to edit the content. </p>

      <div className='service-container'>

  
        {services.map((service, index) => (
          <Service_card key={index} service={service} />
        ))}
        </div>
      
        <div className='button'><Link to="/"  >Other Services</Link></div>
          
    </div>
  );
}

// export default function Services() {
//   const services = [
//     {
//       icon: Hair,
//       title: 'Haircuts and styling',
//       description:
//         'Our experienced stylists will work with you to create a haircut and style that enhances your natural features and fits your unique style. Whether you want a classic cut or a trendy new look, we have the expertise to make it happen',
//     },
//     {
//       icon: HairColor,
//       title: 'Hair coloring and highlights',
//       description:
//         "Want to switch up your hair color? Our salon offers a variety of hair coloring and highlighting services to help you achieve the perfect shade. From bold and bright to natural and subtle, we'll work with you to create a customized look that flatters your skin tone and brings out your best features.",
//     },
//     {
//       icon: Hair,
//       title: 'Hair treatments',
//       description:
//         'Healthy hair starts with proper care, and our salon offers a variety of hair treatments to keep your locks looking their best. From deep conditioning treatments to scalp massages, we’ll help you keep your hair hydrated, nourished, and strong. We also offer treatments to address specific hair concerns, such as dandruff or damage from heat styling. With our hair treatments, you’ll have hair that looks and feels amazing.',
//     },
//     {
//       icon: Hair,
//       title: 'Hair extensions',
//       description:
//         "If you're looking for longer, fuller hair, our hair extension services may be just what you need. We use high-quality, natural-looking extensions to add length and volume to your hair, giving you the look you've always wanted.",
//     },
//     {
//       icon: Eyelash,
//       title: 'Eyelash extensions',
//       description:
//         'Enhance your natural beauty with our eyelash extensions! Our experienced lash artists use high-quality lashes to create a custom look that’s perfect for you. Whether you want a subtle enhancement or a dramatic flair, we can help you achieve the look you desire.',
//     },
//     {
//       icon: Wax,
//       title: 'Waxing Services',
//       description:
//         'Looking for silky smooth skin that lasts longer than shaving? Our waxing services have got you covered! Our experienced and licensed estheticians use high-quality wax to remove hair from the root, leaving your skin hair-free and smooth for weeks.',
//     },
//   ];

//   return (
//     <div className='service-container'>
//       {services.map((service, index) => (
//         <Service_card key={index} service={service} />
//       ))}
//     </div>
//   );
// }
