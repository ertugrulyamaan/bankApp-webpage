import React, { useState } from 'react'
import './navbar.css'
import {BiSad,BiHappy} from 'react-icons/bi'
import logo from '../../assets/logo.svg'
const Navbar = () => {
  const [toggle,setToggle] = useState(false)

  const toggleHandle = ()=> {
    setToggle((prev)=>!prev)
  }


  return (
    <nav className='app__navbar section__padding'>
      <div className='app__navbar-img'>
        <img src={logo} alt="logo"/>
      </div>
      <div className='app__navbar-links'>
        <a href="#home">Home</a>
        <a href="#features">Features</a>
        <a href="#product">Product</a>
        <a href="#clients">Clients</a>
      </div>

      <div className='app__navbar-menu'>
        {toggle 
        ? <BiSad color='#fff' size={30} onClick={toggleHandle}/> 
        : <BiHappy color='#fff'size={30} onClick={toggleHandle}/>
        }
        {toggle &&  <div className='app__navbar-menu_links'>
        <a href="#home">Home</a>
        <a href="#features">Features</a>
        <a href="#product">Product</a>
        <a href="#clients">Clients</a>
      </div>}
        
      </div>
    </nav>
  )
}

export default Navbar