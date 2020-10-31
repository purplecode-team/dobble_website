import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <div>header</div>
      <div>right_menu</div>
      <div>logo</div>
      <div>left_menu</div>
      <div style={{ padding: 10 }}>
        <Link to="/product">
          <LinkStyle href="">Product</LinkStyle>
        </Link>
        <Link to="/brand">Brand</Link>
        <Link to="/login">
          <LinkStyle href="">Login</LinkStyle>
        </Link>
        <Link to="/basket">Basket</Link>
      </div>
    </div>
  );
};

const LinkStyle = styled.a`
  background: blue;
`;

export default Header;
