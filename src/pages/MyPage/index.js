import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Nav from './nav';

const MyPage = () => {
  return (
    <Container>
      <Title to="/mypage">마이페이지</Title>
      <Nav />
    </Container>
  );
};

const Container = styled.div`
  margin-top: 12vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 480px) {
    margin-top: 10vh;
  }
`;

const Title = styled(Link)`
  text-decoration: none;
  font-family: Arial;
  font-size: 2vw;
  font-weight: bold;
  color: black;
  @media (max-width: 768px) {
    font-size: 3vw;
  }
  @media (max-width: 480px) {
    font-size: 4vw;
  }
`;
export default MyPage;
