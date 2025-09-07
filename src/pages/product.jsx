// src/pages/Product.jsx
import React, { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import { useParams } from 'react-router-dom';
import BredCrums from '../components/BredCrums/BredCrums';
import ProductDisplay from '../components/ProductDisplay/ProductDisplay';
import Description from '../components/Description/Description';
import RelatedProduct from '../components/RelatedProduct/RelatedProduct';

const Product = () => {
  const { productId } = useParams();
  const { all_product } = useContext(ShopContext);

  const product = all_product.find(p => Number(p.id) === Number(productId));

  if (!product) {
    return <div style={{ padding: 24 }}>Product not found…</div>;
  }

  return (
    <div>
      <BredCrums product={product} />
      <ProductDisplay product={product} />
      <Description />
      <RelatedProduct />
    </div>
  );
};
export default Product;
