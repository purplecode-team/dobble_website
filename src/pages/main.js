import React from 'react';

import OurStory from './Main/OurStory';
import MainPage from './Main/MainPage';
import ProductPage from './Main/ProductPage';
import BrandPage from './Main/BrandPage';
import MagazinePage from './Main/MagazinePage';
import Subscribe from './Main/Subscribe';
import { useScrollTop } from '../utils/scrollTop';

const Main = () => {
  useScrollTop(true);

  return (
    <div>
      <MainPage />
      <ProductPage />
      <BrandPage />
      <MagazinePage />
      <OurStory />
      <Subscribe />
    </div>
  );
};

export default Main;
