import React from 'react'
import './RelatedProduct.css'
import Item from '../Items/Item'
import data_product from '../../assets/data'

const RelatedProduct = () => {
  return (
    <div className='relatedProduct'>
      <h1>RelatedProduct</h1>

      <div className="relatedproduct-item">
        {data_product.map((item,i) => {
            return <Item
            key={i}
            id={item.id}
            name={item.name}
            img={item.img}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        })}
      </div>
    </div>
  )
}

export default RelatedProduct
