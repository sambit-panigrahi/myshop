// src/Context/ShopContext.jsx
import React, { createContext, useState } from "react";
import all_product from "../assets/all_product";

// create context
export const ShopContext = createContext();
  const getDefaultCart = () => {
    let cart = {};
    for(let index = 0; index < all_product.length+1; index++)
      cart [index] = 0 

    return cart;
  }
  

// provider component
export const ShopProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(getDefaultCart())
  

  const addToCart = (itemId) => {
    setCartItems((prev) => ({...prev, [itemId]: prev[itemId]+1}))
  }
  console.log(cartItems);


  const removeFromcart = (itemId) => {
    setCartItems((prev) => ({...prev, [itemId]: prev[itemId]-1}))
  }


  const getTotalCartAmount = ()=> {
    let totalAmount = 0;
    for (const item in cartItems){
      if(cartItems[item] > 0){
        let itemInfo = all_product.find((product) => product.id === Number(item))
        totalAmount += itemInfo.new_price * cartItems[item];
      } 
    }
    return totalAmount;
  }
const [products, setProducts] = useState( all_product);

  return (
    <ShopContext.Provider value={{ all_product: products, addToCart, removeFromcart, cartItems, getTotalCartAmount   }}>
      {children}
    </ShopContext.Provider>
  );
};

