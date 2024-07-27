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
      <video src={process.env.PUBLIC_URL + 'trailer-nobody.mp4'} autoPlay controls progress/>
    </div>
  )
}

export default Watch