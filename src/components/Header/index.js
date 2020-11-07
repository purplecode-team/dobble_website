import React from 'react';
import styled from 'styled-components';
import Menu from './menu';
import Logo from './logo';

const Header = () => {
  return (
    <HeaderSection>
      <HeaderBox>
        <Logo />
        <Menu />
      </HeaderBox>
    </HeaderSection>
  );
};

const HeaderSection = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 52px;
  display: flex;
  z-index: 10;
  padding: 0 1rem;
`;

const HeaderBox = styled.div`
  padding-top: 20px;
  display: flex;
  align-items: center;
  width: 95vw;
  height: 100%;
  margin-right: auto;
  margin-left: 20px;
`;

export default Header;
