import React from 'react'
import './hero.css'
import robot from '../../assets/robot.png'
import discount from '../../assets/Discount.svg'
const Hero = () => {
  return (
    <div className='app__hero section__padding' id='home'>
      <div className='app__hero-img'>
        <img src={robot} alt="robot-img"/> 
      </div>
      <div className='app__hero-container'>
        <div className='app__hero-container_discount'><img src={discount} alt="discount"/>20% Discount for 1 Month Account</div>
        <div className='app__hero-container_header'>
          <h4>The Next Generation Payment Method</h4>
          <p>Our team of experts uses a methodology to identify the credit cards most likely to fit your needs. We examine annual percentages rates,unnusual fees.</p>
        </div>
          <button type='button' className='custom-button'>Get Started</button>
      </div>
    </div>
  )
}

export default Hero