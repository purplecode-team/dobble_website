import React from 'react';

import OurStory from '../components/Main/OurStory';
import MainPage from '../components/Main/MainPage';
import ProductPage from '../components/Main/ProductPage';
import BrandPage from '../components/Main/BrandPage';
import MagazinePage from '../components/Main/MagazinePage';
import Subscribe from '../components/Main/Subscribe';
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
