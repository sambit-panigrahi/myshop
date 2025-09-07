// src/components/CartItems/CartItems.jsx
import React, { useContext } from 'react'
import './CartItems.css'
import remove_icon from '../../assets/remove.webp'
import { ShopContext } from '../../Context/ShopContext'

const CartItems = () => {
  const { all_product, cartItems, removeFromcart, getTotalCartAmount } =
    useContext(ShopContext)

  return (
    <div className='cartitems'>
      {/* Header */}
      <div className="cartitems-format-main">
        <p>Product</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>

      {/* Cart items */}
      {all_product.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div key={e.id} className="cartitems-format">
              <img src={e.image} alt="" className='cartitems-product-icon' />
              <p>{e.name}</p>
              <p>${e.new_price}</p>
              <button className='cartitems-quantity'>{cartItems[e.id]}</button>
              <p>${e.new_price * cartItems[e.id]}</p>
              <img
                src={remove_icon}
                alt="remove"
                className="cartitems-remove-icon"
                onClick={() => removeFromcart(e.id)}
              />
            </div>
          )
        }
        return null
      })}

      {/* Cart totals + promo code */}
      <div className="cartitem-down">
        <div className="cartitem-total">
          <h1>Cart Totals</h1>
          <div>
            <div className="cartitem-total-item">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <div className="cartitem-total-item">
              <p>Shipping fee</p>
              <p>Free</p>
            </div>
            <div className="cartitem-total-item">
              <p>Total</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <button>PROCEED TO CHECKOUT</button>
          </div>
        </div>

        <div className="cartitem-promocode">
          <p>If you have a promo code, enter it here:</p>
          <div className="cartitem-promobox">
            <input type="text" placeholder="Promo code" />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartItems


