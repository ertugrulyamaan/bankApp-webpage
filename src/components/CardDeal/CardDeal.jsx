import React from 'react'
import './carddeal.css'
import card from '../../assets/card.png'
const CardDeal = () => {
  return (
    <div className='app__carddeal section__padding' id='product'>
      <div className='app__carddeal-container'>
        <h4>Find a better card deal in few easy steps.</h4>
        <p>These trees are so much fun. I get started on them and I have a hard time stopping. This is gonna be a happy little seascape. Those great big fluffy clouds. That is when you can experience true joy, when you have no fear.</p>
        <button className='custom-button'>Get Started</button>
      </div>
      <div className='app__carddeal-img'>
        <img src={card} alt='card-img'/>
      </div>
    </div>
  )
}

export default CardDeal