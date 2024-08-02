import './watch.css'
import React from 'react'
import { BsArrowReturnLeft } from 'react-icons/bs'

const Watch = () => {
  return (
    <div className='watch'>
      <div className="backtohome">
        <a href="/">
          <BsArrowReturnLeft className='watch__icon' />
        </a>
          Home    
      </div>
      <video src='https://www.youtube.com/watch?v=hXzcyx9V0xw' autoPlay controls progress/>
    </div>
  )
}

export default Watch