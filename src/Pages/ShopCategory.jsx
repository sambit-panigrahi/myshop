// src/pages/ShopCategory.jsx
import React, { useContext } from 'react';
import '../CSS/ShopCategory.css';
import { ShopContext } from '../Context/ShopContext.jsx';
import dropdown_icon from '../assets/dropdown_icon.png';
import Item from '../components/Items/Item.jsx';

const ShopCategory = ({ banner, category }) => {
  const { all_product } = useContext(ShopContext);

  const filtered = all_product.filter(
    (p) => String(p.category).toLowerCase() === String(category).toLowerCase()
  );

    console.log("Category from props:", category);
  console.log("All products:", all_product);
  console.log("Filtered products:", filtered);

  return (
    <div className='shop-category'>
      <img className='shopcategory-banner' src={banner} alt="" />

      <div className='shopcategory-indexSort'>
        <div className='shopcategory-index'>
          1-{filtered.length} of {filtered.length} items
        </div>
        <p>
          <span>Showing {Math.min(12, filtered.length)}</span> out of {filtered.length} products
        </p>
        <div className='shopcategory-sort'>
          sort by <img src={dropdown_icon} alt="" height="20px" />
        </div>
      </div>

      <div className="shopcategory-product">
        {filtered.map((item) => (
          <Item
            key={item.id}
            id={item.id}
            name={item.name}
            img={item.image}            
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))}
      </div>

      <div className="shopcategory-loadmore">Explore More</div>
    </div>
  );
};
export default ShopCategory;
