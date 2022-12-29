import React from 'react'
import './stats.css'
import { stats } from '../../constant'
const Stats = () => {
  return (
    <div className='app__stats section_padding'>
      {stats.map(stat =>(
        <div className='app__stats-container'>
          <p>{stat.value}</p>
          <h4>{stat.title}</h4>
        </div>
      ))}
    </div>
  )
}

export default Stats