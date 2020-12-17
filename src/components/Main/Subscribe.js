import React from 'react';
import styled from 'styled-components';
import SubscribeMagazine from './subscribeMagazine';
import InputEmail from './inputEmail';
import Sns from './sns';

const Subscribe = () => {
  return (
    <IndexDiv>
      <SubscribeMagazine />
      <InputEmail />
      <Sns />
    </IndexDiv>
  );
};

const IndexDiv = styled.div`
  overflow-x: hidden;
  height: 100vh;
`;

export default Subscribe;
