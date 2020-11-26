import React from 'react';
import styled from 'styled-components';
import Menu from './Menu';
import Logo from './Logo';

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
  background-color: white;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  display: flex;
  z-index: 10;
`;

const HeaderBox = styled.div`
  padding-top: 20px;
  display: flex;
  align-items: center;
  width: 100vw;
  height: 100%;
  margin-right: 20px;
  margin-left: 20px;
`;

export default Header;
