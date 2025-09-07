// src/components/BredCrums/BredCrums.jsx
import React from 'react';
import './BredCrums.css';
import arrow_icon from '../../assets/arrow_icon.png';

const Bredcrums = ({ product }) => {
  if (!product) return null;
  return (
    <div className='bredcrums'>
      Home <img src={arrow_icon} alt="" height="10px" />
      Shop <img src={arrow_icon} alt="" height="10px" />
      {product.category} <img src={arrow_icon} alt="" height="10px" />
      {product.name}
    </div>
  );
};
export default Bredcrums;
