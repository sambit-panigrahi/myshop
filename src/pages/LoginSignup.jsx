import React from 'react'
import '../CSS/LoginSignup.css'

function LoginSignup() {
  return (
    <div className='login-signup'>
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-field">
          <input type="text" placeholder='Your Name' />
          <input type="email" placeholder='Email Address'/>
          <input type="password" placeholder='Password'/>
          <button>Continue</button>
          <p className='loginsignup-login'>
            Already have an account ? <span>Login Here</span>
          </p>
          <div className='loginsignup-agree'>
            <input type="checkbox" name = '' id= '' />
            <p>By continuing, i agree to the terms of use & privacy policy. </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup
