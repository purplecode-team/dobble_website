import React from 'react';
import styled from 'styled-components';
import Info from './info';

const Footer = () => {
  return (
    <IndexDiv>
      <Info />
    </IndexDiv>
  );
};
const IndexDiv = styled.div`
  margin-top: 60px;
  overflow-x: hidden;
  overflow-y: auto;
`;

export default Footer;
