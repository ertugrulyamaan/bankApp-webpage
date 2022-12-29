import React from 'react'
import './footer.css'
import logo from '../../assets/logo.svg'
import { BsInstagram, BsGithub, BsLinkedin, BsTwitter } from 'react-icons/bs'
const Footer = () => {
  return (
    <footer className='app__footer section_padding'>
      <div className='app__footer-container'>
        <div className='app__footer-container-img'>
          <img src={logo} alt="logo" />
          <h4>A new way to make the payments easy, reliable and secure.</h4>
        </div>
        <ul>
          <h5>Useful Links</h5>
          <li>Content</li>
          <li>How it Works</li>
          <li>Create</li>
          <li>Explore</li>
          <li>Terms & Services</li>
        </ul>
        <ul>
          <h5>Community</h5>
          <li>Help Center</li>
          <li>Partners</li>
          <li>Suggestions</li>
          <li>Blog</li>
          <li>Newsletter</li>
        </ul>
        <ul>
          <h5>Partner</h5>
          <li>Our Partner</li>
          <li>Become a Partner</li>
        </ul>
      </div>
      <div className='app__footer-end'>
        <h4>© 2022 HooBank. All Right Reserved.</h4>
        <div className='app__footer-end_links'>
          <a href='https://github.com/ertugrulyamaan'>
              <BsGithub  color='#fff' size={20} style={{marginRight:"1rem"}}/>
          </a>
          <a href='https://www.linkedin.com/in/ertugrul-yaman-developer/'>
            <BsLinkedin  color='#fff' size={20} style={{marginRight:"1rem"}}/>
          </a>
          <a href="#">
            <BsInstagram color='#fff' size={20} style={{marginRight:"1rem"}}/>
          </a>
          <a href='#'>
            <BsTwitter   color='#fff' size={20} style={{marginRight:"1rem"}}/>
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer