import React from 'react'

import "./Service_card.scss"

export default function Service_card(props) {
    const id = props.key
    const { icon,title, description} = props.service;
  return (
    <div id = {id} className="service-card-container" >
        <img src={icon}/>
        <h3>{title}</h3>
        <p className='temp'>{description}</p>
    </div>
  )
}
