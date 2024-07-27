import './scrolltop.css'
import React, {useState} from 'react';
import {FaArrowCircleUp} from 'react-icons/fa';
import CTA from '../CTA/CTA'


const ScrollTop = () => {

  const [visible, setVisible] = useState(false) 
  
  const toggleVisible = () => { 
    const scrolled = document.documentElement.scrollTop; 
    if (scrolled > 300){ 
      setVisible(true) 
    }  
    else if (scrolled <= 300){ 
      setVisible(false) 
    } 
  }; 
  
  const scrollToTop = () =>{ 
    window.scrollTo({ 
      top: 0,  
      behavior: 'smooth'
    }); 
  }; 
  
  window.addEventListener('scroll', toggleVisible); 
  
  return ( 
    <div className='scroll__btn'>
    <button className='top'>
      <CTA elem={ <FaArrowCircleUp onClick={scrollToTop}  
     style={{display: visible ? 'inline' : 'none'}} /> }/>
    </button>
    </div>
  ); 

} 


export default ScrollTop