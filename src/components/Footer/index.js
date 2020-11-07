import React from 'react';
import SubscribeMagazine from './subscribeMagazine';
import InputEmail from './inputEmail';
import Sns from './sns';
import Dot from './dot';
import Info from './info';

const Footer = () => {
  return (
    <div>
      <SubscribeMagazine />
      <InputEmail />
      <Sns />
      <Dot />
      <Info />
    </div>
  );
};

export default Footer;
