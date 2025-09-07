import React from 'react'
import "./NewCollection.css"
import new_collection from '../assets/newcollection.js'
import CollectionItem from './CollectionItem.jsx';

function NewCollection() {
  return (
    <div className="new-collection">
      <h1>NEW COLLECTION</h1>
      <div className="collections">
        {new_collection.map(item => (
          <CollectionItem
            key={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))}
      </div>
    </div>
  );
}

export default NewCollection;
