import React from 'react';
import styled from 'styled-components';

const SubscribeMagazine = () => {
  return (
    <MyDiv>
      <MyP>메거진을 구독하세요</MyP>
    </MyDiv>
  );
};

const MyDiv = styled.div`
  margin-top: 19.9vh;
  margin-bottom: 5vh;
  display: flex;
  justify-content: center;
  @media (max-width: 375px) {
    margin-bottom: 10vh;
  }
`;
const MyP = styled.p`
  font-family: Arial;
  font-size: 4vw;
  font-weight: bold;
  padding: 0px;
  margin: 0px;
  @media (max-width: 768px) {
    font-size: 5.8vw;
  }
`;

export default SubscribeMagazine;
