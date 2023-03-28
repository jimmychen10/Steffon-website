import React from 'react'

export default function Service_card(props) {
    const {id, title, description, icon} = props.service;
  return (
    <div id = {id}>
        <img src={icon}/>
        <h2>{title}</h2>
        <p>{description}</p>
    </div>
  )
}
