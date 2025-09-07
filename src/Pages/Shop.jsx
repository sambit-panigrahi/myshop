// src/pages/Shop.jsx
import React, { useContext } from "react";
import Popular from "../components/popular/Popular";
import Hero from "../components/hero/Hero";
import Offers from "../components/Offers/Offers";
import NewCollection from "../NewCollection/NewCollection";
import NewsLetter from "../components/NewsLetter/NewsLetter";
import { ShopContext } from "../Context/ShopContext";
import Item from "../components/Items/Item";

function Shop() {
  const { all_product } = useContext(ShopContext);

  return (
    <div>
      <Hero />
      <Popular />
      <Offers />
      <NewCollection />
      {/* Quick sanity check grid to show EVERYTHING */}
      <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(180px, 1fr))', gap:16, padding:'24px 16px'}}>
        {all_product.map((p) => (
          <Item
            key={p.id}
            id={p.id}
            name={p.name}
            img={p.image}             
            new_price={p.new_price}
            old_price={p.old_price}
          />
        ))}
      </div>
      <NewsLetter />
    </div>
  );
}
export default Shop;
