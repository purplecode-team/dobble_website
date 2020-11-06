import React from 'react';
import styled from 'styled-components';
import Menu from './menu';
import Logo from './logo';

const Header = () => {
  return (
    <HeaderBox>
      <Logo />
      <Menu />
    </HeaderBox>
  );
};

const HeaderBox = styled.div`
  position: fixed;
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
`;

export default Header;
