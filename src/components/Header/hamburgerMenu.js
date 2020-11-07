import React from 'react';
import styled from 'styled-components';

const HamburgerMenu = ({ open, toggleHamburger }) => {
  return (
    <MenuDiv open={open}>
      <XButton
        type="button"
        onClick={() => {
          toggleHamburger();
        }}
      >
        X
      </XButton>

      <div>menu item</div>
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
  background: white;
  z-index: 1;
  display: ${({ open }) => (open ? 'none' : 'block')};
`;

const XButton = styled.button`
  float: right;
  margin: 10px;
  border: none;
  background: white;
  font-size: 3rem;
  cursor: pointer;
`;

export default HamburgerMenu;
