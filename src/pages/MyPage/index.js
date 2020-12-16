import React from 'react';
import styled from 'styled-components';
import { Link, Route } from 'react-router-dom';
import Nav from './nav';
import UserInfo from './UserInfo';
import ChangeUserInfo from './ChangeUserInfo';
import WishList from './wishList';

const MyPage = () => {
  return (
    <Container>
      <Title to="/mypage">마이페이지</Title>
      <Nav />
      <Route path="/mypage" exact component={UserInfo} />
      <Route path="/mypage/changeuserinfo" component={ChangeUserInfo} />
      <Route path="/mypage/wishlist" component={WishList} />
    </Container>
  );
};

const Container = styled.div`
  overflow-x: hidden;
  overflow-y: auto;
  width: 660px;
  margin: 11vh auto 0 auto;
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    width: 450px;
  }
  @media (max-width: 480px) {
    width: 330px;
    margin-top: 10vh;
  }
`;

const Title = styled(Link)`
  text-align: center;
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
