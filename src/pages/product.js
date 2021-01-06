import React from 'react';
import ProductPage from '../components/Product';
import { useScrollTop } from '../utils/scrollTop';

const Product = () => {
  useScrollTop(true);

  return (
    <div>
      <ProductPage />
    </div>
  );
};

export default Product;
