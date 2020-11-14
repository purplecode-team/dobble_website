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
  height: 40px;
  margin-right: auto;
`;

const LogoImg = styled.img`
  width: 73.75px;
  height: 25px;
`;
export default Logo;
