import React from 'react'
import "./Offers.css"
import offer from '../../assets/exclu.webp'

function Offers() {
  return (
    <div className='offers'>
        <div className="offers-left">
            <h1>Special Offer</h1>
            <h1>Offers For You</h1>
            <p>Get 30% off on your first purchase! Use code FIRST30 at checkout. Limited time offer.</p>
            <button className='offers-btn'>Shop Now</button>
        </div>
        <div className="offers-right">
            <img src={offer} alt="Special Offer" />
        </div>
    </div>
  )
}

export default Offers