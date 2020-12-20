import React from 'react';
import BrandPage from '../components/Brand';
import { useScrollTop } from '../utils/scrollTop';

const Brand = () => {
  useScrollTop(true);

  return (
    <div>
      <BrandPage />
    </div>
  );
};

export default Brand;
