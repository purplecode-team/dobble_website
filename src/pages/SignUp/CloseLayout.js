import React from 'react';
import styled from 'styled-components';
import circleGray from '../../components/img/circle_gray.png';

const CloseLayout = ({ title }) => {
  return (
    <CloseDiv>
      <Circle src={circleGray} alt="circleGray" />
      <TitleDiv>{title}</TitleDiv>
    </CloseDiv>
  );
};

const CloseDiv = styled.div`
  display: flex;
  margin: 0 auto;
  width: 58vw;
  font-size: 1.041vw;
  @media (max-width: 768px) {
    width: 76vw;
  }
`;
const Circle = styled.img`
  margin-right: 2.604vw;
  margin-bottom: 5.3vh;
  width: 20px;
  height: 20px;
  @media (max-width: 768px) {
    width: 15px;
    height: 15px;
  }
`;
const TitleDiv = styled.div`
  font-size: 1.25vw;
  height: 3.518vh;
  margin-bottom: 2.77vh;
  font-weight: bold;
`;

export default CloseLayout;
