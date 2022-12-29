import React from 'react'
import './cta.css'
const Cta = () => {
  return (
    <div className='app__cta section__padding'>
      <div className='app__cta-container'>
        <div className='app__cta-container_heading'>
          <h4>Let's try our service now!</h4>
          <p>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
        </div>
        <div className='app__cta-container_button'>
          <button type='button' className='custom-button'>Get Started</button>
        </div>
      </div>
    </div>
  )
}

export default Cta