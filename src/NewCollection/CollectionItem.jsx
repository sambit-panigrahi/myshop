// CollectionItem.js
import React from 'react';
import './NewCollection.css'; // use same CSS file

function CollectionItem({ name, image, new_price, old_price }) {
  return (
    <div className="collection-item">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>
        <span className="new-price">${new_price}</span>
        <span className="old-price">${old_price}</span>
      </p>
      <button className="buy-btn">Buy Now</button>
    </div>
  );
}

export default CollectionItem;
