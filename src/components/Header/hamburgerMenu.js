import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import CloseIcon from '../img/closeIcon.png';
import MenuItem from './MenuItem';
import MyPage from '../img/mypage.png';
import Heart from '../img/heart.png';

const HamburgerMenu = ({ open, toggleHamburger }) => {
  return (
    <MenuDiv open={open}>
      <TopSection>
        <LeftDiv>
          <Link to="/myPage">
            <IconDiv>
              <Icon src={MyPage} alt="mypage" />
              <div>로그인</div>
            </IconDiv>
          </Link>
          <Link to="/basket">
            <IconDiv>
              <Icon src={Heart} alt="heart" />
              <div>찜</div>
            </IconDiv>
          </Link>
        </LeftDiv>
        <XButton onClick={() => toggleHamburger()}>
          <CloseBtn src={CloseIcon} alt="closeBtn" />
        </XButton>
      </TopSection>
      <MidSection>
        <MenuItem />
      </MidSection>
    </MenuDiv>
  );
};

const MenuDiv = styled.div`
  position: fixed;
  align-items: center;
  width: 100vw;
  height: 100vh;
  padding: 0;
  margin: 0;
  left: 0;
  top: 0;
  background: rgb(246, 246, 246);
  z-index: 1;
  display: ${({ open }) => (open ? 'none' : 'block')};
`;

const TopSection = styled.div`
  @media (max-width: 768px) {
    display: flex;
    justify-content: space-between;
    margin: 30px auto;
    margin-bottom: 0;
    width: 70vw;
  }
`;

const MidSection = styled.div`
  width: 100vw;
  margin-top: 60px;
`;

const LeftDiv = styled.div`
  display: none;
  align-items: center;
  width: 50vw;
  @media (max-width: 768px) {
    display: flex;
  }
`;

const Icon = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 10px;
`;

const IconDiv = styled.div`
  margin-right: 20px;
  align-items: center;
  display: flex;
`;

const CloseBtn = styled.img`
  width: 20px;
  height: 20px;
  margin: 20px;
  @media (max-width: 768px) {
    margin: 0;
  }
`;

const XButton = styled.div`
  float: right;
  cursor: pointer;
`;

export default HamburgerMenu;
