import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <div>header</div>
      <div>right_menu</div>
      <div>logo</div>
      <div>left_menu</div>
      <div style={{ padding: 10 }}>
        <Link to="/product">Product</Link>
        <Link to="/brand">Brand</Link>
        <Link to="/login">Login</Link>
        <Link to="/basket">Basket</Link>
      </div>
    </div>
  );
};

export default Header;
