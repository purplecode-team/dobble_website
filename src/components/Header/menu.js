import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Hamburger from '../img/hamburger.png';
import Heart from '../img/heart.png';
import MyPage from '../img/mypage.png';
import Search from '../img/search.png';
import HamburgerMenu from './hamburgerMenu';

const Menu = () => {
  const [open, setOpen] = useState(true);
  const toggleHamburger = () => {
    setOpen(!open);
  };

  return (
    <MenuSection>
      <IconDiv>
        <Link to="/myPage">
          <Img src={MyPage} alt="myPage_icon" />
        </Link>
      </IconDiv>
      <IconDiv>
        <Link to="/basket">
          <Img src={Heart} alt="basket_icon" />
        </Link>
      </IconDiv>
      <IconDiv>
        <Img src={Search} alt="search_icon" />
      </IconDiv>
      <IconDiv>
        <Img src={Hamburger} alt="hamburger_icon" onClick={() => toggleHamburger()} />
      </IconDiv>
      <HamburgerMenu open={open} toggleHamburger={toggleHamburger} />
    </MenuSection>
  );
};

const MenuSection = styled.div`
  padding-top: 10px;
  min-width: 400px;
  margin-right: 15px;
`;

const IconDiv = styled.div`
  height: 30px;
  margin-left: 60px;
  display: flex;
  align-items: center;
  float: left;
`;

const Img = styled.img`
  width: 30px;
  height: 30px;
  cursor: pointer;
`;

export default Menu;
