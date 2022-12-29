import React from 'react'
import './testimonials.css'
import {feedback} from '../../constant'
const Testimonials = () => {
  return (
    <div className='app_testimonials section__padding'>
      <div className='app__testimonials-header'>
        <h4>What people are saying about us</h4>
        <p>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
      </div>
      <div className='app__testimonials-people'>
        {feedback.map( item => (
          <div className='app__testimonials-people_container' key={item.id}>
            <div className='app__testimonials-people_container-heading'>
              <img src={item.img}/>
              <div>
                <h4>{item.name}</h4>
                <p>{item.title}</p>
              </div>
            </div>
            <div className='app__testimonials-people_container-content'>{item.content}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Testimonials