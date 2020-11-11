import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Hamburger from '../img/hamburger.png';
import Heart from '../img/heart.png';
import MyPage from '../img/mypage.png';
import Search from '../img/search.png';
import HamburgerMenu from './HamburgerMenu';

const Menu = () => {
  const [open, setOpen] = useState(true);
  const toggleHamburger = () => {
    setOpen(!open);
  };

  return (
    <IconSection>
      <IconDiv mobile>
        <Link to="/myPage">
          <Img src={MyPage} alt="myPage_icon" />
        </Link>
      </IconDiv>
      <IconDiv mobile>
        <Link to="/basket">
          <Img src={Heart} alt="basket_icon" />
        </Link>
      </IconDiv>
      <IconDiv mobile>
        <Img src={Search} alt="search_icon" />
      </IconDiv>
      <IconDiv>
        <Img src={Hamburger} alt="hamburger_icon" onClick={() => toggleHamburger()} />
      </IconDiv>
      <HamburgerMenu open={open} toggleHamburger={toggleHamburger} />
    </IconSection>
  );
};

const IconSection = styled.div`
  height: 40px;
`;

const IconDiv = styled.div`
  margin-left: 35px;
  display: flex;
  align-items: center;
  float: left;

  @media (max-width: 768px) {
    ${(props) =>
      props.mobile &&
      `
    display: none;
  `}
  }
`;

const Img = styled.img`
  width: 20px;
  height: 20px;
  cursor: pointer;
  @media (max-width: 768px) {
    width: 30px;
    height: 30px;
  }
`;

export default Menu;
