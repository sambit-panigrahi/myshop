import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_icon from '../../assets/star_icon.png'
import star_dull_icon from '../../assets/star_dull_icon.png'
import { ShopContext } from '../../Context/ShopContext'

const ProductDisplay =(props) =>{
    const {product} = props;
    const {addToCart} = useContext(ShopContext);

    if (!product) {
  return <div>Product not found</div>;
}

  return (
    <div className='ProductDisplay'>
        <div className="productdisplay-left">
            <div className="productdisplay-img-list">
                <img src={product.image} alt="" height="200px"/> 
                <img src={product.image} alt="" height="200px"/> 
                <img src={product.image} alt="" height="200px"/> 
            </div>
        </div>
        <div className="productdisplay-img">
          <img className='productdisplay-main-image' src={product.image} alt="" height="500px"/>
        </div>
        <div className="productdisplay-right">
          <h1>{product.name}</h1>
          <div className="productdisplay-right-star">
            <img src={star_icon} alt="" height="20px"/>
            <img src={star_icon} alt="" height="20px"/>
            <img src={star_icon} alt="" height="20px"/>
            <img src={star_icon} alt="" height="20px"/>
            <img src={star_dull_icon} alt="" height="20px"/>
            <p>(150)</p>
          </div>
          <div className="productdisplay-right-prices">
            <div className="productdisplay-right-prices-old">
              ${product.old_price}
            </div>

            <div className="productdisplay-right-prices-new">
              ${product.new_price}
            </div>
            <div className="productdisplay-right-description">
              It allows users to browse products by Men, Women, and Kids categories.
              Each product has a dedicated page with images, prices, and details.
              Includes a shopping cart with add/remove functionality.
            </div>
            <div className="productdisplay-right-size">
              <h1>Select Size</h1>
              <div className="productdisplay-right-size">
                <div>S</div>
                <div>M</div>
                <div>L</div>
                <div>XL</div>
                <div>XXL</div>
              </div>
            </div>
            <button onClick={() => {addToCart(product.id)}}>ADD TO CART</button>
            <div className="productdisplay-right-category">
              <span>Category:<span>Women, T-Shirt, Crop Top</span> </span>
              <span>Tags: <span>Model, Latest, Trend Sorts</span> </span>
              
            </div>
          </div>

         
        </div>
    </div>
  )
}

export default ProductDisplay