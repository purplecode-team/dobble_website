import React from 'react';
import styled from 'styled-components';
import Nav from './nav';

const MyPage = () => {
  return (
    <Container>
      <Title>마이페이지</Title>
      <Nav />
    </Container>
  );
};

const Container = styled.div`
  margin-top: 14.35vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div`
  font-family: Arial;
  font-size: 2.08vw;
  font-weight: bold;
`;
export default MyPage;
