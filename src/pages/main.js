import React from 'react';

import OurStory from '../components/Main/OurStory';
import MainPage from '../components/Main/MainPage';
import ProductPage from '../components/Main/ProductPage';
import BrandPage from '../components/Main/BrandPage';
import MagazinePage from '../components/Main/MagazinePage';

const Main = () => {
  return (
    <div>
      <MainPage />
      <ProductPage />
      <BrandPage />
      <MagazinePage />
      <OurStory />
    </div>
  );
};

export default Main;
