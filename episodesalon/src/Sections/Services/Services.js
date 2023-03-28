import React from 'react'
import Service_card from '../../Components/Services/Service_card'

export default function Services() {

    const services = [
        {
            title: "Haircuts and styling",
            description:"Our experienced stylists will work with you to create a haircut and style that enhances your natural features and fits your unique style. Whether you want a classic cut or a trendy new look, we have the expertise to make it happen"
        },
        {
            title: "Hair coloring and highlights",
            description:"Want to switch up your hair color? Our salon offers a variety of hair coloring and highlighting services to help you achieve the perfect shade. From bold and bright to natural and subtle, we'll work with you to create a customized look that flatters your skin tone and brings out your best features."

        },
        {
            title: "Hair treatments",
            description:"Healthy hair starts with proper care, and our salon offers a variety of hair treatments to keep your locks looking their best. From deep conditioning treatments to scalp massages, we'll help you keep your hair hydrated, nourished, and strong. We also offer treatments to address specific hair concerns, such as dandruff or damage from heat styling. With our hair treatments, you'll have hair that looks and feels amazing."

        },
        {
            title: "Hair extensions",
            description: "If you're looking for longer, fuller hair, our hair extension services may be just what you need. We use high-quality, natural-looking extensions to add length and volume to your hair, giving you the look you've always wanted."
        },
        {
            title: "Eyelash extensions",
            description:"Enhance your natural beauty with our eyelash extensions! Our experienced lash artists use high-quality lashes to create a custom look that's perfect for you. Whether you want a subtle enhancement or a dramatic flair, we can help you achieve the look you desire."
        },
        {
            title: "Nail services",
            description: "Our nail services are designed to pamper and beautify your hands and feet, leaving them feeling soft, smooth, and polished. Our skilled technicians are passionate about providing you with the best nail care experience possible, using high-quality products and tools to ensure your satisfaction. "
        },
        {
            title: "Waxing Services",
            description:"Looking for silky smooth skin that lasts longer than shaving? Our waxing services have got you covered! Our experienced and licensed estheticians use high-quality wax to remove hair from the root, leaving your skin hair-free and smooth for weeks."
        }
        
    ]

  return (
    <div>
        {
            services.map((service) =>{
                return(
                    <Service_card service = {service}/>
                )
            }
               
            )
        }


    </div>
  )
}
