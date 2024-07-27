import React from 'react'
import './footer.css'
import { BsFacebook } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'
import { BsTwitterX } from 'react-icons/bs'
import { BsYoutube } from 'react-icons/bs'
import ScrollTop from '../scrolltop/ScrollTop'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer__icons">
        <div className='footer__icon'><BsFacebook /></div>
        <div className='footer__icon'><BsInstagram /></div>
        <div className='footer__icon'><BsTwitterX /></div>
        <div className='footer__icon'><BsYoutube /></div>
      </div>
      <ul>
        <li><a href="">Audio Description</a></li>
        <li><a href="">Help Center</a></li>
        <li><a href="">Gift Cards</a></li>
        <li><a href="">Media Center</a></li>
        <li><a href="">investor Relations</a></li>
        <li><a href="">Jobs</a></li>
        <li><a href="">Terms of Use</a></li>
        <li><a href="">Privace</a></li>
        <li><a href="">Legal Notice</a></li>
        <li><a href="">Cookie Preferences</a></li>
        <li><a href="">Corporate Information</a></li>
        <li><a href="">Contact Us</a></li>
      </ul>
      <p className="footer__copyright">© 2024 Cactusflix, Inc.</p>
      <ScrollTop />
    </div>
  )
}

export default Footer