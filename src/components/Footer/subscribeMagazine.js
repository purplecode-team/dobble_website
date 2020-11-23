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
  margin-top: 215px;
  margin-bottom: 70px;
`;
const MyP = styled.p`
  font-family: Arial;
  font-size: 70px;
  font-weight: bold;
  text-align: center;
  padding: 0px;
  margin: 0px;
`;

export default SubscribeMagazine;
