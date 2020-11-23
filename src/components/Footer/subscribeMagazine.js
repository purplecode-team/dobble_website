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
  margin-bottom: 4.62vh;
`;
const MyP = styled.p`
  font-family: Arial;
  font-size: 4vw;
  font-weight: bold;
  text-align: center;
  padding: 0px;
  margin: 0px;
`;

export default SubscribeMagazine;
