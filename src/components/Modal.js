import React from 'react';
import styled from 'styled-components';
import CloseIcon from './img/closeIcon.png';

const Modal = ({ open, closeModal }) => {
  return (
    <div>
      <Dimmer open={open}>
        <ModalDiv>
          <XButton onClick={closeModal}>
            <CloseBtn src={CloseIcon} alt="closeBtn" />
          </XButton>
          <h1>s</h1>
          <h1>s</h1>
          <h1>s</h1>
          <h1>s</h1>
        </ModalDiv>
      </Dimmer>
    </div>
  );
};

const Dimmer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #00000080;
  z-index: 10000;
  display: ${({ open }) => (open ? 'block' : 'none')};
`;

const ModalDiv = styled.div`
  position: absolute;
  width: 60%;
  height: 60%;
  top: 20%;
  left: 19%;
  background: white;
  border-radius: 26px;
  padding: 30px;
  @media (max-width: 768px) {
    width: 80%;
    height: 80%;
    left: 5%;
    top: 10%;
  }
`;

const CloseBtn = styled.img`
  width: 20px;
  height: 20px;
`;

const XButton = styled.div`
  cursor: pointer;
`;

export default Modal;
