import React from 'react';
import styled from 'styled-components';

const Modal = ({ open }) => {
  return (
    <div>
      <Dimmer open={open}>
        <h1>s</h1>
        <h1>s</h1>
        <h1>s</h1>
        <h1>s</h1>
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

export default Modal;
