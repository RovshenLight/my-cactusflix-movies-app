import React from 'react'
import './cta.css'

const CTA = ({ elem, a, b, c }) => {
  return (
    <div>
      <button class='glowing-btn'><span>{elem}</span><span class='glowing-txt'>{ a }<span class='faulty-letter'>{ b }</span>{ c }</span></button>
    </div>
  )
}

export default CTA