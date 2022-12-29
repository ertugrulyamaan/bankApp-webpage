import React from 'react'
import './clients.css'
import { clients } from '../../constant'
const Clients = () => {
  return (
    <div className='app__clients section__padding' id='clients'>
      {clients.map(client => (
        <div className='app__clients-container' key={client.id}><img src={client.logo}/></div>
      ))}
    </div>
  )
}

export default Clients