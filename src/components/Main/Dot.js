import React from 'react';
import styled from 'styled-components';
import Dot1 from '../img/dot1.png';

const Dot = ({ page }) => {
  return (
    <DotSection>
      <div>
        <img src={Dot1} alt={`Dot${page}`} />
      </div>
    </DotSection>
  );
};

const DotSection = styled.div`
  position: fixed;
  bottom: 120px;
  right: 80px;
  z-index: 10000;
  @media (max-width: 768px) {
    bottom: 120px;
    right: 40px;
  }
`;

export default Dot;
