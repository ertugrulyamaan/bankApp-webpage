import React from 'react'
import './business.css'
import { features } from '../../constant'
const Business = () => {
  return (
    <div className='app__business' id="features" >
      <div className='app__business-container'>
        <h4>You do the business,we'll handle the money</h4>
        <p>With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit card on the market</p>
        <button type='button' className='custom-button'>Get Started</button>
      </div>
      <div className='app__business-features'>
        {features.map((feature)=> (
          <div key={feature.id} className="app__business-feature">
            <img src={feature.icon} alt="feature-icon"/>
            <div className='app__business-feature_container'>
              <h4>{feature.title}</h4>
              <p>{feature.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Business