import React from "react";
import "./Hero.css";
import shopping from '../../assets/p8.webp'

function Hero() {
  return (
    <section className="hero">
      <div className="hero-left">
        <h1>Discover the Latest Trends</h1>
        <p>Shop Men, Women & Kids Collections at the Best Prices</p>
        <button className="shop-btn">🛍️ Shop Now</button>
      </div>

      <div className="hero-right">
        <img
          src={shopping}  alt="Shopping Fashion" />
      </div>
    </section>
  );
}

export default Hero;
