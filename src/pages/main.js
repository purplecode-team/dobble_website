import React from 'react';

import OurStory from '../components/Main/OurStory';
import MainPage from '../components/Main/MainPage';
import ProductPage from '../components/Main/ProductPage';

const Main = () => {
  return (
    <div>
      <MainPage />
      <ProductPage />
      <OurStory />
    </div>
  );
};

export default Main;
