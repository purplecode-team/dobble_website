import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import HeaderLogo from '../img/header_logo.png';

const Logo = () => {
  return (
    <LogoSection>
      <Link to="/">
        <LogoImg src={HeaderLogo} alt="header_logo" />
      </Link>
    </LogoSection>
  );
};

const LogoSection = styled.div`
  margin-left: 40px;
  width: 100%;
  height: 40px;
`;

const LogoImg = styled.img`
  width: 118px;
  height: 40px;
`;
export default Logo;
