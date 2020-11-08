import React from 'react';
import styled from 'styled-components';
import CloseIcon from '../img/closeIcon.png';
import MenuItem from './menuItem';

const HamburgerMenu = ({ open, toggleHamburger }) => {
  return (
    <MenuDiv open={open}>
      <TopSection>
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
  width: 100vw;
`;

const MidSection = styled.div`
  width: 100vw;
  margin-top: 60px;
`;

const CloseBtn = styled.img`
  width: 20px;
  height: 20px;
`;

const XButton = styled.div`
  margin: 20px;
  float: right;
  cursor: pointer;
`;

export default HamburgerMenu;
