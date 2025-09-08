import React, { useState, useContext } from 'react';
import './Navbar.css';
import logo from '../assets/logo.png';
import cartLogo from '../assets/cartLogo.webp';
import { Link } from 'react-router-dom';
import { ShopContext } from '../Context/ShopContext';

function Navbar() {
  const [menu, setMenu] = useState("home");

  // Get cart items from context
  const { cartItems } = useContext(ShopContext);

  // Calculate total quantity in cart
  const totalItems = Object.values(cartItems).reduce((sum, qty) => sum + qty, 0);

  return (
    <div className='navbar'>
      <div className="nav-logo"> 
        <img src={logo} alt="logo" height="100px"/>
      </div>

      <ul className='nav-menu'>
        <li onClick={() => setMenu("home")}>
          <Link style={{ textDecoration: "none", color: "white" }} to="/">Home</Link>
          {menu === "home" && <hr />}
        </li>
        <li onClick={() => setMenu("men")}>
          <Link style={{ textDecoration: "none", color: "white" }} to="/mens/1">Men</Link>
          {menu === "men" && <hr />}
        </li>
        <li onClick={() => setMenu("women")}>
          <Link style={{ textDecoration: "none", color: "white" }} to="/womens/1">Women</Link>
          {menu === "women" && <hr />}
        </li>
        <li onClick={() => setMenu("kids")}>
          <Link style={{ textDecoration: "none", color: "white" }} to="/kids/1">Kids</Link>
          {menu === "kids" && <hr />}
        </li>
      </ul>

      <div className="nav-login">
        <Link to="/login">
          <button>Login</button>
        </Link>

        <Link to="/cart" className="cart-container">
          <img src={cartLogo} alt="cart" />
          {totalItems > 0 && (
            <div className="nav-cart-count">{totalItems}</div>
          )}
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
