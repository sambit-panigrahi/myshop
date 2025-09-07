import React from "react";
import "./Popular.css";
import Item from "../Items/Item";
import data_product from "../../assets/data";

function Popular() {
  console.log("Popular component is rendering");
  console.log("Data product:", data_product);

  return (
    <div>
        <h1 className="popular">POPULAR IN WOMEN</h1>
    <div className="popular-item">
        
        {data_product.map((item, i) => (
          <Item
            key={i}
            id={item.id}
            name={item.name}
            img={item.img}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))}
      </div>
      
    </div>
  );
}

export default Popular;
