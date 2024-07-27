import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import CTA from '../../componets/CTA/CTA'
import './regist.css'
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'

const Regist = () => {

  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
    
    const user = {email, password} 

    fetch('http://localhost:8000/users', {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(user)
    })
    .then(() => {
      history.push('/Login')
    })

  }

  return (
    <div className='regist'>
      <div className="regist__wrapper" >
        <div className="regist__top">
          <div className="regist__logo">
            <h6>CactusFlix</h6>
          </div>
          <Link to='/Login'>
            <CTA a='Si' b='gn' c=' In'/>
          </Link>
        </div>
        <div className="regist__container">
          <h1>Unlimidet movies, TV shows, and more.</h1>
          <h2>Watch anywhere. Cancel anytime.</h2>
          <p>Ready to watch? Enter your email to creat or restart your membership.</p>
          <form className='input' onSubmit={handleSubmit}>
            <label>Sign Up</label>
              <input type="email" value={email} required placeholder='email address' onChange={(e) => setEmail(e.target.value)} />
              <input type="password" placeholder='password'value={password} required onChange={(e) => setPassword(e.target.value)} />
              <button className='regist__button'>
                <CTA a='St' b='a' c='rt'/>
              </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Regist;