import React from 'react';
import styled from 'styled-components';
import SubscribeMagazine from './subscribeMagazine';
import InputEmail from './inputEmail';
import Sns from './sns';
import Info from './info';

const Footer = () => {
  return (
    <IndexDiv>
      <SubscribeMagazine />
      <InputEmail />
      <Sns />
      <Info />
    </IndexDiv>
  );
};
const IndexDiv = styled.div`
  overflow-x: hidden;
  overflow-y: auto;
`;

export default Footer;
